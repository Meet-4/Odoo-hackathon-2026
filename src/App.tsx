import React, { useState, useEffect, useCallback } from 'react';
import {
  UserProfile,
  Asset,
  Department,
  Employee,
  Booking,
  MaintenanceTicket,
  TransferRequest,
  Notification,
  ActivityLog,
  AssetStatus,
  MaintenanceColumn,
  NotificationType
} from './types';
import {
  initialAssets,
  initialDepartments,
  initialEmployees,
  initialBookings,
  initialTransferRequests,
  initialNotifications,
  initialMaintenanceTickets,
  initialActivityLogs
} from './data';

import Login from './components/Login';
import Sidebar from './components/Sidebar';
import TopNav from './components/TopNav';
import Dashboard from './components/Dashboard';
import OrganizationSetup from './components/OrganizationSetup';
import AssetsCatalog from './components/AssetsCatalog';
import ResourceBooking from './components/ResourceBooking';
import MaintenanceKanban from './components/MaintenanceKanban';
import AuditCompliance from './components/AuditCompliance';
import Reports from './components/Reports';
import ApprovalCenter from './components/ApprovalCenter';

const ts = () => new Date().toLocaleString('en-US', { month: 'short', day: 'numeric', hour: '2-digit', minute: '2-digit' });
const BACKEND = ((import.meta as unknown as { env: Record<string, string> }).env?.VITE_BACKEND_URL) || 'http://localhost:5000';

export default function App() {
  const [user, setUser] = useState<UserProfile | null>(() => {
    const saved = localStorage.getItem('assetflow_session');
    return saved ? JSON.parse(saved) : null;
  });

  useEffect(() => { 
    user ? localStorage.setItem('assetflow_session', JSON.stringify(user)) : localStorage.removeItem('assetflow_session'); 
  }, [user]);

  const handleLogout = () => {
    setUser(null);
  };

  if (!user) return <Login onLoginSuccess={(profile) => setUser(profile)} />;

  const demoEmails = ['suresh.kumar@assetflow.com', 'priya.shah@assetflow.com', 'rohan.mehta@assetflow.com', 'alex.employee@assetflow.com'];
  const isDemo = demoEmails.includes(user.email.toLowerCase());
  const tenantId = isDemo ? 'demo' : user.email.toLowerCase();

  return <MainApp key={tenantId} user={user} tenantId={tenantId} isDemo={isDemo} onLogout={handleLogout} />;
}

interface MainAppProps {
  user: UserProfile;
  tenantId: string;
  isDemo: boolean;
  onLogout: () => void;
}

