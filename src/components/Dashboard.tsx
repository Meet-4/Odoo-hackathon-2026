import React, { useState } from 'react';
import { Asset, ActivityLog, MaintenanceTicket, UserProfile, Booking, TransferRequest } from '../types';

interface DashboardProps {
  assets: Asset[];
  logs: ActivityLog[];
  maintenanceTickets: MaintenanceTicket[];
  bookings: Booking[];
  transferRequests: TransferRequest[];
  user: UserProfile;
  setTab: (tab: string) => void;
  onQuickAddAsset: () => void;
  onQuickLogTicket: () => void;
  onQuickAssign: () => void;
  onAddLog: (title: string, desc: string, type: 'all' | 'alerts' | 'approvals' | 'bookings', icon: string, isAlert?: boolean) => void;
}

export default function Dashboard({
  assets, logs, maintenanceTickets, bookings, transferRequests, user,
  setTab, onQuickAddAsset, onQuickLogTicket, onQuickAssign, onAddLog
}: DashboardProps) {
  const [activeLogFilter, setActiveLogFilter] = useState<'all' | 'alerts' | 'approvals' | 'bookings'>('all');
  const [broadcastMessage, setBroadcastMessage] = useState('');

  const isEmployee = user.role === 'Employee';

  // Computed Values - Scoped by Role
  const scopedAssets = isEmployee ? assets.filter(a => a.allocatedTo === user.name) 
    : user.role === 'Department Head' ? assets.filter(a => a.allocatedToDept === user.department)
    : assets;

  const totalAssets = scopedAssets.length;
  const allocatedAssets = scopedAssets.filter(a => a.status === 'Allocated').length;
  const inMaintenance = scopedAssets.filter(a => a.status === 'Maintenance').length;
  const damagedOrMissing = scopedAssets.filter(a => a.status === 'Damaged' || a.verificationStatus === 'Missing').length;

  // Filter logs (Audit feed)
  const scopedLogs = logs.filter(log => {
    // If not admin/asset manager, we could scope logs, but for simplicity we'll show global logs to managers.
    // Employees see fewer logs or no logs feed (they get a different layout).
    if (activeLogFilter === 'all') return true;
    return log.type === activeLogFilter;
  });

  // Overdue Returns
  const overdueAssets = scopedAssets.filter(a => {
    if (a.status !== 'Allocated' || !a.dueDate) return false;
    return new Date().getTime() > new Date(a.dueDate).getTime();
  });
  
  // Upcoming Returns
  const upcomingAssets = scopedAssets.filter(a => {
    if (a.status !== 'Allocated' || !a.dueDate) return false;
    return new Date().getTime() <= new Date(a.dueDate).getTime();
  });

  const categoryCounts = scopedAssets.reduce((acc, current) => {
    acc[current.category] = (acc[current.category] || 0) + 1;
    return acc;
  }, {} as Record<string, number>);

  const handleSendBroadcast = (e: React.FormEvent) => {
    e.preventDefault();
    if (!broadcastMessage.trim()) return;
    onAddLog(`Broadcast: ${broadcastMessage}`, `Dispatched to all operators by ${user.name}`, 'alerts', 'warning', true);
    setBroadcastMessage('');
  };

  if (isEmployee) {
    // ─── Employee Dashboard View ──────────────────────────────────────────────
    const myBookings = bookings.filter(b => b.bookedBy === user.name && b.status !== 'Cancelled');
    const myTickets = maintenanceTickets.filter(t => t.raisedBy === user.name);

    return (
      <div id="dashboard-tab" className="p-6 md:p-8 space-y-8 bg-background h-full overflow-y-auto">
        <div className="border-b border-outline/30 pb-6">
          <div className="flex items-center gap-2 text-xs font-bold text-primary uppercase tracking-widest">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span> My Workspace
          </div>
          <h1 className="text-3xl font-bold text-on-surface mt-1 tracking-tight">Welcome, {user.name}</h1>
          <p className="text-outline text-sm mt-1">Quick overview of your allocated assets, pending requests, and upcoming bookings.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-surface p-6 rounded-3xl border border-outline/20 shadow-sm flex flex-col justify-between">
            <div className="flex items-center justify-between mb-4">
              <span className="text-xs font-bold text-outline uppercase tracking-wider">My Assets</span>
              <span className="material-symbols-outlined text-[24px] text-primary">inventory_2</span>
            </div>
            <p className="text-4xl font-bold text-on-surface tracking-tight">{totalAssets}</p>
            <button onClick={() => setTab('assets')} className="mt-4 text-xs font-bold text-primary hover:underline text-left">View Details →</button>
          </div>
          <div className="bg-surface p-6 rounded-3xl border border-outline/20 shadow-sm flex flex-col justify-between">
            <div className="flex items-center justify-between mb-4">
              <span className="text-xs font-bold text-outline uppercase tracking-wider">My Bookings</span>
              <span className="material-symbols-outlined text-[24px] text-secondary">event_available</span>
            </div>
            <p className="text-4xl font-bold text-on-surface tracking-tight">{myBookings.length}</p>
            <button onClick={() => setTab('booking')} className="mt-4 text-xs font-bold text-primary hover:underline text-left">View Schedule →</button>
          </div>
          <div className="bg-surface p-6 rounded-3xl border border-outline/20 shadow-sm flex flex-col justify-between">
            <div className="flex items-center justify-between mb-4">
              <span className="text-xs font-bold text-outline uppercase tracking-wider">My Tickets</span>
              <span className="material-symbols-outlined text-[24px] text-tertiary">build</span>
            </div>
            <p className="text-4xl font-bold text-on-surface tracking-tight">{myTickets.length}</p>
            <button onClick={() => setTab('maintenance')} className="mt-4 text-xs font-bold text-primary hover:underline text-left">Check Status →</button>
          </div>
        </div>

        {overdueAssets.length > 0 && (
          <div className="bg-error/10 border border-error/20 p-5 rounded-2xl flex items-start gap-4">
            <span className="material-symbols-outlined text-error text-3xl">alarm</span>
            <div>
              <h3 className="text-error font-bold text-lg">Overdue Returns ({overdueAssets.length})</h3>
              <p className="text-sm text-error/80 mt-1">You have assets past their expected return date. Please return them or request a transfer.</p>
              <ul className="mt-2 list-disc list-inside text-sm text-error/90 font-medium">
                {overdueAssets.map(a => <li key={a.tag}>{a.name} ({a.tag})</li>)}
              </ul>
            </div>
          </div>
        )}

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="bg-surface p-6 rounded-[28px] border border-outline/20 shadow-sm space-y-5">
             <h2 className="text-lg font-bold text-on-surface tracking-tight">Quick Actions</h2>
             <div className="grid grid-cols-1 gap-3">
               <button onClick={() => setTab('booking')} className="w-full flex items-center gap-4 p-4 rounded-[18px] bg-background hover:bg-secondary/5 border border-outline/20 hover:border-secondary/30 text-left transition-colors group">
                 <div className="bg-secondary text-white p-2.5 rounded-xl group-hover:scale-105 transition-transform"><span className="material-symbols-outlined">event</span></div>
                 <div>
                   <p className="text-sm font-bold text-on-surface group-hover:text-secondary">Book a Resource</p>
                   <p className="text-[11px] text-outline font-medium mt-0.5">Reserve meeting rooms or vehicles</p>
                 </div>
               </button>
               <button onClick={onQuickLogTicket} className="w-full flex items-center gap-4 p-4 rounded-[18px] bg-background hover:bg-tertiary/5 border border-outline/20 hover:border-tertiary/30 text-left transition-colors group">
                 <div className="bg-tertiary text-white p-2.5 rounded-xl group-hover:scale-105 transition-transform"><span className="material-symbols-outlined">build</span></div>
                 <div>
                   <p className="text-sm font-bold text-on-surface group-hover:text-tertiary">Log Repair Ticket</p>
                   <p className="text-[11px] text-outline font-medium mt-0.5">Report a fault with your allocated hardware</p>
                 </div>
               </button>
             </div>
          </div>

          <div className="bg-surface rounded-[28px] border border-outline/20 shadow-sm overflow-hidden flex flex-col">
            <div className="p-6 border-b border-outline/10">
              <h2 className="text-lg font-bold text-on-surface tracking-tight">Upcoming Returns</h2>
            </div>
            <div className="p-6 flex-1">
              {upcomingAssets.length === 0 ? (
                <p className="text-outline text-sm">No upcoming returns scheduled.</p>
              ) : (
                <ul className="space-y-4">
                  {upcomingAssets.map(a => (
                    <li key={a.tag} className="flex justify-between items-center bg-background p-3 rounded-xl border border-outline/10">
                      <div>
                        <p className="text-sm font-bold text-on-surface">{a.name}</p>
                        <p className="text-xs text-outline font-mono mt-0.5">{a.tag}</p>
                      </div>
                      <span className="text-xs font-bold bg-surface-container text-on-surface px-2.5 py-1 rounded-md">{a.dueDate}</span>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  }

  // ─── Management Dashboard View (Admin / Asset Manager / Dept Head) ─────────
  return (
    <div id="dashboard-tab" className="p-6 md:p-8 space-y-8 bg-background h-full overflow-y-auto">
      
      {/* Upper Status/Welcome Header */}
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 border-b border-outline/30 pb-6">
        <div>
          <div className="flex items-center gap-2 text-xs font-bold text-primary uppercase tracking-widest">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span> Operational Hub
          </div>
          <h1 className="text-3xl font-bold text-on-surface mt-1 tracking-tight">Enterprise Resource Console</h1>
          <p className="text-outline text-sm mt-1">Live telemetry for asset tracking, workspace allocations, and schedules.</p>
        </div>
        <div className="flex items-center gap-3 bg-surface p-3 rounded-2xl border border-outline/20 shadow-sm max-w-sm">
          <div className="bg-primary-container text-primary px-4 py-1.5 rounded-xl font-bold text-sm">98.2%</div>
          <div>
            <p className="text-xs font-bold text-on-surface">Compliance Standard Met</p>
            <p className="text-[10px] text-outline font-medium mt-0.5 uppercase tracking-wider">Updated {new Date().toLocaleTimeString([],{hour:'2-digit',minute:'2-digit'})} • {user.department || 'Org-Wide'}</p>
          </div>
        </div>
      </div>

      {overdueAssets.length > 0 && (
        <div className="bg-error/10 border border-error/20 p-5 rounded-2xl flex items-start gap-4">
          <span className="material-symbols-outlined text-error text-3xl">alarm</span>
          <div>
            <h3 className="text-error font-bold text-lg">Overdue Returns ({overdueAssets.length})</h3>
            <p className="text-sm text-error/80 mt-1">The following allocations are past their expected return date.</p>
            <ul className="mt-2 list-disc list-inside text-sm text-error/90 font-medium grid sm:grid-cols-2 gap-1">
              {overdueAssets.map(a => <li key={a.tag}>{a.name} — Held by {a.allocatedTo}</li>)}
            </ul>
          </div>
        </div>
      )}

      {/* Grid: 4 Core Stat Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        <div className="bg-surface p-5 rounded-3xl border border-outline/20 shadow-sm hover:shadow-md transition-shadow relative overflow-hidden group">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold text-outline uppercase tracking-wider">Cataloged Assets</span>
            <div className="bg-surface-container text-on-surface p-2 rounded-xl group-hover:bg-primary-container group-hover:text-primary transition-colors"><span className="material-symbols-outlined text-[20px]">inventory_2</span></div>
          </div>
          <div className="mt-4">
            <p className="text-4xl font-bold text-on-surface tracking-tight">{totalAssets}</p>
          </div>
        </div>

        <div className="bg-surface p-5 rounded-3xl border border-outline/20 shadow-sm hover:shadow-md transition-shadow relative overflow-hidden group">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold text-outline uppercase tracking-wider">Active Allocations</span>
            <div className="bg-surface-container text-on-surface p-2 rounded-xl group-hover:bg-primary-container group-hover:text-primary transition-colors"><span className="material-symbols-outlined text-[20px]">check_circle</span></div>
          </div>
          <div className="mt-4">
            <p className="text-4xl font-bold text-on-surface tracking-tight">{allocatedAssets}</p>
          </div>
        </div>

        <div className="bg-surface p-5 rounded-3xl border border-outline/20 shadow-sm hover:shadow-md transition-shadow relative overflow-hidden group">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold text-outline uppercase tracking-wider">Under Repair</span>
            <div className="bg-surface-container text-on-surface p-2 rounded-xl group-hover:bg-tertiary/10 group-hover:text-tertiary transition-colors"><span className="material-symbols-outlined text-[20px]">build</span></div>
          </div>
          <div className="mt-4">
            <p className="text-4xl font-bold text-on-surface tracking-tight">{inMaintenance}</p>
          </div>
        </div>

        <div className="bg-surface p-5 rounded-3xl border border-outline/20 shadow-sm hover:shadow-md transition-shadow relative overflow-hidden group">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold text-outline uppercase tracking-wider">Risk Warnings</span>
            <div className="bg-surface-container text-on-surface p-2 rounded-xl group-hover:bg-error/10 group-hover:text-error transition-colors"><span className="material-symbols-outlined text-[20px]">warning</span></div>
          </div>
          <div className="mt-4">
            <p className="text-4xl font-bold text-on-surface tracking-tight">{damagedOrMissing}</p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* Logs */}
        <div className="lg:col-span-2 bg-surface rounded-[28px] border border-outline/20 shadow-sm flex flex-col overflow-hidden">
          <div className="p-6 border-b border-outline/10 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div>
              <h2 className="text-lg font-bold text-on-surface tracking-tight">System Event Logs</h2>
              <p className="text-xs text-outline mt-0.5">Real-time trace logs of physical handovers, checklists & schedules.</p>
            </div>
            <div className="flex bg-surface-container p-1 rounded-[14px] self-start sm:self-center border border-outline/10">
              {(['all', 'alerts', 'approvals', 'bookings'] as const).map((filter) => (
                <button key={filter} onClick={() => setActiveLogFilter(filter)}
                  className={`px-3 py-1.5 text-xs font-bold rounded-xl capitalize transition-colors ${activeLogFilter === filter ? 'bg-surface text-primary shadow-sm' : 'text-on-surface hover:text-primary'}`}>
                  {filter}
                </button>
              ))}
            </div>
          </div>
          <div className="p-6 divide-y divide-outline/10 overflow-y-auto max-h-[460px] flex-1">
            {scopedLogs.length === 0 ? (
              <div className="flex flex-col items-center justify-center py-12 text-outline">
                <span className="material-symbols-outlined text-5xl text-outline/50 mb-2.5">inbox</span>
                <p className="text-sm font-medium">No system traces found.</p>
              </div>
            ) : (
              scopedLogs.map((log) => {
                const isAlert = log.isAlert || log.type === 'alerts';
                return (
                  <div key={log.id} className="py-4 flex gap-4 hover:bg-surface-container/50 rounded-2xl px-3 -mx-3 transition-colors">
                    <div className={`w-10 h-10 rounded-[14px] flex items-center justify-center shrink-0 ${
                      isAlert ? 'bg-error/10 text-error border border-error/20' 
                        : log.type === 'approvals' ? 'bg-primary-container text-primary border border-primary/20'
                        : log.type === 'bookings' ? 'bg-secondary-container text-secondary border border-secondary/20'
                        : 'bg-surface-container text-on-surface border border-outline/20'
                    }`}>
                      <span className="material-symbols-outlined text-[20px]">{log.icon}</span>
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between gap-2">
                        <p className={`text-sm font-bold ${isAlert ? 'text-error' : 'text-on-surface'}`}>{log.title}</p>
                        <span className="text-[10px] text-outline font-medium uppercase tracking-wider">{log.timestamp}</span>
                      </div>
                      <p className="text-sm text-on-surface/80 mt-1">{log.description}</p>
                    </div>
                  </div>
                );
              })
            )}
          </div>
        </div>

        {/* Right Column */}
        <div className="space-y-8">
          
          <div className="bg-surface p-6 rounded-[28px] border border-outline/20 shadow-sm space-y-5">
            <div>
              <h2 className="text-lg font-bold text-on-surface tracking-tight">Fast Operations</h2>
              <p className="text-xs text-outline">Trigger standard workflows with single click bypass.</p>
            </div>
            <div className="grid grid-cols-1 gap-3">
              {user.role !== 'Department Head' && (
                <button onClick={onQuickAddAsset} className="w-full flex items-center gap-4 p-3.5 rounded-[18px] bg-background hover:bg-primary/5 border border-outline/20 hover:border-primary/30 text-left transition-colors group">
                  <div className="bg-primary text-on-primary p-2.5 rounded-xl group-hover:scale-105 transition-transform"><span className="material-symbols-outlined text-[20px]">add</span></div>
                  <div>
                    <p className="text-sm font-bold text-on-surface group-hover:text-primary">Add New Hardware</p>
                    <p className="text-[11px] text-outline font-medium mt-0.5">Register serial keys</p>
                  </div>
                </button>
              )}
              <button onClick={onQuickAssign} className="w-full flex items-center gap-4 p-3.5 rounded-[18px] bg-background hover:bg-secondary/5 border border-outline/20 hover:border-secondary/30 text-left transition-colors group">
                <div className="bg-secondary text-white p-2.5 rounded-xl group-hover:scale-105 transition-transform"><span className="material-symbols-outlined text-[20px]">send</span></div>
                <div>
                  <p className="text-sm font-bold text-on-surface group-hover:text-secondary">Allocate Asset</p>
                  <p className="text-[11px] text-outline font-medium mt-0.5">Assign hardware to staff</p>
                </div>
              </button>
            </div>
          </div>

          <div className="bg-surface p-6 rounded-[28px] border border-outline/20 shadow-sm space-y-5">
            <div>
              <h2 className="text-lg font-bold text-on-surface tracking-tight">Inventory Distribution</h2>
            </div>
            <div className="space-y-4 pt-2">
              {Object.entries(categoryCounts).map(([cat, count]) => {
                const percentage = totalAssets > 0 ? Math.round((count / totalAssets) * 100) : 0;
                return (
                  <div key={cat} className="space-y-2">
                    <div className="flex items-center justify-between text-sm">
                      <span className="font-bold text-on-surface">{cat}</span>
                      <span className="text-outline font-medium uppercase tracking-wider text-[11px]">{count} items ({percentage}%)</span>
                    </div>
                    <div className="w-full bg-surface-container h-2 rounded-full overflow-hidden">
                      <div className="h-full bg-primary rounded-full" style={{ width: `${percentage}%` }}></div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
