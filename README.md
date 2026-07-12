
# AssetFlow — Resource & Compliance ERM

An enterprise resource management dashboard built for organizations that need to track hardware, manage allocations, handle maintenance, and keep audit trails — all without switching between five different tools.

> **v1.0** 
·---

## What it does

The app is split into seven modules accessible from the sidebar. Each one handles a distinct operational concern:

| Module | What it covers |
|---|---|
| **Dashboard** | Live overview — asset health, open tickets, recent activity log, quick-action shortcuts |
| **Organization Setup** | Department hierarchy, head of department assignment, active/inactive toggle |
| **Assets & Allocation** | Full inventory with tag-based lookup, status tracking, inter-department transfers |
| **Resource Booking** | Shared room and equipment scheduling with conflict detection |
| **Maintenance Hub** | Kanban board — tickets move from Pending → Approved → Technician Assigned → In Progress → Resolved |
| **Audit & Compliance** | Field verification tool — mark assets Verified / Missing / Damaged against expected locations |
| **Reports & Analytics** | Utilization metrics and exportable summaries |

Session state and all module data persist to `localStorage`, so refreshing doesn't wipe your work.

---

## Project layout

```
.
├── server.js              # Express backend (OTP email, registration)
├── .env                   # Gmail credentials + port config
├── vite.config.ts
├── package.json
└── src/
    ├── main.tsx
    ├── App.tsx            # Root state, routing logic, localStorage sync
    ├── types.ts           # Shared TypeScript interfaces
    ├── data.ts            # Seed data (assets, departments, tickets, logs)
    ├── index.css
    └── components/
        ├── Login.tsx          # Auth page — sign in, register, OTP forgot-password
        ├── Sidebar.tsx        # Navigation + user profile + logout
        ├── Dashboard.tsx
        ├── OrganizationSetup.tsx
        ├── AssetsCatalog.tsx
        ├── ResourceBooking.tsx
        ├── MaintenanceKanban.tsx
        ├── AuditCompliance.tsx
        └── Reports.tsx
```

`App.tsx` owns all the master state and passes handlers down as props. There's no external state library — everything is `useState` + `useEffect` synced to `localStorage`.

---

## Getting started

You need **Node.js 18+** installed.

**1. Clone and install**

```bash
git clone https://github.com/Meet-4/Odoo-hackathon-2026
npm install
```

**2. Configure the environment**

The `.env` file at the root should look like this:

```env
# Email (Gmail App Password — not your regular Gmail password)
EMAIL_SERVICE=gmail
EMAIL_USER=your@gmail.com
EMAIL_PASS=xxxx xxxx xxxx xxxx

# Server
PORT=5000

# Tell Vite where the backend lives
VITE_USE_BACKEND=true
VITE_BACKEND_URL=http://localhost:5000
```

To generate a Gmail App Password: Google Account → Security → 2-Step Verification → App passwords.

**3. Run everything**

Two terminals, or use the combined script:

```bash
# Option A — one command
npm run dev:full

# Option B — separate terminals
npm run server   # backend on :5000
npm run dev      # frontend on :3000
```

Open `http://localhost:3000`.

---
## Backend API

The Express server handles email delivery and account registration. All routes are under `/api`.

```
POST /api/forgot-password   → generates OTP, sends email
POST /api/verify-otp        → validates OTP, returns a reset token
POST /api/reset-password    → accepts reset token + new password
POST /api/register          → creates a new account
GET  /api/health            → sanity check
```

OTPs expire in 10 minutes. Reset tokens expire in 5 minutes. Everything is in-memory — restart the server and they're gone. For a production setup you'd swap this out for a database.

---

## Authentication

The login page ships with three pre-built demo profiles for quick access:

| Name | Role |
|---|---|
| Suresh Kumar | Administrator |
| Priya Shah | Fleet & Asset Manager |
| Rohan Mehta | Department Representative |

Click any profile card and hit the sign-in button. No password required for demo profiles.

**Forgot password** goes through a three-step OTP flow:
1. Enter email → 6-digit code delivered via Gmail
2. Enter the code (10-minute window, 5 attempt limit)
3. Set a new password

**Create Account / Sign Up** both hit `POST /api/register` on the backend and store the new user in memory for the session.

---

## Asset status lifecycle

```
Available → Allocated → Maintenance → Available
                     ↘ Damaged
```

When a maintenance ticket is filed against an asset tag, the asset automatically moves to `Maintenance`. Marking the ticket `RESOLVED` flips it back to `Available`. The audit module can independently mark an asset `Missing` or `Damaged` from a field scan.

---

## Tech stack

- **React 19** with TypeScript
- **Vite 6** 
- **Lucide React** for icons
- **Express 4** for the backend
- **Nodemailer** with Gmail SMTP
- **concurrently** to run both servers in one command


---

## Known limitations

- User accounts from the registration flow don't survive a server restart (no database).
- Password resets don't actually update any stored credential — the flow works end-to-end but the "new password" isn't enforced on subsequent logins.
- All data (assets, tickets, bookings) is per-browser. There's no multi-user sync.

These are intentional trade-offs for a frontend-first prototype.

---
