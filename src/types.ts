// ─── Role System ─────────────────────────────────────────────────────────────
export type AppRole = 'Admin' | 'Asset Manager' | 'Department Head' | 'Employee';

export interface UserProfile {
  name: string;
  email: string;
  role: AppRole;
  avatar: string;
  department?: string; // Required for Department Head and Employee
}

// ─── Assets ──────────────────────────────────────────────────────────────────
export type AssetStatus = 'Available' | 'Allocated' | 'Maintenance' | 'Damaged' | 'Lost';

export interface AllocationRecord {
  date: string;
  assignedTo: string;
  assignedBy: string;
  department?: string;
  returnedOn?: string;
  condition?: string;
}

export interface Asset {
  tag: string;
  name: string;
  category: string;
  status: AssetStatus;
  location: string;
  serial: string;
  image?: string;
  // Allocation tracking
  assignee?: string;           // current holder name (legacy compat)
  allocatedTo?: string;        // current holder name
  allocatedToDept?: string;    // current holder's department
  dueDate?: string;
  expectedLocation?: string;
  // History
  allocationHistory: AllocationRecord[];
  maintenanceHistory: string[];
  // Audit
  lastVerified?: string;
  verificationStatus?: 'Verified' | 'Missing' | 'Damaged' | 'Pending';
}

// ─── Departments & Employees ─────────────────────────────────────────────────
export interface Department {
  id: string;
  name: string;
  head: string;
  headAvatar: string;
  parentDept: string;
  status: 'Active' | 'Inactive';
}

export interface Employee {
  id: string;
  name: string;
  email: string;
  dept: string;
  role: AppRole;
  jobTitle: string;
  avatar: string;
  status: 'Active' | 'Inactive';
}

// ─── Transfer & Return Requests ───────────────────────────────────────────────
export type TransferStatus = 'Pending' | 'Approved' | 'Rejected';

export interface TransferRequest {
  id: string;
  assetTag: string;
  assetName: string;
  requestedBy: string;         // user.name of requester
  requestedByDept?: string;
  currentHolder?: string;
  requestType: 'Transfer' | 'Return';
  targetHolder?: string;
  targetDept?: string;
  reason: string;
  status: TransferStatus;
  rejectionReason?: string;
  requestedAt: string;
  resolvedAt?: string;
  resolvedBy?: string;
}

// ─── Bookings ────────────────────────────────────────────────────────────────
export type BookingStatus = 'Upcoming' | 'Ongoing' | 'Completed' | 'Cancelled';

export interface Booking {
  id: string;
  resource: string;
  title: string;
  timeRange: string;
  startHour: number;
  endHour: number;
  date: string;
  bookedBy?: string;
  bookedByDept?: string;
  status?: BookingStatus;
  isConflict?: boolean;
}

// ─── Maintenance ─────────────────────────────────────────────────────────────
export type MaintenanceColumn = 'PENDING' | 'APPROVED' | 'TECHNICIAN ASSIGNED' | 'IN PROGRESS' | 'RESOLVED';
export type MaintenancePriority = 'URGENT' | 'HIGH' | 'MEDIUM' | 'NORMAL' | 'ONGOING' | 'COMPLETED';

export interface MaintenanceTicket {
  id: string;
  assetTag: string;
  title: string;
  description: string;
  priority: MaintenancePriority;
  column: MaintenanceColumn;
  assignee?: string;
  assigneeAvatar?: string;
  reportedTime: string;
  raisedBy?: string;           // user.name who raised the ticket
  raisedByDept?: string;
  rejectedReason?: string;     // shown back to raiser if rejected
  isRejected?: boolean;
}

// ─── Notifications ────────────────────────────────────────────────────────────
export type NotificationType = 'asset' | 'maintenance' | 'booking' | 'transfer' | 'audit' | 'alert';

export interface Notification {
  id: string;
  recipientName: string;       // targeted — only the named user sees this
  title: string;
  message: string;
  icon: string;
  type: NotificationType;
  timestamp: string;
  isRead: boolean;
}

// ─── Activity Logs ───────────────────────────────────────────────────────────
export interface ActivityLog {
  id: string;
  icon: string;
  type: 'all' | 'alerts' | 'approvals' | 'bookings';
  title: string;
  description: string;
  timestamp: string;
  isAlert?: boolean;
}