function MainApp({ user, tenantId, isDemo, onLogout }: MainAppProps) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [currentTab, setCurrentTab] = useState<string>(() =>
    localStorage.getItem(`assetflow_active_tab_${tenantId}`) || 'dashboard'
  );

  // ─── Master Data ─────────────────────────────────────────────────────────────
  const [assets, setAssets] = useState<Asset[]>([]);
  const [departments, setDepartments] = useState<Department[]>([]);
  const [employees, setEmployees] = useState<Employee[]>([]);
  const [bookings, setBookings] = useState<Booking[]>([]);
  const [tickets, setTickets] = useState<MaintenanceTicket[]>([]);
  const [transferRequests, setTransferRequests] = useState<TransferRequest[]>([]);
  const [notifications, setNotifications] = useState<Notification[]>([]);
  const [logs, setLogs] = useState<ActivityLog[]>([]);

  // Quick action states
  const [quickAddTriggered, setQuickAddTriggered] = useState(false);
  const [quickLogTriggered, setQuickLogTriggered] = useState(false);

  // ─── Fetch Data from Backend ─────────────────────────────────────────────────
  useEffect(() => {
    const fetchData = async () => {
      try {
        const [assetsRes, deptsRes, empsRes, bookingsRes, ticketsRes, transfersRes, notifsRes, logsRes] = await Promise.all([
          fetch(`${BACKEND}/api/assets`).then(r => r.json()),
          fetch(`${BACKEND}/api/departments`).then(r => r.json()),
          fetch(`${BACKEND}/api/users`).then(r => r.json()),
          fetch(`${BACKEND}/api/bookings`).then(r => r.json()),
          fetch(`${BACKEND}/api/maintenanceTickets`).then(r => r.json()),
          fetch(`${BACKEND}/api/transferRequests`).then(r => r.json()),
          fetch(`${BACKEND}/api/notifications`).then(r => r.json()),
          fetch(`${BACKEND}/api/activityLogs`).then(r => r.json()),
        ]);
        setAssets(Array.isArray(assetsRes) ? assetsRes : []);
        setDepartments(Array.isArray(deptsRes) ? deptsRes : []);
        setEmployees(Array.isArray(empsRes) ? empsRes : []);
        setBookings(Array.isArray(bookingsRes) ? bookingsRes : []);
        setTickets(Array.isArray(ticketsRes) ? ticketsRes : []);
        setTransferRequests(Array.isArray(transfersRes) ? transfersRes : []);
        setNotifications(Array.isArray(notifsRes) ? notifsRes : []);
        setLogs(Array.isArray(logsRes) ? logsRes : []);
      } catch (err) {
        console.error("Failed to fetch initial data:", err);
      }
    };
    fetchData();
  }, [tenantId]);

  // ─── LocalStorage Sync ───────────────────────────────────────────────────────
  useEffect(() => { localStorage.setItem(`assetflow_active_tab_${tenantId}`, currentTab); }, [currentTab, tenantId]);

  // ─── Overdue Watcher ─────────────────────────────────────────────────────────
  useEffect(() => {
    const checkOverdue = () => {
      const now = Date.now();
      assets.forEach(asset => {
        if (asset.dueDate && asset.status === 'Allocated' && asset.allocatedTo) {
          const due = new Date(asset.dueDate).getTime();
          if (now > due) {
            setLogs(prev => {
              const alreadyFlagged = prev.some(l => l.title.includes(`Overdue: ${asset.tag}`));
              if (alreadyFlagged) return prev;
              return [{ id: `log-overdue-${asset.tag}`, icon: 'alarm', type: 'alerts', title: `Overdue: ${asset.tag} return past due`, description: `${asset.name} was due back. Current holder: ${asset.allocatedTo}.`, timestamp: ts(), isAlert: true }, ...prev];
            });
            setNotifications(prev => {
              const alreadyNotified = prev.some(n => n.title.includes(`Overdue`) && n.recipientName === asset.allocatedTo);
              if (alreadyNotified) return prev;
              return [{ id: `notif-overdue-${asset.tag}-${Date.now()}`, recipientName: asset.allocatedTo!, title: 'Overdue Return Alert', message: `${asset.name} (${asset.tag}) was due for return. Please return or request an extension.`, icon: 'alarm', type: 'alert' as NotificationType, timestamp: ts(), isRead: false }, ...prev];
            });
          }
        }
      });
    };
    checkOverdue();
    const interval = setInterval(checkOverdue, 60000);
    return () => clearInterval(interval);
  }, [assets]);

  // ─── Helpers ─────────────────────────────────────────────────────────────────
  const addLog = useCallback((title: string, desc: string, type: 'all' | 'alerts' | 'approvals' | 'bookings', icon: string, isAlert?: boolean) => {
    const entry = { id: `log-${Date.now()}`, icon, type, title, description: desc, timestamp: ts(), isAlert: isAlert || false };
    setLogs(prev => [entry, ...prev]);
    fetch(`${BACKEND}/api/activityLogs`, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(entry) }).catch(() => {});
  }, []);

  const addNotification = useCallback((recipientName: string, title: string, message: string, icon: string, type: NotificationType) => {
    const notif = { id: `notif-${Date.now()}`, recipientName, title, message, icon, type, timestamp: ts(), isRead: false };
    setNotifications(prev => [notif, ...prev]);
    fetch(`${BACKEND}/api/notifications`, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(notif) }).catch(() => {});
  }, []);

  // ─── Notification Handlers ───────────────────────────────────────────────────
  const handleMarkNotificationRead = (id: string) => {
    setNotifications(prev => prev.map(n => n.id === id ? { ...n, isRead: true } : n));
    fetch(`${BACKEND}/api/notifications/${id}`, { method: 'PUT', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ isRead: true }) }).catch(() => {});
  };
  const handleMarkAllRead = (recipientName: string) => {
    setNotifications(prev => prev.map(n => {
      if (n.recipientName !== recipientName) return n;
      fetch(`${BACKEND}/api/notifications/${n.id}`, { method: 'PUT', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ isRead: true }) }).catch(() => {});
      return { ...n, isRead: true };
    }));
  };
  const apiCall = async (method: string, endpoint: string, data?: any) => {
    try {
      await fetch(`${BACKEND}${endpoint}`, {
        method,
        headers: data ? { 'Content-Type': 'application/json' } : undefined,
        body: data ? JSON.stringify(data) : undefined
      });
    } catch (e) {
      console.error('API Error:', e);
    }
  };

  // ─── Asset Handlers ───────────────────────────────────────────────────────────
  const handleAddAsset = (newAsset: Omit<Asset, 'verificationStatus' | 'allocationHistory' | 'maintenanceHistory'>) => {
    const finalAsset = { ...newAsset, verificationStatus: 'Pending', allocationHistory: [], maintenanceHistory: [] };
    setAssets(prev => [finalAsset as Asset, ...prev]);
    apiCall('POST', '/api/assets', finalAsset);
    addLog(`Asset Registered: ${newAsset.tag}`, `${newAsset.name} added to inventory by ${user.name}.`, 'all', 'add_circle');
  };

  const handleDeleteAsset = (tag: string) => {
    setAssets(prev => prev.filter(a => a.tag !== tag));
    apiCall('DELETE', `/api/assets/${tag}`);
    addLog(`Hardware Removed: ${tag}`, `Asset permanently removed from inventory.`, 'alerts', 'delete', true);
  };

  const handleUpdateAssetStatus = (tag: string, status: AssetStatus, location?: string, expectedLocation?: string, assignee?: string, dept?: string) => {
    let finalUpdated: Asset | null = null;
    setAssets(prev => prev.map(a => {
      if (a.tag !== tag) return a;
      const updated: Asset = {
        ...a, status,
        location: location || a.location,
        expectedLocation: expectedLocation || a.expectedLocation,
        verificationStatus: status === 'Damaged' ? 'Damaged' : a.verificationStatus,
      };
      if (assignee !== undefined) {
        updated.allocatedTo = assignee || undefined;
        updated.assignee = assignee || undefined;
        updated.allocatedToDept = dept || undefined;
      }
      finalUpdated = updated;
      return updated;
    }));
    if (finalUpdated) apiCall('PUT', `/api/assets/${tag}`, finalUpdated);
  };

  // ─── Transfer Request Handlers ────────────────────────────────────────────────
  const handleRequestTransfer = (assetTag: string, assetName: string, type: 'Transfer' | 'Return', targetHolder?: string, targetDept?: string, reason?: string) => {
    const req: TransferRequest = {
      id: `tr-${Date.now()}`,
      assetTag, assetName,
      requestedBy: user.name,
      requestedByDept: user.department,
      currentHolder: user.name,
      requestType: type,
      targetHolder, targetDept,
      reason: reason || 'No reason provided.',
      status: 'Pending',
      requestedAt: ts()
    };
    setTransferRequests(prev => [req, ...prev]);
    apiCall('POST', '/api/transferRequests', req);
    addLog(`${type} Request: ${assetTag}`, `${user.name} requested a ${type.toLowerCase()} for ${assetName}.`, 'approvals', 'swap_horiz');
    
    employees.filter(e => e.role === 'Asset Manager' || (e.role === 'Department Head' && e.dept === user.department)).forEach(e => {
      addNotification(e.name, `${type} Request Pending`, `${user.name} requested a ${type.toLowerCase()} for ${assetName} (${assetTag}).`, 'swap_horiz', 'transfer');
    });
  };

  const handleApproveTransfer = (requestId: string) => {
    const req = transferRequests.find(r => r.id === requestId);
    if (!req) return;
    const updatedReq = { ...req, status: 'Approved' as TransferRequest['status'], resolvedAt: ts(), resolvedBy: user.name };
    setTransferRequests(prev => prev.map(r => r.id === requestId ? updatedReq : r));
    apiCall('PUT', `/api/transferRequests/${requestId}`, updatedReq);

    if (req.requestType === 'Return') {
      setAssets(prev => prev.map(a => {
        if (a.tag !== req.assetTag) return a;
        const histEntry = { date: ts(), assignedTo: '', assignedBy: user.name, returnedOn: ts(), condition: 'Returned' };
        const ua = { ...a, status: 'Available' as AssetStatus, allocatedTo: undefined, assignee: undefined, allocatedToDept: undefined, allocationHistory: [...a.allocationHistory, histEntry] };
        apiCall('PUT', `/api/assets/${a.tag}`, ua);
        return ua;
      }));
      addNotification(req.requestedBy, 'Return Approved', `Your return request for ${req.assetName} has been approved. Asset is now available.`, 'check_circle', 'transfer');
    } else {
      setAssets(prev => prev.map(a => {
        if (a.tag !== req.assetTag) return a;
        const histEntry = { date: ts(), assignedTo: req.targetHolder || '', assignedBy: user.name, department: req.targetDept };
        const ua = { ...a, allocatedTo: req.targetHolder, assignee: req.targetHolder, allocatedToDept: req.targetDept, allocationHistory: [...a.allocationHistory, histEntry] };
        apiCall('PUT', `/api/assets/${a.tag}`, ua);
        return ua;
      }));
      addNotification(req.requestedBy, 'Transfer Approved', `${req.assetName} has been transferred to ${req.targetHolder}.`, 'check_circle', 'transfer');
      if (req.targetHolder) addNotification(req.targetHolder, 'Asset Assigned to You', `${req.assetName} (${req.assetTag}) has been transferred to you.`, 'assignment_ind', 'asset');
    }
    addLog(`${req.requestType} Approved: ${req.assetTag}`, `Approved by ${user.name}.`, 'approvals', 'check_circle');
  };

  const handleRejectTransfer = (requestId: string, reason: string) => {
    const req = transferRequests.find(r => r.id === requestId);
    if (!req) return;
    const updatedReq = { ...req, status: 'Rejected' as TransferRequest['status'], rejectionReason: reason, resolvedAt: ts(), resolvedBy: user.name };
    setTransferRequests(prev => prev.map(r => r.id === requestId ? updatedReq : r));
    apiCall('PUT', `/api/transferRequests/${requestId}`, updatedReq);
    addNotification(req.requestedBy, `${req.requestType} Request Rejected`, `Your request for ${req.assetName} was rejected. Reason: ${reason}`, 'cancel', 'transfer');
    addLog(`${req.requestType} Rejected: ${req.assetTag}`, `Rejected by ${user.name}. Reason: ${reason}`, 'approvals', 'cancel');
  };

  // ─── Department Handlers ──────────────────────────────────────────────────────
  const handleAddDepartment = (name: string, head: string, parent: string) => {
    const newDept: Department = { id: `dept-${Date.now()}`, name, head, headAvatar: `https://ui-avatars.com/api/?name=${encodeURIComponent(head)}&background=random`, parentDept: parent, status: 'Active' };
    setDepartments(prev => [...prev, newDept]);
    apiCall('POST', '/api/departments', newDept);
    addLog(`Department Created: ${name}`, `Representative head: ${head}.`, 'all', 'check_circle');
  };
  const handleToggleDeptStatus = (id: string) => {
    let finalUpdated: Department | null = null;
    setDepartments(prev => prev.map(d => {
      if (d.id !== id) return d;
      const next = d.status === 'Active' ? 'Inactive' : 'Active';
      addLog(`Dept Status: ${d.name}`, `Switched to ${next}.`, 'all', 'info');
      finalUpdated = { ...d, status: next };
      return finalUpdated;
    }));
    if (finalUpdated) apiCall('PUT', `/api/departments/${id}`, finalUpdated);
  };
  const handleDeleteDept = (id: string) => {
    const dept = departments.find(d => d.id === id);
    if (dept) { 
      setDepartments(prev => prev.filter(d => d.id !== id)); 
      apiCall('DELETE', `/api/departments/${id}`);
      addLog(`Department Deleted: ${dept.name}`, `Removed from org roster.`, 'alerts', 'warning', true); 
    }
  };

  // ─── Employee/Directory Handlers ──────────────────────────────────────────────
  const handleAddEmployee = (emp: Omit<Employee, 'id'>) => {
    const newEmp = { ...emp, id: `emp-${Date.now()}` };
    setEmployees(prev => [newEmp, ...prev]);
    apiCall('POST', '/api/users', newEmp);
    addLog(`Employee Added: ${emp.name}`, `${emp.name} joined as ${emp.role} in ${emp.dept}.`, 'all', 'person_add');
  };
  const handlePromoteEmployee = (id: string, newRole: Employee['role']) => {
    let updated: Employee | null = null;
    setEmployees(prev => prev.map(e => {
      if (e.id !== id) return e;
      addLog(`Role Changed: ${e.name}`, `Promoted from ${e.role} to ${newRole} by ${user.name}.`, 'approvals', 'star');
      updated = { ...e, role: newRole };
      return updated;
    }));
    if (updated) apiCall('PUT', `/api/users/${id}`, updated);
  };
  const handleToggleEmployeeStatus = (id: string) => {
    let updated: Employee | null = null;
    setEmployees(prev => prev.map(e => {
      if (e.id !== id) return e;
      updated = { ...e, status: e.status === 'Active' ? 'Inactive' : 'Active' };
      return updated;
    }));
    if (updated) apiCall('PUT', `/api/users/${id}`, updated);
  };

  // ─── Booking Handlers ────────────────────────────────────────────────────────
  const handleAddBooking = (newBook: Booking) => {
    setBookings(prev => [newBook, ...prev]);
    apiCall('POST', '/api/bookings', newBook);
    addLog(`Booking Confirmed: ${newBook.resource}`, `Booked by ${user.name} for ${newBook.timeRange}.`, 'bookings', 'event_available');
    addNotification(user.name, 'Booking Confirmed', `${newBook.resource} booked for ${newBook.timeRange} on ${newBook.date}.`, 'event_available', 'booking');
  };

  // ─── Maintenance Handlers ─────────────────────────────────────────────────────
  const handleAddTicket = (newTicket: MaintenanceTicket) => {
    const finalTicket = { ...newTicket, raisedBy: user.name, raisedByDept: user.department };
    setTickets(prev => [finalTicket, ...prev]);
    apiCall('POST', '/api/maintenanceTickets', finalTicket);
    addLog(`Ticket Filed: ${newTicket.title}`, `Filed by ${user.name} for asset ${newTicket.assetTag}.`, 'alerts', 'warning', true);
    employees.filter(e => e.role === 'Asset Manager').forEach(e => {
      addNotification(e.name, 'New Maintenance Ticket', `${user.name} raised a ticket for ${newTicket.assetTag}: "${newTicket.title}". Review in Approval Center.`, 'build', 'maintenance');
    });
  };

  const handleApproveMaintenanceTicket = (ticketId: string, techName: string) => {
    setTickets(prev => prev.map(ticket => {
      if (ticket.id !== ticketId) return ticket;
      const updated = { ...ticket, column: 'TECHNICIAN ASSIGNED' as MaintenanceColumn, assignee: techName, isRejected: false };
      apiCall('PUT', `/api/maintenanceTickets/${ticketId}`, updated);
      setAssets(prevAssets => prevAssets.map(a => {
        if (a.tag === ticket.assetTag) {
          const updatedAsset = { ...a, status: 'Maintenance' as AssetStatus, verificationStatus: 'Damaged' as Asset['verificationStatus'], maintenanceHistory: [...(a.maintenanceHistory || []), `${ticket.title} — approved ${ts()}`] };
          apiCall('PUT', `/api/assets/${a.tag}`, updatedAsset);
          return updatedAsset;
        }
        return a;
      }));
      if (ticket.raisedBy) addNotification(ticket.raisedBy, 'Maintenance Approved', `Your ticket "${ticket.title}" for ${ticket.assetTag} has been approved. Tech assigned: ${techName || 'TBD'}.`, 'build', 'maintenance');
      addLog(`Maintenance Approved: ${ticket.assetTag}`, `Ticket "${ticket.title}" approved by ${user.name}. Tech: ${techName}.`, 'approvals', 'check_circle');
      return updated;
    }));
  };

  const handleRejectMaintenanceTicket = (ticketId: string, reason: string) => {
    setTickets(prev => prev.map(ticket => {
      if (ticket.id !== ticketId) return ticket;
      const updated = { ...ticket, isRejected: true, rejectedReason: reason };
      apiCall('PUT', `/api/maintenanceTickets/${ticketId}`, updated);
      if (ticket.raisedBy) addNotification(ticket.raisedBy, 'Maintenance Ticket Rejected', `Your ticket "${ticket.title}" was rejected. Reason: ${reason}`, 'cancel', 'maintenance');
      addLog(`Maintenance Rejected: ${ticket.assetTag}`, `Ticket rejected by ${user.name}. Reason: ${reason}`, 'approvals', 'cancel');
      return updated;
    }));
  };

  const handleUpdateTicketColumn = (id: string, column: MaintenanceColumn) => {
    setTickets(prev => prev.map(ticket => {
      if (ticket.id !== id) return ticket;
      const updated = { ...ticket, column };
      apiCall('PUT', `/api/maintenanceTickets/${id}`, updated);
      if (column === 'RESOLVED') {
        setAssets(prevAssets => prevAssets.map(a => {
          if (a.tag !== ticket.assetTag) return a;
          const updatedAsset = { ...a, status: (a.allocatedTo ? 'Allocated' : 'Available') as AssetStatus, verificationStatus: 'Verified' as Asset['verificationStatus'] };
          apiCall('PUT', `/api/assets/${a.tag}`, updatedAsset);
          return updatedAsset;
        }));
        if (ticket.raisedBy) addNotification(ticket.raisedBy, 'Maintenance Resolved', `Your ticket "${ticket.title}" for ${ticket.assetTag} has been resolved. Asset is operational again.`, 'check_circle', 'maintenance');
        addLog(`Maintenance Resolved: ${ticket.assetTag}`, `Ticket "${ticket.title}" resolved.`, 'approvals', 'verified');
      }
      return updated;
    }));
  };

  const handleDeleteTicket = (id: string) => {
    setTickets(prev => prev.filter(t => t.id !== id));
    apiCall('DELETE', `/api/maintenanceTickets/${id}`);
  };

  // ─── Audit Handlers ───────────────────────────────────────────────────────────
  const handleVerifyAsset = (tag: string, status: 'Verified' | 'Missing' | 'Damaged') => {
    let finalUpdated: Asset | null = null;
    setAssets(prev => prev.map(a => {
      if (a.tag !== tag) return a;
      let assetStatus = a.status;
      if (status === 'Missing') { assetStatus = 'Damaged'; }
      if (status === 'Damaged') { assetStatus = 'Maintenance'; }
      if (status === 'Missing' && a.allocatedTo) {
        addNotification(a.allocatedTo, 'Asset Marked Missing', `${a.name} (${a.tag}) has been flagged as Missing during audit. It will be removed from your workspace if confirmed Lost.`, 'inventory_2', 'audit');
      }
      addLog(`Audit: ${tag} → ${status}`, `Verified by ${user.name}.`, 'alerts', 'verified_user', status !== 'Verified');
      finalUpdated = { ...a, verificationStatus: status, status: assetStatus, lastVerified: ts() };
      return finalUpdated;
    }));
    if (finalUpdated) apiCall('PUT', `/api/assets/${tag}`, finalUpdated);
  };

  // ─── Computed Counts ─────────────────────────────────────────────────────────
  const pendingTransfers = transferRequests.filter(r => r.status === 'Pending');
  const pendingMaintenanceTickets = tickets.filter(t => t.column === 'PENDING' && !t.isRejected);
  const pendingApprovalCount = (() => {
    if (user.role === 'Asset Manager') return pendingTransfers.length + pendingMaintenanceTickets.length;
    if (user.role === 'Department Head') return pendingTransfers.filter(r => r.requestedByDept === user.department).length;
    return 0;
  })();

  const userNotifications = notifications.filter(n => n.recipientName === user.name);

  // ─── Render ───────────────────────────────────────────────────────────────────
  const renderContent = () => {
    switch (currentTab) {
      case 'dashboard':
        return (
          <Dashboard
            assets={assets} logs={logs} maintenanceTickets={tickets} bookings={bookings}
            transferRequests={transferRequests} user={user}
            setTab={setCurrentTab}
            onQuickAddAsset={() => { setQuickAddTriggered(true); setCurrentTab('assets'); }}
            onQuickLogTicket={() => { setQuickLogTriggered(true); setCurrentTab('maintenance'); }}
            onQuickAssign={() => setCurrentTab('assets')}
            onAddLog={addLog}
          />
        );
      case 'organization':
        return (
          <OrganizationSetup
            departments={departments} employees={employees}
            onAddDepartment={handleAddDepartment}
            onToggleDeptStatus={handleToggleDeptStatus}
            onDeleteDept={handleDeleteDept}
            onAddEmployee={handleAddEmployee}
            onPromoteEmployee={handlePromoteEmployee}
            onToggleEmployeeStatus={handleToggleEmployeeStatus}
            user={user}
          />
        );
      case 'assets':
        return (
          <AssetsCatalog
            user={user} assets={assets} departments={departments}
            onAddAsset={handleAddAsset}
            onUpdateAssetStatus={handleUpdateAssetStatus}
            onDeleteAsset={handleDeleteAsset}
            onRequestTransfer={handleRequestTransfer}
            onAddLog={addLog}
            quickAddTriggered={quickAddTriggered}
            resetQuickAddTrigger={() => setQuickAddTriggered(false)}
          />
        );
      case 'approvals':
        return (
          <ApprovalCenter
            user={user} transferRequests={transferRequests} tickets={tickets}
            assets={assets}
            onApproveTransfer={handleApproveTransfer}
            onRejectTransfer={handleRejectTransfer}
            onApproveTicket={handleApproveMaintenanceTicket}
            onRejectTicket={handleRejectMaintenanceTicket}
          />
        );
      case 'booking':
        return (
          <ResourceBooking
            bookings={bookings}
            onAddBooking={handleAddBooking}
            onAddLog={addLog}
          />
        );
      case 'maintenance':
        return (
          <MaintenanceKanban
            user={user} tickets={tickets} assets={assets}
            onAddTicket={handleAddTicket}
            onUpdateTicketColumn={handleUpdateTicketColumn}
            onDeleteTicket={handleDeleteTicket}
            onAddLog={addLog}
            quickLogTriggered={quickLogTriggered}
            resetQuickLogTrigger={() => setQuickLogTriggered(false)}
          />
        );
      case 'audit':
        return (
          <AuditCompliance
            assets={assets}
            onVerifyAsset={handleVerifyAsset}
            onAddLog={addLog}
          />
        );
      case 'reports':
        return (
          <Reports assets={assets} tickets={tickets} bookings={bookings} />
        );
      default:
        return <div className="p-8"><p className="text-outline">Screen under active synthesis.</p></div>;
    }
  };

  return (
    <div className="flex h-screen overflow-hidden bg-background font-sans text-on-surface">
      <Sidebar
        user={user} currentTab={currentTab}
        setCurrentTab={setCurrentTab}
        onLogout={onLogout}
        isOpen={isSidebarOpen}
        pendingApprovalCount={pendingApprovalCount}
      />
      <main className="flex-1 flex flex-col h-full overflow-hidden bg-background">
        <TopNav
          user={user}
          notifications={userNotifications}
          toggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)}
          onMarkRead={handleMarkNotificationRead}
          onMarkAllRead={() => handleMarkAllRead(user.name)}
        />
        <div className="flex-1 overflow-auto">
          {renderContent()}
        </div>
      </main>
    </div>
  );
}
