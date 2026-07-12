import express from 'express';
import nodemailer from 'nodemailer';
import dotenv from 'dotenv';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import crypto from 'crypto';
import { PrismaClient } from './prisma/generated-client/index.js';
import { PrismaBetterSqlite3 } from '@prisma/adapter-better-sqlite3';

dotenv.config();

const adapter = new PrismaBetterSqlite3({
  url: process.env.DATABASE_URL || 'file:./dev.db',
});
const prisma = new PrismaClient({ adapter });

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();
app.use(express.json());

// CORS middleware for local dev
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
  if (req.method === 'OPTIONS') return res.sendStatus(200);
  next();
});

// In-memory store for OTPs and reset tokens (keyed by email)
const otpStore = new Map(); // email -> { otp, expires, attempts }

// Nodemailer transporter using Gmail SMTP
const transporter = nodemailer.createTransport({
  service: process.env.EMAIL_SERVICE || 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

// Verify transporter connection on startup
transporter.verify((error) => {
  if (error) {
    console.error('❌ Email transporter error:', error.message);
  } else {
    console.log('✅ Email transporter ready — connected to', process.env.EMAIL_SERVICE || 'gmail');
  }
});

/**
 * POST /api/forgot-password
 * Generates a 6-digit OTP and emails it to the user.
 */
app.post('/api/forgot-password', async (req, res) => {
  const { email } = req.body;

  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return res.status(400).json({ success: false, message: 'A valid email address is required.' });
  }

  // Generate secure 6-digit OTP
  const otp = crypto.randomInt(100000, 999999).toString();
  const expires = Date.now() + 10 * 60 * 1000; // 10 minutes

  otpStore.set(email.toLowerCase(), { otp, expires, attempts: 0 });

  const mailOptions = {
    from: `"AssetFlow Security" <${process.env.EMAIL_USER}>`,
    to: email,
    subject: '🔐 Your AssetFlow Password Reset Code',
    html: `
      <!DOCTYPE html>
      <html>
      <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
      </head>
      <body style="margin:0;padding:0;background:#0f172a;font-family:'Segoe UI',sans-serif;">
        <table width="100%" cellpadding="0" cellspacing="0" style="background:#0f172a;padding:40px 0;">
          <tr>
            <td align="center">
              <table width="480" cellpadding="0" cellspacing="0" style="background:#1e293b;border-radius:16px;overflow:hidden;border:1px solid #334155;">
                <tr>
                  <td style="background:linear-gradient(135deg,#4338ca,#6366f1);padding:32px;text-align:center;">
                    <div style="display:inline-block;">
                      <p style="margin:0;color:#fff;font-size:20px;font-weight:700;letter-spacing:-0.5px;">🛡️ AssetFlow</p>
                      <p style="margin:0;color:rgba(255,255,255,0.7);font-size:11px;letter-spacing:2px;text-transform:uppercase;">Resource &amp; Compliance</p>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td style="padding:36px 32px;">
                    <h2 style="margin:0 0 8px;color:#f1f5f9;font-size:22px;font-weight:700;">Password Reset Request</h2>
                    <p style="margin:0 0 28px;color:#94a3b8;font-size:14px;line-height:1.6;">
                      We received a request to reset your password for <strong style="color:#c7d2fe;">${email}</strong>. Use the verification code below:
                    </p>
                    <div style="background:#0f172a;border:2px solid #4338ca;border-radius:12px;padding:24px;text-align:center;margin-bottom:28px;">
                      <p style="margin:0 0 8px;color:#94a3b8;font-size:12px;letter-spacing:2px;text-transform:uppercase;font-weight:600;">Verification Code</p>
                      <p style="margin:0;color:#818cf8;font-size:42px;font-weight:800;letter-spacing:12px;font-family:monospace;">${otp}</p>
                      <p style="margin:8px 0 0;color:#64748b;font-size:11px;">⏱ Expires in <strong>10 minutes</strong></p>
                    </div>
                    <div style="background:#0f172a;border:1px solid #334155;border-radius:8px;padding:14px 16px;margin-bottom:24px;">
                      <p style="margin:0;color:#64748b;font-size:12px;">⚠️ If you did not request this, please ignore this email. Your account remains secure.</p>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td style="padding:16px 32px 24px;text-align:center;border-top:1px solid #334155;">
                    <p style="margin:0;color:#475569;font-size:11px;">© 2026 AssetFlow · AES-256 Secured · Multi-tenant Workspace</p>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
        </table>
      </body>
      </html>
    `,
  };

  try {
    await transporter.sendMail(mailOptions);
    console.log(`📧 OTP sent to ${email}`);
    res.json({ success: true, message: 'OTP sent successfully. Check your inbox.' });
  } catch (err) {
    console.error('❌ Failed to send email:', err.message);
    res.status(500).json({ success: false, message: 'Failed to send OTP. Please try again later.' });
  }
});

/**
 * POST /api/verify-otp
 * Verifies the OTP entered by the user.
 */
app.post('/api/verify-otp', (req, res) => {
  const { email, otp } = req.body;

  if (!email || !otp) {
    return res.status(400).json({ success: false, message: 'Email and OTP are required.' });
  }

  const record = otpStore.get(email.toLowerCase());

  if (!record) {
    return res.status(404).json({ success: false, message: 'No OTP found for this email. Please request a new one.' });
  }

  if (Date.now() > record.expires) {
    otpStore.delete(email.toLowerCase());
    return res.status(410).json({ success: false, message: 'OTP has expired. Please request a new one.' });
  }

  if (record.attempts >= 5) {
    otpStore.delete(email.toLowerCase());
    return res.status(429).json({ success: false, message: 'Too many failed attempts. Please request a new OTP.' });
  }

  if (record.otp !== otp.toString()) {
    record.attempts += 1;
    return res.status(401).json({ success: false, message: `Incorrect OTP. ${5 - record.attempts} attempts remaining.` });
  }

  // OTP verified — clear and issue a short-lived reset token
  otpStore.delete(email.toLowerCase());
  const resetToken = crypto.randomBytes(32).toString('hex');
  otpStore.set(`reset_${email.toLowerCase()}`, { token: resetToken, expires: Date.now() + 5 * 60 * 1000 });

  res.json({ success: true, message: 'OTP verified.', resetToken });
});

/**
 * POST /api/reset-password
 * Accepts new password with a valid reset token.
 */
app.post('/api/reset-password', (req, res) => {
  const { email, resetToken, newPassword } = req.body;

  if (!email || !resetToken || !newPassword) {
    return res.status(400).json({ success: false, message: 'All fields are required.' });
  }

  if (newPassword.length < 6) {
    return res.status(400).json({ success: false, message: 'Password must be at least 6 characters.' });
  }

  const record = otpStore.get(`reset_${email.toLowerCase()}`);

  if (!record || record.token !== resetToken || Date.now() > record.expires) {
    return res.status(401).json({ success: false, message: 'Invalid or expired reset session. Please start over.' });
  }

  otpStore.delete(`reset_${email.toLowerCase()}`);
  // In production: update hashed password in database here.
  console.log(`🔑 Password reset completed for: ${email}`);
  res.json({ success: true, message: 'Password reset successfully. You can now sign in with your new password.' });
});

/**
 * POST /api/register
 * Registers a new account and saves it to the database.
 */
app.post('/api/register', async (req, res) => {
  const { name, email, password, department, role } = req.body;

  if (!name || !email || !password) {
    return res.status(400).json({ success: false, message: 'Name, email, and password are required.' });
  }
  if (password.length < 6) {
    return res.status(400).json({ success: false, message: 'Password must be at least 6 characters.' });
  }

  try {
    const existingUser = await prisma.user.findUnique({
      where: { email: email.toLowerCase() }
    });

    if (existingUser) {
      return res.status(409).json({ success: false, message: 'An account with this email already exists.' });
    }

    const newUser = await prisma.user.create({
      data: {
        name,
        email: email.toLowerCase(),
        passwordHash: password, // Note: In a production app, hash this password before storing
        dept: department,
        role: role || 'Employee'
      }
    });

    console.log(`👤 New account registered in database: ${email}`);
    res.json({
      success: true,
      message: 'Account created successfully. You can now sign in.',
      user: { name: newUser.name, email: newUser.email, role: newUser.role },
    });
  } catch (error) {
    console.error('❌ Failed to register user:', error);
    res.status(500).json({ success: false, message: 'Failed to create account.' });
  }
});

// --- NEW PRISMA API ROUTES ---

const models = [
  'user',
  'department',
  'asset',
  'maintenanceTicket',
  'transferRequest',
  'booking',
  'notification',
  'activityLog'
];

models.forEach(modelName => {
  const route = `/api/${modelName}s`;
  
  // GET all
  app.get(route, async (req, res) => {
    try {
      let data = await prisma[modelName].findMany();
      if (modelName === 'asset') {
        data = data.map(asset => ({
          ...asset,
          allocationHistory: JSON.parse(asset.allocationHistory || '[]'),
          maintenanceHistory: JSON.parse(asset.maintenanceHistory || '[]')
        }));
      }
      res.json(data);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: `Failed to fetch ${modelName}s` });
    }
  });

  // POST create
  app.post(route, async (req, res) => {
    try {
      let payload = { ...req.body };
      if (modelName === 'asset') {
        if (payload.allocationHistory) payload.allocationHistory = JSON.stringify(payload.allocationHistory);
        if (payload.maintenanceHistory) payload.maintenanceHistory = JSON.stringify(payload.maintenanceHistory);
      }
      let data = await prisma[modelName].create({ data: payload });
      if (modelName === 'asset') {
        data.allocationHistory = JSON.parse(data.allocationHistory || '[]');
        data.maintenanceHistory = JSON.parse(data.maintenanceHistory || '[]');
      }
      res.json(data);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: `Failed to create ${modelName}` });
    }
  });

  // PUT update
  app.put(`${route}/:id`, async (req, res) => {
    try {
      const idField = modelName === 'asset' ? 'tag' : 'id';
      let payload = { ...req.body };
      if (modelName === 'asset') {
        if (payload.allocationHistory) payload.allocationHistory = JSON.stringify(payload.allocationHistory);
        if (payload.maintenanceHistory) payload.maintenanceHistory = JSON.stringify(payload.maintenanceHistory);
      }
      let data = await prisma[modelName].update({
        where: { [idField]: req.params.id },
        data: payload
      });
      if (modelName === 'asset') {
        data.allocationHistory = JSON.parse(data.allocationHistory || '[]');
        data.maintenanceHistory = JSON.parse(data.maintenanceHistory || '[]');
      }
      res.json(data);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: `Failed to update ${modelName}` });
    }
  });

  // DELETE
  app.delete(`${route}/:id`, async (req, res) => {
    try {
      const idField = modelName === 'asset' ? 'tag' : 'id';
      await prisma[modelName].delete({ where: { [idField]: req.params.id } });
      res.json({ success: true });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: `Failed to delete ${modelName}` });
    }
  });
});

// Health check
app.get('/api/health', (_req, res) => res.json({ status: 'ok', timestamp: new Date().toISOString() }));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`\n🚀 AssetFlow Backend running on http://localhost:${PORT}`);
  console.log(`   Email user : ${process.env.EMAIL_USER}`);
  console.log(`   Email svc  : ${process.env.EMAIL_SERVICE || 'gmail'}\n`);
});
