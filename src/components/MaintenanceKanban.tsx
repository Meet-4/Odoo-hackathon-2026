import React, { useState, useEffect } from 'react';
import { MaintenanceTicket, MaintenanceColumn, MaintenancePriority, Asset, UserProfile } from '../types';

interface MaintenanceKanbanProps {
  user: UserProfile;
  tickets: MaintenanceTicket[];
  assets: Asset[];
  onAddTicket: (ticket: MaintenanceTicket) => void;
  onUpdateTicketColumn: (id: string, column: MaintenanceColumn) => void;
  onDeleteTicket: (id: string) => void;
  onAddLog: (title: string, desc: string, type: 'all' | 'alerts' | 'approvals' | 'bookings', icon: string, isAlert?: boolean) => void;
  quickLogTriggered: boolean;
  resetQuickLogTrigger: () => void;
}

export default function MaintenanceKanban({
  user, tickets, assets, onAddTicket, onUpdateTicketColumn, onDeleteTicket, onAddLog, quickLogTriggered, resetQuickLogTrigger
}: MaintenanceKanbanProps) {
  const columns: { id: MaintenanceColumn; title: string; subtitle: string; headerColor: string }[] = [
    { id: 'PENDING', title: 'Pending', subtitle: 'Awaiting triage', headerColor: 'bg-amber-500' },
    { id: 'APPROVED', title: 'Approved', subtitle: 'Pre-authorized tasks', headerColor: 'bg-secondary' },
    { id: 'TECHNICIAN ASSIGNED', title: 'Assigned', subtitle: 'Assigned to engineer', headerColor: 'bg-primary' },
    { id: 'IN PROGRESS', title: 'In Progress', subtitle: 'Actively in repair', headerColor: 'bg-tertiary' },
    { id: 'RESOLVED', title: 'Resolved', subtitle: 'QA signed & verified', headerColor: 'bg-primary-container' },
  ];

  const [showAddModal, setShowAddModal] = useState(false);
  const [selectedAssetTag, setSelectedAssetTag] = useState('');
  const [ticketTitle, setTicketTitle] = useState('');
  const [ticketDesc, setTicketDesc] = useState('');
  const [ticketPriority, setTicketPriority] = useState<MaintenancePriority>('MEDIUM');
  const [draggedId, setDraggedId] = useState<string | null>(null);
  const [dragOverCol, setDragOverCol] = useState<MaintenanceColumn | null>(null);

  // Filter assets for ticket logging: employees only log for their assets, dept heads for their dept assets
  const filterAssetsForLogging = () => {
    if (user.role === 'Employee') return assets.filter(a => a.allocatedTo === user.name);
    if (user.role === 'Department Head') return assets.filter(a => a.allocatedToDept === user.department);
    return assets;
  };
  const loggableAssets = filterAssetsForLogging();

  // Scope visible tickets by role
  const visibleTickets = (() => {
    if (user.role === 'Employee') return tickets.filter(t => t.raisedBy === user.name);
    if (user.role === 'Department Head') return tickets.filter(t => t.raisedByDept === user.department);
    return tickets;
  })();

  useEffect(() => {
    if (quickLogTriggered) {
      if (loggableAssets.length > 0) setSelectedAssetTag(loggableAssets[0].tag);
      setShowAddModal(true);
      resetQuickLogTrigger();
    }
  }, [quickLogTriggered, resetQuickLogTrigger]);

  const handleAddTicketSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!ticketTitle || !selectedAssetTag) return;
    const newTicket: MaintenanceTicket = { id: `maint-${Date.now()}`, assetTag: selectedAssetTag, title: ticketTitle, description: ticketDesc, priority: ticketPriority, column: 'PENDING', reportedTime: new Date().toLocaleString('en-US', { month: 'short', day: 'numeric', hour: '2-digit', minute: '2-digit' }) };
    onAddTicket(newTicket);
    setTicketTitle(''); setTicketDesc(''); setSelectedAssetTag(''); setTicketPriority('MEDIUM'); setShowAddModal(false);
  };

  const isManager = user.role === 'Asset Manager';

  const moveTicket = (id: string, currentColumn: MaintenanceColumn, direction: 'left' | 'right') => {
    if (!isManager) return;
    const ticket = tickets.find(t => t.id === id);
    if (ticket?.column === 'PENDING') return; // Pending handled by Approval Center

    const columnIndex = columns.findIndex(col => col.id === currentColumn);
    if (columnIndex === -1) return;
    let targetIndex = columnIndex;
    if (direction === 'left' && columnIndex > 0) targetIndex--;
    if (direction === 'right' && columnIndex < columns.length - 1) targetIndex++;
    
    const targetColumn = columns[targetIndex].id;
    if (targetColumn === 'PENDING') return; // Cannot manually move back to Pending

    if (targetIndex !== columnIndex) {
      onUpdateTicketColumn(id, targetColumn);
      if (ticket) onAddLog(`Ticket Updated: ${ticket.title}`, `Transitioned to column [${targetColumn}].`, 'all', 'check_circle');
    }
  };

  const handleDragStart = (e: React.DragEvent, id: string, column: MaintenanceColumn) => {
    if (!isManager || column === 'PENDING') {
      e.preventDefault();
      return;
    }
    setDraggedId(id);
    e.dataTransfer.effectAllowed = 'move';
  };

  const handleDragOver = (e: React.DragEvent, column: MaintenanceColumn) => {
    e.preventDefault();
    if (!isManager || column === 'PENDING') return;
    if (draggedId) setDragOverCol(column);
  };

  const handleDrop = (e: React.DragEvent, column: MaintenanceColumn) => {
    e.preventDefault();
    if (!isManager || column === 'PENDING') {
      setDragOverCol(null);
      return;
    }
    setDragOverCol(null);
    if (draggedId) {
      onUpdateTicketColumn(draggedId, column);
      setDraggedId(null);
    }
  };

  const priorityBadge: Record<MaintenancePriority, string> = {
    URGENT: 'bg-error/10 text-error border-error/20',
    HIGH: 'bg-tertiary/10 text-tertiary border-tertiary/20',
    MEDIUM: 'bg-secondary-container text-secondary border-secondary/20',
    NORMAL: 'bg-surface-container text-on-surface border-outline/20',
    ONGOING: 'bg-primary-container text-primary border-primary/20',
    COMPLETED: 'bg-primary-container text-primary border-primary/20',
  };

  const inputCls = "w-full p-3.5 bg-background border border-outline/30 focus:border-primary focus:ring-1 focus:ring-primary/20 rounded-2xl outline-none text-on-surface text-sm transition-colors";
  const labelCls = "block text-sm font-bold text-on-surface mb-1.5";

  return (
    <div id="maintenance-tab" className="p-6 md:p-8 space-y-8 bg-background h-full overflow-y-auto">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-outline/30 pb-6">
        <div>
          <div className="flex items-center gap-2 text-xs font-bold text-primary uppercase tracking-widest">
            <span className="material-symbols-outlined text-[16px]">build</span>
            Physical Fault Management
          </div>
          <h1 className="text-3xl font-bold text-on-surface mt-1 tracking-tight">Maintenance Hub & Repair Kanban</h1>
        </div>
        <button id="btn-trigger-ticket" onClick={() => { if (loggableAssets.length > 0) setSelectedAssetTag(loggableAssets[0].tag); setShowAddModal(true); }}
          className="bg-primary hover:bg-primary/90 text-on-primary px-5 py-2.5 rounded-[14px] text-sm font-bold flex items-center gap-2 transition-colors shadow-sm shrink-0 self-start sm:self-center">
          <span className="material-symbols-outlined text-[20px]">add</span> Log Maintenance Ticket
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-5 gap-4 items-start pb-4">
        {columns.map((column) => {
          const columnTickets = visibleTickets.filter(t => t.column === column.id);
          return (
            <div key={column.id} 
              onDragOver={(e) => handleDragOver(e, column.id)} 
              onDrop={(e) => handleDrop(e, column.id)} 
              className={`bg-surface rounded-[20px] border border-outline/20 overflow-hidden flex flex-col min-h-[550px] ${dragOverCol === column.id ? 'ring-2 ring-primary' : ''}`}
            >
              <div className={`px-4 py-3 ${column.headerColor} ${column.id === 'PENDING' ? 'text-white' : 'text-on-primary'} flex items-center justify-between`}>
                <div>
                  <h2 className="text-xs font-bold uppercase tracking-wider">{column.title}</h2>
                  <p className="text-[10px] text-white/70 mt-0.5">{column.subtitle}</p>
                </div>
                <span className="bg-white/20 text-white text-xs font-bold px-2 py-0.5 rounded-full">{columnTickets.length}</span>
              </div>
              <div className="flex-1 p-3 space-y-3 overflow-y-auto max-h-[500px]">
                {columnTickets.length === 0 ? (
                  <div className="h-40 border-2 border-dashed border-outline/20 rounded-2xl flex flex-col items-center justify-center text-center text-outline">
                    <span className="material-symbols-outlined text-3xl text-outline/40 mb-1">inbox</span>
                    <p className="text-xs font-medium">Column Empty</p>
                  </div>
                ) : (
                  columnTickets.map((ticket) => (
                    <div key={ticket.id} 
                      draggable={isManager && ticket.column !== 'PENDING'} 
                      onDragStart={(e) => handleDragStart(e, ticket.id, ticket.column)} 
                      className={`bg-background border ${ticket.isRejected ? 'border-error/40 shadow-[0_0_8px_rgba(239,68,68,0.2)]' : 'border-outline/20'} p-4 rounded-[16px] shadow-sm hover:shadow-md transition-shadow space-y-3 group ${isManager && ticket.column !== 'PENDING' ? 'cursor-grab active:cursor-grabbing' : 'cursor-default'}`}
                    >
                      <div className="flex items-center justify-between">
                        <span className={`text-[9px] font-bold px-2 py-0.5 rounded-md border uppercase tracking-wider ${priorityBadge[ticket.priority]}`}>
                          {ticket.priority}
                        </span>
                        {isManager && (
                          <button id={`btn-delete-ticket-${ticket.id}`} onClick={() => onDeleteTicket(ticket.id)}
                            className="text-outline hover:text-error opacity-0 group-hover:opacity-100 transition-all p-1 rounded-lg hover:bg-error/10">
                            <span className="material-symbols-outlined text-[16px]">delete</span>
                          </button>
                        )}
                      </div>
                      <div>
                        <h4 className="text-sm font-bold text-on-surface leading-tight">{ticket.title}</h4>
                        <p className="text-xs text-outline mt-1 leading-relaxed">{ticket.description}</p>
                        {ticket.isRejected && (
                          <p className="text-xs text-error font-medium italic mt-2 border-t border-error/10 pt-2">
                            Rejected: {ticket.rejectedReason}
                          </p>
                        )}
                        {ticket.assignee && (
                          <p className="text-xs text-primary font-bold mt-2 flex items-center gap-1">
                            <span className="material-symbols-outlined text-[14px]">engineering</span> {ticket.assignee}
                          </p>
                        )}
                      </div>
                      <div className="flex items-center justify-between text-xs font-medium text-outline bg-surface-container p-2.5 rounded-[12px] border border-outline/10">
                        <span className="font-bold text-on-surface flex items-center gap-1">{ticket.assetTag}</span>
                        <span className="flex items-center gap-1"><span className="material-symbols-outlined text-[14px]">schedule</span>{ticket.reportedTime}</span>
                      </div>
                      
                      {/* Movement controls for Asset Manager only, disabled for pending */}
                      {isManager && ticket.column !== 'PENDING' && (
                        <div className="flex items-center justify-between pt-2 border-t border-outline/10">
                          <button id={`btn-move-left-${ticket.id}`} disabled={column.id === 'APPROVED'}
                            onClick={() => moveTicket(ticket.id, column.id, 'left')}
                            className="p-1.5 rounded-lg bg-surface-container hover:bg-primary-container hover:text-primary disabled:opacity-30 disabled:pointer-events-none text-on-surface transition-colors">
                            <span className="material-symbols-outlined text-[16px]">arrow_back</span>
                          </button>
                          <span className="text-[9px] uppercase tracking-wider font-bold text-outline">Triage Shift</span>
                          <button id={`btn-move-right-${ticket.id}`} disabled={column.id === 'RESOLVED'}
                            onClick={() => moveTicket(ticket.id, column.id, 'right')}
                            className="p-1.5 rounded-lg bg-surface-container hover:bg-primary-container hover:text-primary disabled:opacity-30 disabled:pointer-events-none text-on-surface transition-colors">
                            <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
                          </button>
                        </div>
                      )}
                    </div>
                  ))
                )}
              </div>
            </div>
          );
        })}
      </div>

      {showAddModal && (
        <div className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center p-4 z-50">
          <div className="bg-surface rounded-[28px] border border-outline/20 w-full max-w-md overflow-hidden shadow-2xl">
            <div className="p-6 border-b border-outline/10 flex items-center justify-between bg-surface-container">
              <div className="flex items-center gap-2.5">
                <div className="bg-primary text-on-primary p-2 rounded-xl"><span className="material-symbols-outlined text-[20px]">build</span></div>
                <h2 className="text-base font-bold text-on-surface">Log Repair Ticket</h2>
              </div>
              <button onClick={() => setShowAddModal(false)} className="text-outline hover:text-on-surface p-1.5 rounded-xl hover:bg-surface transition-colors">
                <span className="material-symbols-outlined">close</span>
              </button>
            </div>
            <form onSubmit={handleAddTicketSubmit} className="p-6 space-y-4">
              <div><label className={labelCls}>Target Hardware</label>
                <select required value={selectedAssetTag} onChange={(e) => setSelectedAssetTag(e.target.value)} className={inputCls}>
                  <option value="" disabled>Select Asset</option>
                  {loggableAssets.map(a => <option key={a.tag} value={a.tag}>{a.tag} — {a.name}</option>)}
                </select>
                {loggableAssets.length === 0 && <p className="text-xs text-error mt-1">You have no assets available to log tickets for.</p>}
              </div>
              <div><label className={labelCls}>Issue Headline</label>
                <input type="text" required placeholder="e.g., Device won't charge" value={ticketTitle} onChange={(e) => setTicketTitle(e.target.value)} className={inputCls} />
              </div>
              <div><label className={labelCls}>Defect Description</label>
                <textarea required rows={3} placeholder="Provide precise details of the malfunction..." value={ticketDesc} onChange={(e) => setTicketDesc(e.target.value)} className={`${inputCls} resize-none`} />
              </div>
              <div>
                <label className="block text-sm font-bold text-on-surface mb-1.5">Severity / Priority</label>
                <div className="grid grid-cols-2 gap-2">
                  {(['URGENT', 'HIGH', 'MEDIUM', 'NORMAL'] as MaintenancePriority[]).map((p) => (
                    <button key={p} type="button" onClick={() => setTicketPriority(p)}
                      className={`py-2.5 px-1 rounded-[14px] text-xs font-bold border transition-colors text-center uppercase ${
                        ticketPriority === p
                          ? p === 'URGENT' ? 'bg-error text-white border-error'
                          : p === 'HIGH' ? 'bg-tertiary text-white border-tertiary'
                          : 'bg-primary text-on-primary border-primary'
                          : 'bg-background text-on-surface border-outline/20 hover:border-primary/40'
                      }`}>
                      {p}
                    </button>
                  ))}
                </div>
              </div>
              <button type="submit" disabled={loggableAssets.length === 0} className="w-full h-12 bg-primary hover:bg-primary/90 disabled:opacity-50 text-on-primary font-bold rounded-[16px] flex items-center justify-center gap-2 transition-colors shadow-sm">
                <span className="material-symbols-outlined text-[20px]">send</span> Dispatch Ticket
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
