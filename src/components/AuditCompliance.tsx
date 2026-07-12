import React, { useState } from 'react';
import { Asset } from '../types';

interface AuditComplianceProps {
  assets: Asset[];
  onVerifyAsset: (tag: string, status: 'Verified' | 'Missing' | 'Damaged') => void;
  onAddLog: (title: string, desc: string, type: 'all' | 'alerts' | 'approvals' | 'bookings', icon: string, isAlert?: boolean) => void;
}

export default function AuditCompliance({ assets, onVerifyAsset, onAddLog }: AuditComplianceProps) {
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState<'All' | 'Verified' | 'Missing' | 'Damaged' | 'Pending'>('All');

  const totalCount = assets.length;
  const verifiedCount = assets.filter(a => a.verificationStatus === 'Verified').length;
  const missingCount = assets.filter(a => a.verificationStatus === 'Missing').length;
  const damagedCount = assets.filter(a => a.verificationStatus === 'Damaged').length;
  const pendingCount = assets.filter(a => !a.verificationStatus || a.verificationStatus === 'Pending').length;
  const complianceRate = totalCount > 0 ? Math.round((verifiedCount / totalCount) * 100) : 0;

  const handleAuditAction = (tag: string, name: string, status: 'Verified' | 'Missing' | 'Damaged') => {
    onVerifyAsset(tag, status);
    const descMap = {
      Verified: `Custodian verified asset presence at expected physical location.`,
      Missing: `Asset could not be found at designated custody area. Alarm dispatched.`,
      Damaged: `Physical defect reported during inspection. Auto-routed to Kanban triage.`
    };
    const iconMap = { Verified: 'check_circle', Missing: 'warning', Damaged: 'warning' };
    onAddLog(`Audit: ${name} marked [${status}]`, descMap[status], status === 'Verified' ? 'all' : 'alerts', iconMap[status], status !== 'Verified');
  };

  const filteredAssets = assets.filter(asset => {
    const matchesSearch = asset.name.toLowerCase().includes(searchTerm.toLowerCase()) || asset.tag.toLowerCase().includes(searchTerm.toLowerCase());
    const assetStatus = asset.verificationStatus || 'Pending';
    const matchesStatus = statusFilter === 'All' || assetStatus === statusFilter;
    return matchesSearch && matchesStatus;
  });

  return (
    <div id="audit-tab" className="p-6 md:p-8 space-y-8 bg-background h-full">

      {/* Header */}
      <div className="border-b border-outline/30 pb-6">
        <div className="flex items-center gap-2 text-xs font-bold text-primary uppercase tracking-widest">
          <span className="material-symbols-outlined text-[16px]">verified_user</span>
          Compliance & Safety Registry
        </div>
        <h1 className="text-3xl font-bold text-on-surface mt-1 tracking-tight">Audit Control & Physical Compliance</h1>
        <p className="text-outline text-sm mt-1">Initiate digital custody checks, physically confirm device tags, and reconcile discrepancies instantly.</p>
      </div>

      {/* Compliance Health Panel */}
      <div className="bg-primary rounded-[28px] p-6 md:p-8 shadow-xl flex flex-col md:flex-row items-center gap-8 justify-between relative overflow-hidden">
        <div className="absolute top-[-40%] right-[-10%] w-72 h-72 rounded-full bg-white/5 blur-3xl pointer-events-none"></div>

        <div className="space-y-4 max-w-xl z-10">
          <span className="bg-white/10 text-white/90 text-xs font-bold px-3 py-1 rounded-full border border-white/20">
            Active Verification Audit Cycle (Q3)
          </span>
          <h2 className="text-2xl font-bold text-white tracking-tight leading-tight">Overall Reconciliation Progress</h2>
          <p className="text-white/70 text-sm leading-relaxed">
            Ensure physical audit checks match registered serial identifiers. Once verified, assets obtain digital compliance badges.
          </p>
          <div className="space-y-2">
            <div className="flex justify-between items-center text-sm font-bold">
              <span className="text-white/80">Total Progress</span>
              <span className="text-white">{complianceRate}% Reconciled ({verifiedCount}/{totalCount})</span>
            </div>
            <div className="w-full bg-white/20 h-2.5 rounded-full overflow-hidden">
              <div className="bg-white h-full rounded-full transition-all duration-500" style={{ width: `${complianceRate}%` }}></div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-3 shrink-0 w-full md:w-auto z-10">
          {[
            { label: 'Verified', value: verifiedCount, color: 'text-white' },
            { label: 'Missing', value: missingCount, color: 'text-error' },
            { label: 'Damaged', value: damagedCount, color: 'text-tertiary' },
            { label: 'Pending', value: pendingCount, color: 'text-white/70' },
          ].map(({ label, value, color }) => (
            <div key={label} className="bg-white/10 p-4 rounded-2xl border border-white/20 backdrop-blur-sm">
              <p className="text-[10px] uppercase font-bold text-white/60 tracking-wider">{label} Presence</p>
              <p className={`text-3xl font-bold ${color} mt-1`}>{value}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Main Table */}
      <div className="bg-surface rounded-[28px] border border-outline/20 shadow-sm overflow-hidden">
        {/* Table Controls */}
        <div className="p-6 border-b border-outline/10 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div>
            <h3 className="text-lg font-bold text-on-surface tracking-tight">Active Checklist Ledger</h3>
            <p className="text-sm text-outline mt-0.5">Physically scan/confirm devices during stock-taking walkthroughs.</p>
          </div>
          <div className="flex flex-col sm:flex-row items-center gap-3">
            <div className="relative w-full sm:max-w-xs">
              <span className="material-symbols-outlined absolute left-3.5 top-1/2 -translate-y-1/2 text-outline text-[18px]">search</span>
              <input type="text" placeholder="Search checklist tag..." value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 text-sm bg-background border border-outline/20 focus:border-primary focus:ring-1 focus:ring-primary/10 rounded-[14px] outline-none text-on-surface" />
            </div>
            <div className="flex bg-surface-container p-1 rounded-[14px] border border-outline/10 flex-wrap gap-0.5">
              {(['All', 'Verified', 'Missing', 'Damaged', 'Pending'] as const).map((tab) => (
                <button key={tab} onClick={() => setStatusFilter(tab)}
                  className={`px-3 py-1.5 text-xs font-bold rounded-xl transition-colors ${statusFilter === tab ? 'bg-surface text-primary shadow-sm' : 'text-on-surface hover:text-primary'}`}>
                  {tab}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-surface-container text-outline uppercase tracking-wider text-xs font-bold border-b border-outline/10">
                <th className="py-3.5 px-6">Hardware Details</th>
                <th className="py-3.5 px-6">Designated Hub</th>
                <th className="py-3.5 px-6">Verification Date</th>
                <th className="py-3.5 px-6 text-center">Audit Standing</th>
                <th className="py-3.5 px-6 text-right">Physical Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-outline/10">
              {filteredAssets.length === 0 ? (
                <tr><td colSpan={5} className="py-16 text-center text-outline">No matching assets in this audit segment.</td></tr>
              ) : (
                filteredAssets.map((asset) => {
                  const auditStatus = asset.verificationStatus || 'Pending';
                  const badge = {
                    Verified: 'bg-primary-container text-primary border-primary/20',
                    Missing: 'bg-error/10 text-error border-error/20',
                    Damaged: 'bg-tertiary/10 text-tertiary border-tertiary/20',
                    Pending: 'bg-surface-container text-on-surface border-outline/20'
                  }[auditStatus] || 'bg-surface-container text-on-surface border-outline/20';

                  return (
                    <tr key={asset.tag} className="hover:bg-surface-container/30 transition-colors">
                      <td className="py-4 px-6">
                        <div className="flex items-center gap-3">
                          <img src={asset.image} alt={asset.name} className="w-10 h-10 rounded-xl object-cover border border-outline/20" />
                          <div>
                            <p className="font-bold text-on-surface">{asset.name}</p>
                            <div className="flex items-center gap-2 text-xs text-outline mt-0.5 font-medium">
                              <span className="font-bold text-on-surface/80">{asset.tag}</span>
                              <span>•</span>
                              <span>{asset.serial}</span>
                            </div>
                          </div>
                        </div>
                      </td>
                      <td className="py-4 px-6 font-bold text-on-surface text-sm">{asset.location}</td>
                      <td className="py-4 px-6 text-outline text-sm">
                        <div className="flex items-center gap-1.5">
                          <span className="material-symbols-outlined text-[16px]">schedule</span>
                          <span>{asset.lastVerified || 'Never audited'}</span>
                        </div>
                      </td>
                      <td className="py-4 px-6 text-center">
                        <span className={`inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-bold border uppercase tracking-wider ${badge}`}>
                          {auditStatus}
                        </span>
                      </td>
                      <td className="py-4 px-6 text-right">
                        <div className="flex items-center justify-end gap-1.5">
                          <button id={`btn-audit-verify-${asset.tag}`} onClick={() => handleAuditAction(asset.tag, asset.name, 'Verified')}
                            className="bg-primary-container hover:bg-primary text-primary hover:text-on-primary px-3 py-1.5 rounded-lg border border-primary/20 hover:border-primary transition-colors font-bold text-xs flex items-center gap-1">
                            <span className="material-symbols-outlined text-[14px]">check</span> Verify
                          </button>
                          <button id={`btn-audit-missing-${asset.tag}`} onClick={() => handleAuditAction(asset.tag, asset.name, 'Missing')}
                            className="bg-error/10 hover:bg-error text-error hover:text-white px-3 py-1.5 rounded-lg border border-error/20 hover:border-error transition-colors font-bold text-xs flex items-center gap-1">
                            <span className="material-symbols-outlined text-[14px]">close</span> Missing
                          </button>
                          <button id={`btn-audit-damaged-${asset.tag}`} onClick={() => handleAuditAction(asset.tag, asset.name, 'Damaged')}
                            className="bg-tertiary/10 hover:bg-tertiary text-tertiary hover:text-white px-3 py-1.5 rounded-lg border border-tertiary/20 hover:border-tertiary transition-colors font-bold text-xs flex items-center gap-1">
                            <span className="material-symbols-outlined text-[14px]">warning</span> Damaged
                          </button>
                        </div>
                      </td>
                    </tr>
                  );
                })
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
