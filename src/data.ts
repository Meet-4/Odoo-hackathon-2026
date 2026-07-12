import { Asset, Department, Booking, MaintenanceTicket, ActivityLog, Employee, TransferRequest, Notification } from './types';

export const initialAssets: Asset[] = [
  {
    tag: 'AF-0012',
    name: 'Dell Laptop Latitude 5420',
    category: 'Electronics',
    status: 'Allocated',
    location: 'Bengaluru - HQ',
    serial: 'SN: DL-77291-Q',
    expectedLocation: 'Desk E12',
    lastVerified: 'Jul 02, 10:45 AM',
    verificationStatus: 'Verified',
    assignee: 'Alex Employee',
    allocatedTo: 'Alex Employee',
    allocatedToDept: 'Engineering',
    allocationHistory: [
      { date: 'Jul 01, 09:00 AM', assignedTo: 'Alex Employee', assignedBy: 'Priya Shah', department: 'Engineering' }
    ],
    maintenanceHistory: [],
    image: 'https://images.unsplash.com/photo-1593642632823-8f785ba67e45?auto=format&fit=crop&q=80&w=400'
  },
  {
    tag: 'AF-0062',
    name: 'Epson Pro Projector',
    category: 'Electronics',
    status: 'Maintenance',
    location: 'HQ - Floor 2',
    serial: 'SN: EP-88301-A',
    expectedLocation: 'Desk E15',
    lastVerified: 'Jul 05, 02:15 PM',
    verificationStatus: 'Damaged',
    allocationHistory: [],
    maintenanceHistory: ['Projector bulb fault reported Jul 12'],
    image: 'https://images.unsplash.com/photo-1535016120720-40c646be5580?auto=format&fit=crop&q=80&w=400'
  },
  {
    tag: 'AF-0201',
    name: 'Ergonomic Office Chair',
    category: 'Furniture',
    status: 'Available',
    location: 'Warehouse A',
    serial: 'SN: CH-09482-B',
    expectedLocation: 'Storage Room 4',
    lastVerified: 'Jul 02, 11:00 AM',
    verificationStatus: 'Verified',
    allocationHistory: [],
    maintenanceHistory: [],
    image: 'https://images.unsplash.com/photo-1505797149-43b0069ec26b?auto=format&fit=crop&q=80&w=400'
  },
  {
    tag: 'AF-0410',
    name: 'Forklift - Heavy Duty',
    category: 'Machinery',
    status: 'Damaged',
    location: 'Loading Bay 3',
    serial: 'SN: FL-10482-C',
    expectedLocation: 'Loading Dock B',
    lastVerified: 'Pending Verification',
    verificationStatus: 'Pending',
    allocationHistory: [],
    maintenanceHistory: [],
    image: 'https://images.unsplash.com/photo-1578328819058-b69f3a3b0f6b?auto=format&fit=crop&q=80&w=400'
  },
  {
    tag: 'AF-0014',
    name: 'Dell XPS 15',
    category: 'Electronics',
    status: 'Allocated',
    location: 'HQ - IT Dept',
    serial: 'SN: DX-99120-E',
    expectedLocation: 'Desk E14',
    lastVerified: 'Pending Verification',
    verificationStatus: 'Missing',
    assignee: 'Alex Employee',
    allocatedTo: 'Alex Employee',
    allocatedToDept: 'Engineering',
    allocationHistory: [
      { date: 'Jun 28, 10:00 AM', assignedTo: 'Alex Employee', assignedBy: 'Priya Shah', department: 'Engineering' }
    ],
    maintenanceHistory: [],
    image: 'https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?auto=format&fit=crop&q=80&w=400'
  },
  {
    tag: 'AF-9921',
    name: 'Office Chair ErgoPro X-Series',
    category: 'Furniture',
    status: 'Allocated',
    location: 'HQ - Floor 1',
    serial: 'SN: CH-99210-P',
    expectedLocation: 'Desk E14',
    lastVerified: 'Pending Verification',
    verificationStatus: 'Missing',
    assignee: 'Sana Iqbal',
    allocatedTo: 'Sana Iqbal',
    allocatedToDept: 'Facilities',
    allocationHistory: [
      { date: 'Jul 05, 02:00 PM', assignedTo: 'Sana Iqbal', assignedBy: 'Rohan Mehta', department: 'Facilities' }
    ],
    maintenanceHistory: [],
    image: 'https://images.unsplash.com/photo-1580481072645-022f9a6dbf27?auto=format&fit=crop&q=80&w=400'
  },
  {
    tag: 'AF-9832',
    name: 'LG UltraWide 34" Monitor',
    category: 'Electronics',
    status: 'Maintenance',
    location: 'HQ - IT Dept',
    serial: 'SN: LG-98320-M',
    expectedLocation: 'Desk E15',
    lastVerified: 'Jul 05, 02:15 PM',
    verificationStatus: 'Damaged',
    allocationHistory: [],
    maintenanceHistory: ['Monitor flickering issue reported Jul 10'],
    image: 'https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?auto=format&fit=crop&q=80&w=400'
  }
];

