import React, { useState } from 'react';
import { UserProfile, TransferRequest, MaintenanceTicket, Asset } from '../types';

interface ApprovalCenterProps {
  user: UserProfile;
  transferRequests: TransferRequest[];
  tickets: MaintenanceTicket[];
  assets: Asset[];
  onApproveTransfer: (requestId: string) => void;
  onRejectTransfer: (requestId: string, reason: string) => void;
  onApproveTicket: (ticketId: string, techName: string) => void;
  onRejectTicket: (ticketId: string, reason: string) => void;
}

type ActiveTab = 'transfers' | 'maintenance';

export default function ApprovalCenter({
  user, transferRequests, tickets, assets,
  onApproveTransfer, onRejectTransfer, onApproveTicket, onRejectTicket
}: ApprovalCenterProps) {
  const [activeTab, setActiveTab] = useState<ActiveTab>('transfers');
  const [rejectModal, setRejectModal] = useState<{ type: 'transfer' | 'maintenance'; id: string } | null>(null);
  const [rejectReason, setRejectReason] = useState('');
  const [approveTicketModal, setApproveTicketModal] = useState<string | null>(null);
  const [techName, setTechName] = useState('');

  // Scope requests based on role
  const scopedTransfers = user.role === 'Department Head'
    ? transferRequests.filter(r => r.requestedByDept === user.department)
    : transferRequests;

  const pendingTransfers = scopedTransfers.filter(r => r.status === 'Pending');
  const resolvedTransfers = scopedTransfers.filter(r => r.status !== 'Pending');

  // Only Asset Manager approves maintenance
  const pendingTickets = user.role === 'Asset Manager'
    ? tickets.filter(t => t.column === 'PENDING' && !t.isRejected)
    : [];
  const rejectedTickets = user.role === 'Asset Manager'
    ? tickets.filter(t => t.isRejected)
    : [];

  const pendingCount = pendingTransfers.length + pendingTickets.length;

  const handleRejectConfirm = () => {
    if (!rejectModal || !rejectReason.trim()) return;
    if (rejectModal.type === 'transfer') onRejectTransfer(rejectModal.id, rejectReason);
    else onRejectTicket(rejectModal.id, rejectReason);
    setRejectModal(null); setRejectReason('');
  };

  const handleApproveTicketConfirm = () => {
    if (!approveTicketModal) return;
    onApproveTicket(approveTicketModal, techName);
    setApproveTicketModal(null); setTechName('');
  };

  const statusBadge: Record<string, string> = {
    Pending: 'bg-amber-100 text-amber-700 border-amber-200',
    Approved: 'bg-green-100 text-green-700 border-green-200',
    Rejected: 'bg-red-100 text-red-700 border-red-200',
  };

  const priorityBadge: Record<string, string> = {
    URGENT: 'bg-error/10 text-error border-error/20',
    HIGH: 'bg-tertiary/10 text-tertiary border-tertiary/20',
    MEDIUM: 'bg-secondary/10 text-secondary border-secondary/20',
    NORMAL: 'bg-surface-container text-on-surface border-outline/20',
    ONGOING: 'bg-primary/10 text-primary border-primary/20',
    COMPLETED: 'bg-green-100 text-green-700 border-green-200',
  };

  const inputCls = "w-full p-3 bg-background border border-outline/30 focus:border-primary focus:ring-1 focus:ring-primary/20 rounded-2xl outline-none text-on-surface text-sm transition-colors";

  return (
    <div id="approval-center-tab" className="p-6 md:p-8 space-y-8 bg-background h-full">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-outline/30 pb-6">
        <div>
          <div className="flex items-center gap-2 text-xs font-bold text-primary uppercase tracking-widest">
            <span className="material-symbols-outlined text-[16px]">task_alt</span> Approval Center
          </div>
          <h1 className="text-3xl font-bold text-on-surface mt-1 tracking-tight">Request Inbox</h1>
          <p className="text-outline text-sm mt-1">
            {user.role === 'Department Head'
              ? `Showing requests from ${user.department} department.`
              : 'Org-wide transfer and maintenance approval queue.'}
          </p>
        </div>
        {pendingCount > 0 && (
          <div className="bg-error/10 border border-error/20 text-error px-4 py-2.5 rounded-2xl text-sm font-bold flex items-center gap-2">
            <span className="material-symbols-outlined text-[18px]">pending_actions</span>
            {pendingCount} pending action{pendingCount > 1 ? 's' : ''} require your review
          </div>
        )}
      </div>

      {/* Tab Switcher */}
      <div className="flex gap-1 bg-surface p-1 rounded-2xl border border-outline/20 w-fit">
        <button onClick={() => setActiveTab('transfers')}
          className={`px-5 py-2 rounded-xl text-sm font-bold transition-colors flex items-center gap-2 ${activeTab === 'transfers' ? 'bg-primary text-on-primary shadow-sm' : 'text-outline hover:text-on-surface'}`}>
          <span className="material-symbols-outlined text-[18px]">swap_horiz</span>
          Transfers & Returns
          {pendingTransfers.length > 0 && <span className="bg-error text-white text-[10px] font-bold px-1.5 py-0.5 rounded-full">{pendingTransfers.length}</span>}
        </button>
        {user.role === 'Asset Manager' && (
          <button onClick={() => setActiveTab('maintenance')}
            className={`px-5 py-2 rounded-xl text-sm font-bold transition-colors flex items-center gap-2 ${activeTab === 'maintenance' ? 'bg-primary text-on-primary shadow-sm' : 'text-outline hover:text-on-surface'}`}>
            <span className="material-symbols-outlined text-[18px]">build</span>
            Maintenance
            {pendingTickets.length > 0 && <span className="bg-error text-white text-[10px] font-bold px-1.5 py-0.5 rounded-full">{pendingTickets.length}</span>}
          </button>
        )}
      </div>

      {/* Transfers Tab */}
      {activeTab === 'transfers' && (
        <div className="space-y-6">
          {/* Pending */}
          <div className="bg-surface rounded-[28px] border border-outline/20 shadow-sm overflow-hidden">
            <div className="p-5 border-b border-outline/10 flex items-center gap-3">
              <span className="w-2 h-2 rounded-full bg-amber-500 animate-pulse" />
              <h2 className="text-base font-bold text-on-surface">Pending Review ({pendingTransfers.length})</h2>
            </div>
            {pendingTransfers.length === 0 ? (
              <div className="p-12 text-center">
                <span className="material-symbols-outlined text-5xl text-outline/30 block mb-2">inbox</span>
                <p className="text-outline text-sm font-medium">No pending transfer or return requests.</p>
              </div>
            ) : (
              <div className="divide-y divide-outline/10">
                {pendingTransfers.map(req => {
                  const asset = assets.find(a => a.tag === req.assetTag);
                  return (
                    <div key={req.id} className="p-5 hover:bg-surface-container/30 transition-colors">
                      <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
                        <div className="flex gap-4 items-start">
                          {asset?.image ? (
                            <img src={asset.image} alt={req.assetName} className="w-14 h-14 rounded-2xl object-cover border border-outline/20 shrink-0" />
                          ) : (
                            <div className="w-14 h-14 rounded-2xl bg-surface-container flex items-center justify-center shrink-0">
                              <span className="material-symbols-outlined text-outline/50 text-[28px]">inventory_2</span>
                            </div>
                          )}
                          <div>
                            <div className="flex items-center gap-2 flex-wrap">
                              <span className="text-xs font-bold bg-primary/10 text-primary px-2 py-0.5 rounded-md">{req.requestType}</span>
                              <span className="font-bold text-on-surface text-sm">{req.assetName}</span>
                              <span className="text-xs text-outline font-mono">{req.assetTag}</span>
                            </div>
                            <p className="text-xs text-outline mt-1">
                              Requested by <span className="font-bold text-on-surface">{req.requestedBy}</span>
                              {req.requestedByDept && <> ({req.requestedByDept})</>}
                              {req.targetHolder && <> → <span className="font-bold text-on-surface">{req.targetHolder}</span>{req.targetDept && <> ({req.targetDept})</>}</>}
                            </p>
                            <p className="text-xs text-outline mt-1 italic">"{req.reason}"</p>
                            <p className="text-[10px] text-outline/60 mt-1">{req.requestedAt}</p>
                          </div>
                        </div>
                        <div className="flex items-center gap-2 shrink-0">
                          <button onClick={() => onApproveTransfer(req.id)}
                            className="px-4 py-2 bg-primary text-on-primary rounded-[14px] text-sm font-bold flex items-center gap-1.5 hover:bg-primary/90 transition-colors">
                            <span className="material-symbols-outlined text-[16px]">check_circle</span> Approve
                          </button>
                          <button onClick={() => { setRejectModal({ type: 'transfer', id: req.id }); setRejectReason(''); }}
                            className="px-4 py-2 bg-error/10 text-error border border-error/20 rounded-[14px] text-sm font-bold flex items-center gap-1.5 hover:bg-error/20 transition-colors">
                            <span className="material-symbols-outlined text-[16px]">cancel</span> Reject
                          </button>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            )}
          </div>

          {/* Resolved history */}
          {resolvedTransfers.length > 0 && (
            <div className="bg-surface rounded-[28px] border border-outline/20 shadow-sm overflow-hidden">
              <div className="p-5 border-b border-outline/10">
                <h2 className="text-base font-bold text-on-surface">History ({resolvedTransfers.length})</h2>
              </div>
              <div className="divide-y divide-outline/10">
                {resolvedTransfers.map(req => (
                  <div key={req.id} className="p-5 flex items-center justify-between gap-4 opacity-70">
                    <div>
                      <div className="flex items-center gap-2 flex-wrap">
                        <span className="text-xs font-bold bg-surface-container text-outline px-2 py-0.5 rounded-md">{req.requestType}</span>
                        <span className="font-bold text-on-surface text-sm">{req.assetName}</span>
                        <span className="text-xs text-outline font-mono">{req.assetTag}</span>
                      </div>
                      <p className="text-xs text-outline mt-1">by {req.requestedBy} • {req.resolvedAt}</p>
                      {req.rejectionReason && <p className="text-xs text-error mt-0.5 italic">Rejected: {req.rejectionReason}</p>}
                    </div>
                    <span className={`text-xs font-bold px-3 py-1 rounded-full border ${statusBadge[req.status]}`}>{req.status}</span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      )}

      {/* Maintenance Tab (Asset Manager only) */}
      {activeTab === 'maintenance' && user.role === 'Asset Manager' && (
        <div className="space-y-6">
          <div className="bg-surface rounded-[28px] border border-outline/20 shadow-sm overflow-hidden">
            <div className="p-5 border-b border-outline/10 flex items-center gap-3">
              <span className="w-2 h-2 rounded-full bg-amber-500 animate-pulse" />
              <h2 className="text-base font-bold text-on-surface">Awaiting Approval ({pendingTickets.length})</h2>
            </div>
            {pendingTickets.length === 0 ? (
              <div className="p-12 text-center">
                <span className="material-symbols-outlined text-5xl text-outline/30 block mb-2">build_circle</span>
                <p className="text-outline text-sm font-medium">No maintenance tickets awaiting approval.</p>
              </div>
            ) : (
              <div className="divide-y divide-outline/10">
                {pendingTickets.map(ticket => {
                  const asset = assets.find(a => a.tag === ticket.assetTag);
                  return (
                    <div key={ticket.id} className="p-5 hover:bg-surface-container/30 transition-colors">
                      <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
                        <div>
                          <div className="flex items-center gap-2 flex-wrap">
                            <span className={`text-[10px] font-bold px-2 py-0.5 rounded-md border uppercase ${priorityBadge[ticket.priority] || ''}`}>{ticket.priority}</span>
                            <span className="font-bold text-on-surface text-sm">{ticket.title}</span>
                          </div>
                          <p className="text-xs text-outline mt-1">Asset: <span className="font-mono font-bold text-on-surface">{ticket.assetTag}</span> — {asset?.name}</p>
                          <p className="text-xs text-outline mt-0.5">Raised by: <span className="font-bold text-on-surface">{ticket.raisedBy}</span>{ticket.raisedByDept && <> ({ticket.raisedByDept})</>}</p>
                          <p className="text-xs text-outline italic mt-1">"{ticket.description}"</p>
                          <p className="text-[10px] text-outline/60 mt-1">{ticket.reportedTime}</p>
                        </div>
                        <div className="flex items-center gap-2 shrink-0">
                          <button onClick={() => { setApproveTicketModal(ticket.id); setTechName(''); }}
                            className="px-4 py-2 bg-primary text-on-primary rounded-[14px] text-sm font-bold flex items-center gap-1.5 hover:bg-primary/90 transition-colors">
                            <span className="material-symbols-outlined text-[16px]">check_circle</span> Approve
                          </button>
                          <button onClick={() => { setRejectModal({ type: 'maintenance', id: ticket.id }); setRejectReason(''); }}
                            className="px-4 py-2 bg-error/10 text-error border border-error/20 rounded-[14px] text-sm font-bold flex items-center gap-1.5 hover:bg-error/20 transition-colors">
                            <span className="material-symbols-outlined text-[16px]">cancel</span> Reject
                          </button>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            )}
          </div>

          {/* Rejected tickets */}
          {rejectedTickets.length > 0 && (
            <div className="bg-surface rounded-[28px] border border-outline/20 shadow-sm overflow-hidden">
              <div className="p-5 border-b border-outline/10">
                <h2 className="text-base font-bold text-on-surface">Rejected ({rejectedTickets.length})</h2>
              </div>
              <div className="divide-y divide-outline/10">
                {rejectedTickets.map(ticket => (
                  <div key={ticket.id} className="p-5 opacity-70">
                    <div className="flex items-center gap-2 flex-wrap">
                      <span className="font-bold text-on-surface text-sm">{ticket.title}</span>
                      <span className="text-xs font-mono text-outline">{ticket.assetTag}</span>
                    </div>
                    <p className="text-xs text-outline mt-1">by {ticket.raisedBy} • {ticket.reportedTime}</p>
                    <p className="text-xs text-error mt-1 italic">Rejected: {ticket.rejectedReason}</p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      )}

      {/* Reject Reason Modal */}
      {rejectModal && (
        <div className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center p-4 z-50">
          <div className="bg-surface rounded-[28px] border border-outline/20 w-full max-w-md shadow-2xl overflow-hidden">
            <div className="p-5 border-b border-outline/10 flex items-center justify-between bg-surface-container">
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-error">cancel</span>
                <h2 className="text-base font-bold text-on-surface">Reject with Reason</h2>
              </div>
              <button onClick={() => setRejectModal(null)} className="text-outline hover:text-on-surface p-1.5 rounded-xl hover:bg-surface transition-colors">
                <span className="material-symbols-outlined">close</span>
              </button>
            </div>
            <div className="p-6 space-y-4">
              <p className="text-sm text-outline">Provide a reason. This will be sent to the requester as a notification.</p>
              <textarea value={rejectReason} onChange={e => setRejectReason(e.target.value)} rows={3}
                placeholder="e.g., Asset is currently under audit, please resubmit after Jul 20..."
                className={inputCls + ' resize-none'} />
              <button disabled={!rejectReason.trim()} onClick={handleRejectConfirm}
                className="w-full h-11 bg-error hover:bg-error/90 disabled:opacity-40 text-white font-bold rounded-[16px] flex items-center justify-center gap-2 transition-colors">
                <span className="material-symbols-outlined text-[18px]">cancel</span> Confirm Rejection
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Approve Ticket + Assign Tech Modal */}
      {approveTicketModal && (
        <div className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center p-4 z-50">
          <div className="bg-surface rounded-[28px] border border-outline/20 w-full max-w-md shadow-2xl overflow-hidden">
            <div className="p-5 border-b border-outline/10 flex items-center justify-between bg-surface-container">
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-primary">build</span>
                <h2 className="text-base font-bold text-on-surface">Approve & Assign Technician</h2>
              </div>
              <button onClick={() => setApproveTicketModal(null)} className="text-outline hover:text-on-surface p-1.5 rounded-xl hover:bg-surface transition-colors">
                <span className="material-symbols-outlined">close</span>
              </button>
            </div>
            <div className="p-6 space-y-4">
              <p className="text-sm text-outline">Assign a technician to this ticket. Approving will flip the asset status to <span className="font-bold text-on-surface">Under Maintenance</span>.</p>
              <input value={techName} onChange={e => setTechName(e.target.value)}
                placeholder="e.g., Tech: R. Varma" className={inputCls} />
              <button onClick={handleApproveTicketConfirm}
                className="w-full h-11 bg-primary hover:bg-primary/90 text-on-primary font-bold rounded-[16px] flex items-center justify-center gap-2 transition-colors">
                <span className="material-symbols-outlined text-[18px]">check_circle</span> Approve & Assign
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
