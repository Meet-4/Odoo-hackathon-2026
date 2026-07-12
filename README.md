# AssetFlow — Resource & Compliance ERM

An enterprise resource management dashboard built for organizations that need to track hardware, manage allocations, handle maintenance, and keep audit trails — all without switching between five different tools.

## Key Features

- **Database**: Uses **SQLite** via **Prisma ORM** for robust data persistence.
- **Backend**: **Express.js** (Node.js) server with RESTful API endpoints. Handles authentication, user registration, dynamic OTP generation via Nodemailer, and dynamic CRUD operations.
- **Frontend**: Built with **React 19**, **Vite**, **Tailwind CSS v4**, and **Framer Motion** for a dynamic, responsive, and smooth user interface.

## Modules

| Module | What it covers |
|---|---|
| **Dashboard** | Live overview — asset health, open tickets, recent activity log, quick-action shortcuts |
| **Organization Setup** | Department hierarchy, head of department assignment, active/inactive toggle |
| **Assets & Allocation** | Full inventory with tag-based lookup, status tracking, inter-department transfers |
| **Resource Booking** | Shared room and equipment scheduling with conflict detection |
| **Maintenance Hub** | Kanban board — tickets move from Pending → Approved → Technician Assigned → In Progress → Resolved |
| **Audit & Compliance** | Field verification tool — mark assets Verified / Missing / Damaged against expected locations |
| **Reports & Analytics** | Utilization metrics and exportable summaries |

---

## Tech Stack

- **Frontend**: React 19 (TypeScript), Vite 6, Tailwind CSS v4, Framer Motion, Lucide React
- **Backend**: Express.js (Node 18+)
- **Database & ORM**: SQLite (via `better-sqlite3`), Prisma ORM (`@prisma/client`)
- **Email Service**: Nodemailer (via Gmail SMTP for OTP and notifications)
- **Dev Tools**: `concurrently` to run both client and server simultaneously in local environments.

---

## Project Layout

```
.
├── server.js              # Express backend (OTP email, registration, Prisma CRUD)
├── .env                   # Gmail credentials + port config + DB URL
├── vite.config.ts
├── package.json
├── prisma/
│   ├── schema.prisma      # SQLite database schema
│   ├── seed.js            # Database seed script
│   └── dev.db             # SQLite database file
└── src/
    ├── main.tsx
    ├── App.tsx            # Root state, routing logic
    ├── types.ts           # Shared TypeScript interfaces
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

---

## Database Schema (Prisma)

The application uses Prisma ORM to manage SQLite data. The models include:
- `User` and `Department` (Organization structure and roles)
- `Asset` (Inventory, location, allocation history, maintenance history)
- `MaintenanceTicket` (Issue tracking)
- `TransferRequest` (Asset relocation workflows)
- `Booking` (Scheduling resources)
- `Notification` & `ActivityLog` (System alerts and history logs)

---

## Getting Started

You need **Node.js 18+** installed.

**1. Clone and install**

```bash
git clone https://github.com/Meet-4/Odoo-hackathon-2026
cd Odoo-hackathon-2026-main
npm install
```

**2. Configure the environment**

Create a `.env` file at the root containing:

```env
# Email (Gmail App Password - not your regular Gmail password)
EMAIL_SERVICE=gmail
EMAIL_USER=your@gmail.com
EMAIL_PASS=xxxx xxxx xxxx xxxx

# Server Port
PORT=5000

# Vite Config
VITE_USE_BACKEND=true
VITE_BACKEND_URL=http://localhost:5000

# Database URL
DATABASE_URL=file:./dev.db
```

*To generate a Gmail App Password: Google Account → Security → 2-Step Verification → App passwords.*

**3. Initialize the Database**

To set up your SQLite database, run the Prisma migration and seed scripts:

```bash
npx prisma generate
npx prisma db push
node prisma/seed.js # Optional: Run if available to populate demo data
```

**4. Run everything**

Use the combined script or run separate terminals:

```bash
# one command
npm run dev:full

Open `http://localhost:3000`.

---

## Backend API

All core modules interact with the Express server. The endpoints include:

- **Auth & OTP**:
  - `POST /api/forgot-password` → generates OTP, sends email via Nodemailer
  - `POST /api/verify-otp` → validates OTP, returns a reset token
  - `POST /api/reset-password` → accepts reset token + new password
  - `POST /api/register` → creates a new account securely in the database
- **CRUD Endpoints** (GET, POST, PUT, DELETE for Prisma models):
  - `/api/users`, `/api/departments`, `/api/assets`, `/api/maintenanceTickets`, `/api/transferRequests`, `/api/bookings`, `/api/notifications`, `/api/activityLogs`
- **Health**: `GET /api/health`

---

## Authentication & OTP Flow

**Sign In**: Sign into your account stored in the SQLite database.
**Forgot Password**: 
1. Enter email → secure 6-digit code delivered via Gmail.
2. Enter the code (10-minute window, 5 attempt limit).
3. Set a new password.
**Create Account**: Securely inserts new user accounts in the backend.

---

## Asset Status Lifecycle

```
Available → Allocated → Maintenance → Available
                     ↘ Damaged / Missing
```

When a maintenance ticket is filed against an asset tag, the asset automatically moves to `Maintenance`. Marking the ticket `RESOLVED` flips it back to `Available`. The audit module can independently mark an asset `Missing` or `Damaged` from a field scan.

---
