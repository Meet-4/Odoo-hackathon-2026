import React from 'react';
import { UserProfile } from '../types';

interface SidebarProps {
  user: UserProfile;
  currentTab: string;
  setCurrentTab: (tab: string) => void;
  onLogout: () => void;
  isOpen: boolean;
  pendingApprovalCount?: number;
}

const ALL_MODULES = [
  { id: 'dashboard', name: 'Dashboard', icon: 'dashboard', desc: 'Operational snapshot' },
  { id: 'organization', name: 'Organization Setup', icon: 'domain', desc: 'Depts, categories, directory' },
  { id: 'assets', name: 'Assets & Allocation', icon: 'inventory_2', desc: 'Inventory, assign & transfer' },
  { id: 'approvals', name: 'Approval Center', icon: 'task_alt', desc: 'Transfer & maintenance queue' },
  { id: 'booking', name: 'Resource Booking', icon: 'event', desc: 'Rooms & shared equipment' },
  { id: 'maintenance', name: 'Maintenance Hub', icon: 'build', desc: 'Kanban repair tickets' },
  { id: 'audit', name: 'Audit & Compliance', icon: 'verified_user', desc: 'Discrepancy validation' },
  { id: 'reports', name: 'Reports & Analytics', icon: 'bar_chart', desc: 'Utilization & exports' },
];

function getVisibleModules(role: string) {
  switch (role) {
    case 'Admin':
      // Admin sees all except Approval Center (they set up, don't approve day-to-day ops)
      return ['dashboard', 'organization', 'assets', 'booking', 'maintenance', 'audit', 'reports'];
    case 'Asset Manager':
      // Asset Manager: full operational access + Approval Center, no Org Setup
      return ['dashboard', 'assets', 'approvals', 'booking', 'maintenance', 'audit', 'reports'];
    case 'Department Head':
      // Dept Head: own dept scope. Has approval center for dept-scoped requests.
      return ['dashboard', 'assets', 'approvals', 'booking', 'maintenance', 'reports'];
    case 'Employee':
      // Employee: self-scoped only
      return ['dashboard', 'assets', 'booking', 'maintenance'];
    default:
      return ['dashboard', 'assets', 'booking', 'maintenance'];
  }
}

export default function Sidebar({ user, currentTab, setCurrentTab, onLogout, isOpen, pendingApprovalCount = 0 }: SidebarProps) {
  const visibleIds = getVisibleModules(user.role);
  const menuItems = ALL_MODULES.filter(m => visibleIds.includes(m.id));

  return (
    <aside
      id="app-sidebar"
      className={`${isOpen ? 'w-[260px]' : 'w-[72px]'} bg-surface-container text-on-surface flex flex-col border-r border-outline/30 shrink-0 h-full transition-all duration-300 z-20`}
    >
      {/* Brand Header */}
      <div className={`p-4 h-16 border-b border-outline/30 flex items-center ${isOpen ? 'justify-between' : 'justify-center'} shrink-0`}>
        <div className="flex items-center gap-3 overflow-hidden">
          <div className="bg-primary text-on-primary p-1.5 rounded-lg flex items-center justify-center shrink-0">
            <span className="material-symbols-outlined text-[20px]">trending_up</span>
          </div>
          {isOpen && (
            <div className="min-w-0">
              <span className="font-bold text-base tracking-tight text-primary truncate block">
                AssetFlow
              </span>
            </div>
          )}
        </div>
      </div>

      {/* Role Badge */}
      {isOpen && (
        <div className="px-4 py-3 border-b border-outline/20 bg-surface-container-lowest">
          <p className="text-[10px] uppercase tracking-widest font-bold text-outline">Signed in as</p>
          <p className="text-sm font-bold text-on-surface truncate mt-0.5">{user.name}</p>
          <div className="flex items-center gap-1.5 mt-1">
            <span className="text-[10px] bg-primary/10 text-primary font-bold px-2 py-0.5 rounded-md">{user.role}</span>
            {user.department && <span className="text-[10px] text-outline truncate">{user.department}</span>}
          </div>
        </div>
      )}

      {/* Navigation Links */}
      <nav className="flex-1 py-4 flex flex-col gap-1 overflow-y-auto overflow-x-hidden px-2">
        {isOpen && (
          <div className="px-3 mb-2 text-[10px] uppercase font-bold text-outline tracking-widest">
            Modules
          </div>
        )}

        {menuItems.map((item) => {
          const isActive = currentTab === item.id;
          const showBadge = item.id === 'approvals' && pendingApprovalCount > 0;
          return (
            <button
              key={item.id}
              id={`sidebar-tab-${item.id}`}
              onClick={() => setCurrentTab(item.id)}
              title={!isOpen ? item.name : undefined}
              className={`w-full flex items-center gap-3 p-3 rounded-lg text-left transition-colors group relative ${
                isActive
                  ? 'bg-primary-container text-primary font-medium'
                  : 'text-on-surface hover:bg-surface hover:text-primary'
              }`}
            >
              <span className={`material-symbols-outlined text-[22px] shrink-0 transition-transform ${isActive ? 'text-primary' : 'group-hover:scale-110'}`}>
                {item.icon}
              </span>

              {isOpen && (
                <div className="flex-1 min-w-0">
                  <p className="text-sm truncate">{item.name}</p>
                </div>
              )}

              {showBadge && (
                <span className={`bg-error text-white text-[10px] font-bold rounded-full flex items-center justify-center shrink-0 ${isOpen ? 'w-5 h-5' : 'absolute top-1.5 right-1.5 w-4 h-4'}`}>
                  {pendingApprovalCount > 9 ? '9+' : pendingApprovalCount}
                </span>
              )}
            </button>
          );
        })}
      </nav>

      {/* Sidebar Footer */}
      <div className="p-3 border-t border-outline/30">
        <button
          id="btn-logout"
          onClick={onLogout}
          title={!isOpen ? 'Sign Out' : undefined}
          className={`w-full flex items-center ${isOpen ? 'gap-3 px-3' : 'justify-center'} py-3 text-on-surface hover:text-error hover:bg-error/10 rounded-lg transition-colors group`}
        >
          <span className="material-symbols-outlined text-[22px] shrink-0 group-hover:text-error">
            logout
          </span>
          {isOpen && (
            <span className="text-sm font-medium">Sign Out</span>
          )}
        </button>
      </div>
    </aside>
  );
}