export const initialDepartments: Department[] = [
  {
    id: 'dept-1',
    name: 'Engineering',
    head: 'Aditi Rao',
    headAvatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=100',
    parentDept: '--',
    status: 'Active'
  },
  {
    id: 'dept-2',
    name: 'Facilities',
    head: 'Rohan Mehta',
    headAvatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=100',
    parentDept: '--',
    status: 'Active'
  },
  {
    id: 'dept-3',
    name: 'Field Ops (East)',
    head: 'Sana Iqbal',
    headAvatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=100',
    parentDept: 'Field Ops',
    status: 'Inactive'
  }
];

export const initialEmployees: Employee[] = [
  { id: 'emp-1', name: 'Suresh Kumar', email: 'suresh.kumar@assetflow.com', dept: 'Administration', role: 'Admin', jobTitle: 'IT Lead Admin', avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&q=80&w=100', status: 'Active' },
  { id: 'emp-2', name: 'Priya Shah', email: 'priya.shah@assetflow.com', dept: 'Operations', role: 'Asset Manager', jobTitle: 'Fleet Manager', avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=100', status: 'Active' },
  { id: 'emp-3', name: 'Rohan Mehta', email: 'rohan.mehta@assetflow.com', dept: 'Facilities', role: 'Department Head', jobTitle: 'Facilities Director', avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=100', status: 'Active' },
  { id: 'emp-4', name: 'Alex Employee', email: 'alex.employee@assetflow.com', dept: 'Engineering', role: 'Employee', jobTitle: 'Software Engineer', avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=100', status: 'Active' },
  { id: 'emp-5', name: 'Aditi Rao', email: 'aditi.rao@assetflow.com', dept: 'Engineering', role: 'Department Head', jobTitle: 'VP Engineering', avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=100', status: 'Active' },
  { id: 'emp-6', name: 'Sana Iqbal', email: 'sana.iqbal@assetflow.com', dept: 'Facilities', role: 'Employee', jobTitle: 'Operations Lead', avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=100', status: 'Inactive' },
];

export const initialBookings: Booking[] = [
  {
    id: 'book-1',
    resource: 'Conference Room B2',
    title: 'Booked - Procurement Team',
    timeRange: '9:00 AM - 10:00 AM',
    startHour: 9,
    endHour: 10,
    date: 'Tue, 7 Jul',
    bookedBy: 'Rohan Mehta',
    bookedByDept: 'Facilities',
    status: 'Completed'
  },
  {
    id: 'book-2',
    resource: 'Conference Room B2',
    title: 'Requested 9:30 to 10:30 - conflict - slot is unavailable',
    timeRange: '9:30 AM - 10:30 AM',
    startHour: 9.5,
    endHour: 10.5,
    date: 'Tue, 7 Jul',
    bookedBy: 'Alex Employee',
    bookedByDept: 'Engineering',
    status: 'Cancelled',
    isConflict: true
  }
];

export const initialTransferRequests: TransferRequest[] = [
  {
    id: 'tr-1',
    assetTag: 'AF-9921',
    assetName: 'Office Chair ErgoPro X-Series',
    requestedBy: 'Sana Iqbal',
    requestedByDept: 'Facilities',
    currentHolder: 'Sana Iqbal',
    requestType: 'Return',
    reason: 'No longer required at current workstation. Chair is in good condition.',
    status: 'Pending',
    requestedAt: 'Jul 12, 11:30 AM'
  },
  {
    id: 'tr-2',
    assetTag: 'AF-0014',
    assetName: 'Dell XPS 15',
    requestedBy: 'Alex Employee',
    requestedByDept: 'Engineering',
    currentHolder: 'Alex Employee',
    requestType: 'Transfer',
    targetHolder: 'Aditi Rao',
    targetDept: 'Engineering',
    reason: 'Aditi needs a high-performance machine for the upcoming product review cycle.',
    status: 'Pending',
    requestedAt: 'Jul 12, 10:00 AM'
  }
];

export const initialNotifications: Notification[] = [
  {
    id: 'notif-1',
    recipientName: 'Alex Employee',
    title: 'Asset Allocated to You',
    message: 'Dell Laptop Latitude 5420 (AF-0012) has been allocated to you by Priya Shah.',
    icon: 'assignment_ind',
    type: 'asset',
    timestamp: 'Jul 01, 09:00 AM',
    isRead: true
  },
  {
    id: 'notif-2',
    recipientName: 'Priya Shah',
    title: 'Transfer Request Pending',
    message: 'Alex Employee requested a return for Dell XPS 15 (AF-0014). Review in Approval Center.',
    icon: 'swap_horiz',
    type: 'transfer',
    timestamp: 'Jul 12, 10:00 AM',
    isRead: false
  },
  {
    id: 'notif-3',
    recipientName: 'Rohan Mehta',
    title: 'Transfer Request Pending',
    message: 'Sana Iqbal requested a return for Office Chair ErgoPro X-Series (AF-9921).',
    icon: 'swap_horiz',
    type: 'transfer',
    timestamp: 'Jul 12, 11:30 AM',
    isRead: false
  }
];

export const initialMaintenanceTickets: MaintenanceTicket[] = [
  {
    id: 'maint-1',
    assetTag: 'AF-0062',
    title: 'Projector bulb not turning on',
    description: 'Room B2 projector is unresponsive. Important meeting scheduled for tomorrow.',
    priority: 'URGENT',
    column: 'PENDING',
    reportedTime: 'Jul 12, 09:15 AM',
    raisedBy: 'Rohan Mehta',
    raisedByDept: 'Facilities'
  },
  {
    id: 'maint-2',
    assetTag: 'AF-1029',
    title: 'Desk Lamp flicker',
    description: 'Engineering Dept, Desk E12.',
    priority: 'MEDIUM',
    column: 'PENDING',
    reportedTime: 'Jul 12, 08:30 AM',
    raisedBy: 'Alex Employee',
    raisedByDept: 'Engineering'
  },
  {
    id: 'maint-3',
    assetTag: 'AF-0031',
    title: 'AC unit noisy compressor',
    description: 'Main Lobby HVAC system making rattling sound since Monday.',
    priority: 'NORMAL',
    column: 'APPROVED',
    reportedTime: 'Jul 11, 04:45 PM',
    raisedBy: 'Rohan Mehta',
    raisedByDept: 'Facilities'
  },
  {
    id: 'maint-4',
    assetTag: 'AF-0078',
    title: 'Forklift hydraulic leak',
    description: 'Warehouse Zone 3. Primary lifting mechanism needs seal replacement.',
    priority: 'HIGH',
    column: 'TECHNICIAN ASSIGNED',
    assignee: 'Tech: R. Varma',
    assigneeAvatar: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=100',
    reportedTime: 'Jul 12, 10:20 AM',
    raisedBy: 'Alex Employee',
    raisedByDept: 'Engineering'
  },
  {
    id: 'maint-5',
    assetTag: 'AF-8147',
    title: 'Printer Jam recurring',
    description: 'Parts ordered from vendor. Replacement roller expected at 2:00 PM.',
    priority: 'ONGOING',
    column: 'IN PROGRESS',
    reportedTime: 'Jul 12, 09:30 AM',
    raisedBy: 'Rohan Mehta',
    raisedByDept: 'Facilities'
  },
  {
    id: 'maint-6',
    assetTag: 'AF-1173',
    title: 'Chair repair',
    description: 'Broken caster replaced. Safety check passed. Returned to floor 3.',
    priority: 'COMPLETED',
    column: 'RESOLVED',
    reportedTime: 'Jul 07, 03:00 PM',
    raisedBy: 'Alex Employee',
    raisedByDept: 'Engineering'
  }
];

export const initialActivityLogs: ActivityLog[] = [
  {
    id: 'log-1',
    icon: 'assignment_ind',
    type: 'all',
    title: 'Laptop AF-0014 assigned to Alex Employee',
    description: 'Allocation completed by Priya Shah. Hardware asset now in active use.',
    timestamp: 'Jul 12, 01:15 PM'
  },
  {
    id: 'log-2',
    icon: 'check_circle',
    type: 'approvals',
    title: 'Maintenance request AF-0055 approved',
    description: 'Approved by Asset Manager: Priya Shah. Scheduled for tomorrow 09:00 AM.',
    timestamp: 'Jul 12, 12:50 PM'
  },
  {
    id: 'log-3',
    icon: 'event_available',
    type: 'bookings',
    title: 'Booking confirmed : Room B2',
    description: 'Scheduled 2:00 PM to 3:00 PM. Projector AF-0062 pre-allocated.',
    timestamp: 'Jul 12, 12:15 PM'
  },
  {
    id: 'log-4',
    icon: 'transfer_within_a_station',
    type: 'approvals',
    title: 'Transfer approved : AF-0033 to Facilities dept',
    description: 'Inter-departmental movement approved by Rohan Mehta.',
    timestamp: 'Jul 12, 10:10 AM'
  },
  {
    id: 'log-5',
    icon: 'warning',
    type: 'alerts',
    title: 'Overdue return : AF-0021 was due 3 days ago',
    description: 'Assigned to Rohan Mehta. Automated reminder sent to employee.',
    timestamp: 'Jul 11, 09:00 AM',
    isAlert: true
  },
  {
    id: 'log-6',
    icon: 'inventory_2',
    type: 'alerts',
    title: 'Audit discrepancy flagged : AF-0088 damaged',
    description: 'Manual audit by A. Rai. Asset tagged for immediate maintenance assessment.',
    timestamp: 'Jul 10, 11:30 AM',
    isAlert: true
  }
];
