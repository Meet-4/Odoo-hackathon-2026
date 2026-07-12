import React, { useState } from 'react';
import { Asset, MaintenanceTicket, Booking } from '../types';

interface ReportsProps {
  assets: Asset[];
  tickets: MaintenanceTicket[];
  bookings: Booking[];
}

export default function Reports({ assets, tickets, bookings }: ReportsProps) {
  const [showPrintPreview, setShowPrintPreview] = useState(false);

  const totalCount = assets.length;
  const availableCount = assets.filter(a => a.status === 'Available').length;
  const allocatedCount = assets.filter(a => a.status === 'Allocated').length;
  const maintCount = assets.filter(a => a.status === 'Maintenance').length;
  const damagedCount = assets.filter(a => a.status === 'Damaged').length;
  const verifiedCount = assets.filter(a => a.verificationStatus === 'Verified').length;

  const barData = [
    { label: 'Available', count: availableCount, color: 'bg-primary' },
    { label: 'Allocated', count: allocatedCount, color: 'bg-secondary' },
    { label: 'Maintenance', count: maintCount, color: 'bg-tertiary' },
    { label: 'Damaged', count: damagedCount, color: 'bg-error' },
  ];
  const maxBar = Math.max(...barData.map(d => d.count), 1);

  return (
    <div id="reports-tab" className="p-6 md:p-8 space-y-8 bg-background h-full">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-outline/30 pb-6">
        <div>
          <div className="flex items-center gap-2 text-xs font-bold text-primary uppercase tracking-widest">
            <span className="material-symbols-outlined text-[16px]">bar_chart</span> Data Analytics Console
          </div>
          <h1 className="text-3xl font-bold text-on-surface mt-1 tracking-tight">Reports & Executive Analytics</h1>
          <p className="text-outline text-sm mt-1">Synthesize real-time hardware metrics, depreciation ratios, and cross-departmental space usage.</p>
        </div>
        <button id="btn-trigger-print" onClick={() => setShowPrintPreview(true)}
          className="bg-primary hover:bg-primary/90 text-on-primary px-5 py-2.5 rounded-[14px] text-sm font-bold flex items-center gap-2 transition-colors shadow-sm shrink-0">
          <span className="material-symbols-outlined text-[20px]">print</span> Generate Executive PDF
        </button>
      </div>

      {/* Main Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left 2 cols */}
        <div className="lg:col-span-2 space-y-8">
          {/* Bar Chart */}
          <div className="bg-surface p-6 rounded-[28px] border border-outline/20 shadow-sm space-y-6">
            <div>
              <h3 className="text-lg font-bold text-on-surface tracking-tight">Inventory Allocation Status Ratio</h3>
              <p className="text-sm text-outline">Comparing active custody against staging reserves.</p>
            </div>
            <div className="h-64 flex items-end gap-6 pt-6 px-4">
              {barData.map((item, idx) => {
                const heightPercentage = Math.round((item.count / maxBar) * 100);
                return (
                  <div key={idx} className="flex-1 flex flex-col items-center gap-2 group h-full justify-end">
                    <span className="text-sm font-bold text-on-surface opacity-0 group-hover:opacity-100 transition-opacity">
                      {item.count} items
                    </span>
                    <div className="w-full bg-surface-container rounded-t-xl h-full flex items-end overflow-hidden border border-outline/10">
                      <div className={`w-full ${item.color} rounded-t-xl transition-all duration-500`} style={{ height: `${heightPercentage}%` }}></div>
                    </div>
                    <span className="text-xs font-bold uppercase tracking-wider text-outline mt-1 text-center truncate w-full">{item.label}</span>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Department Table */}
          <div className="bg-surface rounded-[28px] border border-outline/20 shadow-sm overflow-hidden">
            <div className="p-6 border-b border-outline/10">
              <h3 className="text-lg font-bold text-on-surface tracking-tight">Departmental Deployment Indexes</h3>
              <p className="text-sm text-outline mt-0.5">Physical telemetry metrics broken down by primary operational units.</p>
            </div>
            <table className="w-full text-left">
              <thead>
                <tr className="bg-surface-container text-outline uppercase tracking-wider text-xs font-bold border-b border-outline/10">
                  <th className="py-3.5 px-6">Department</th>
                  <th className="py-3.5 px-6">Total Hardware</th>
                  <th className="py-3.5 px-6">Utilization</th>
                  <th className="py-3.5 px-6">Open Issues</th>
                  <th className="py-3.5 px-6 text-right">Insurance Value</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-outline/10 text-on-surface">
                <tr className="hover:bg-surface-container/30 transition-colors">
                  <td className="py-3.5 px-6 font-bold">Engineering</td>
                  <td className="py-3.5 px-6 text-on-surface/80">14 units</td>
                  <td className="py-3.5 px-6 text-primary font-bold">92.4%</td>
                  <td className="py-3.5 px-6 font-bold text-tertiary">2 active</td>
                  <td className="py-3.5 px-6 text-right font-bold">$18,400</td>
                </tr>
                <tr className="hover:bg-surface-container/30 transition-colors">
                  <td className="py-3.5 px-6 font-bold">Facilities</td>
                  <td className="py-3.5 px-6 text-on-surface/80">8 units</td>
                  <td className="py-3.5 px-6 text-primary font-bold">88.1%</td>
                  <td className="py-3.5 px-6 font-bold text-outline">0 active</td>
                  <td className="py-3.5 px-6 text-right font-bold">$9,200</td>
                </tr>
                <tr className="hover:bg-surface-container/30 transition-colors">
                  <td className="py-3.5 px-6 font-bold">Operations</td>
                  <td className="py-3.5 px-6 text-on-surface/80">11 units</td>
                  <td className="py-3.5 px-6 text-tertiary font-bold">74.5%</td>
                  <td className="py-3.5 px-6 font-bold text-error">3 active</td>
                  <td className="py-3.5 px-6 text-right font-bold">$24,500</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Right column */}
        <div className="space-y-8">
          {/* Depreciation card */}
          <div className="bg-primary p-6 rounded-[28px] shadow-xl space-y-5 relative overflow-hidden">
            <div className="absolute top-[-30%] right-[-10%] w-64 h-64 bg-white/5 rounded-full blur-2xl pointer-events-none"></div>
            <div>
              <span className="text-xs font-bold text-white/80 uppercase tracking-widest bg-white/10 px-2 py-0.5 rounded-md border border-white/20">
                Depreciation Audit
              </span>
              <h3 className="text-lg font-bold text-white mt-3 tracking-tight">Valuation Reserves</h3>
              <p className="text-sm text-white/70 mt-1">Estimated hardware lifecycle depreciation index metrics.</p>
            </div>
            <div className="space-y-3 pt-2">
              {[
                { label: 'Total Insurance Reserve', value: '$52,100', valueColor: 'text-white' },
                { label: 'Depreciation Ratio', value: '14.2% YTD', valueColor: 'text-white/80' },
                { label: 'Next Audit Deadline', value: 'Aug 28, 2026', valueColor: 'text-white/80' },
              ].map(({ label, value, valueColor }) => (
                <div key={label} className="flex items-center justify-between text-sm font-bold">
                  <span className="text-white/60">{label}</span>
                  <span className={`font-bold ${valueColor}`}>{value}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Health indicators */}
          <div className="bg-surface p-6 rounded-[28px] border border-outline/20 shadow-sm space-y-5">
            <div>
              <h3 className="text-lg font-bold text-on-surface tracking-tight">System Health Log</h3>
              <p className="text-sm text-outline">Current active tickets vs room reservations.</p>
            </div>
            <div className="space-y-3">
              {[
                { icon: 'check_circle', color: 'bg-primary-container text-primary', title: 'Compliance Audit Rating', sub: 'Q3 Threshold: 95.0% Required' },
                { icon: 'build', color: 'bg-tertiary/10 text-tertiary', title: 'Kanban Repair Cycle', sub: 'Avg resolution age: 4.2 hours' },
              ].map(({ icon, color, title, sub }) => (
                <div key={title} className="flex items-center gap-3 p-4 rounded-[16px] bg-background border border-outline/10">
                  <div className={`${color} p-2.5 rounded-xl shrink-0`}>
                    <span className="material-symbols-outlined text-[20px]">{icon}</span>
                  </div>
                  <div>
                    <p className="text-sm font-bold text-on-surface">{title}</p>
                    <p className="text-xs text-outline mt-0.5">{sub}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Print Preview Modal */}
      {showPrintPreview && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-md flex items-center justify-center p-4 z-50">
          <div className="bg-surface rounded-[28px] w-full max-w-3xl overflow-hidden shadow-2xl border border-outline/20">
            <div className="p-5 border-b border-outline/10 flex items-center justify-between bg-surface-container">
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-on-surface">print</span>
                <span className="text-base font-bold text-on-surface">Executive Report Preview</span>
              </div>
              <button onClick={() => setShowPrintPreview(false)} className="text-outline hover:text-on-surface p-1.5 rounded-xl hover:bg-surface transition-colors">
                <span className="material-symbols-outlined">close</span>
              </button>
            </div>
            <div className="p-8 space-y-6 max-h-[500px] overflow-y-auto text-sm text-on-surface bg-surface" id="printable-area">
              <div className="flex items-start justify-between border-b-2 border-outline/20 pb-6">
                <div>
                  <h2 className="text-xl font-extrabold text-on-surface uppercase tracking-tight">AssetFlow Audit Ledger Summary</h2>
                  <p className="text-xs text-outline mt-1 uppercase tracking-wider">DOCUMENT ID: AF-REP-Q3-2026 • STATUS: STABLE</p>
                  <p className="text-outline mt-2">Prepared by Suresh Kumar (Lead Systems Administrator)</p>
                </div>
                <div className="text-right">
                  <p className="font-extrabold text-on-surface text-lg">AssetFlow ERM</p>
                  <p className="text-outline text-xs mt-0.5">Corporate HQ, Bengaluru</p>
                  <p className="text-outline mt-2">Date: July 11, 2026</p>
                </div>
              </div>
              <div className="grid grid-cols-3 gap-4">
                {[
                  { label: 'Cataloged Devices', value: `${totalCount} items` },
                  { label: 'Dispatched Custody', value: `${allocatedCount} items` },
                  { label: 'Compliance Rate', value: `${totalCount > 0 ? Math.round((verifiedCount / totalCount) * 100) : 0}%` },
                ].map(({ label, value }) => (
                  <div key={label} className="p-4 bg-surface-container rounded-2xl border border-outline/10">
                    <p className="text-xs uppercase font-bold text-outline tracking-wider">{label}</p>
                    <p className="text-2xl font-bold text-on-surface mt-1">{value}</p>
                  </div>
                ))}
              </div>
              <div className="space-y-3">
                <h3 className="font-bold text-on-surface text-base">Physical Itemized Status</h3>
                <table className="w-full text-left">
                  <thead>
                    <tr className="border-b border-outline/20 text-outline font-bold text-xs uppercase tracking-wider">
                      <th className="py-2">Asset Tag</th><th className="py-2">Description</th>
                      <th className="py-2">Category</th><th className="py-2">Hub</th>
                      <th className="py-2 text-right">Audit Status</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-outline/10">
                    {assets.map((asset) => (
                      <tr key={asset.tag} className="text-sm">
                        <td className="py-2 font-bold text-on-surface">{asset.tag}</td>
                        <td className="py-2 text-on-surface">{asset.name}</td>
                        <td className="py-2 text-outline">{asset.category}</td>
                        <td className="py-2 text-outline">{asset.location}</td>
                        <td className="py-2 text-right font-bold text-primary">{asset.verificationStatus || 'Pending'}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
            <div className="p-4 bg-surface-container border-t border-outline/10 flex justify-end gap-3">
              <button onClick={() => window.print()}
                className="h-10 px-5 bg-primary hover:bg-primary/90 text-on-primary font-bold rounded-[14px] text-sm flex items-center gap-2 transition-colors shadow-sm">
                <span className="material-symbols-outlined text-[18px]">print</span> Confirm & Print
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
