import { PrismaClient } from './generated-client/index.js';
import { PrismaBetterSqlite3 } from '@prisma/adapter-better-sqlite3';
import 'dotenv/config';

const adapter = new PrismaBetterSqlite3({
  url: process.env.DATABASE_URL, // e.g. "file:./dev.db"
});

const prisma = new PrismaClient({ adapter });

// ... the rest of your seeding code remains exactly the same

async function main() {
  // Clear any existing data
  await prisma.maintenanceTicket.deleteMany({});
  await prisma.asset.deleteMany({});
  await prisma.department.deleteMany({});
  await prisma.user.deleteMany({});

  console.log("Creating demo users...");
  const suresh = await prisma.user.create({
    data: { name: "Suresh Kumar", email: "suresh@demo.com", role: "Administrator" }
  });
  const priya = await prisma.user.create({
    data: { name: "Priya Shah", email: "priya@demo.com", role: "Fleet & Asset Manager" }
  });
  const rohan = await prisma.user.create({
    data: { name: "Rohan Mehta", email: "rohan@demo.com", role: "Department Representative" }
  });

  console.log("Creating demo department...");
  const IT = await prisma.department.create({
    data: { name: "IT Operations", headOfDeptId: suresh.id, isActive: true }
  });

  console.log("Creating demo assets...");
  await prisma.asset.create({
    data: { tag: "LAP-001", name: "MacBook Pro M3", status: "Available", departmentId: IT.id }
  });
  await prisma.asset.create({
    data: { tag: "MON-002", name: "Dell 27-inch 4K Monitor", status: "Available", departmentId: IT.id }
  });

  console.log("Database successfully seeded with clean hackathon demo profiles!");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });