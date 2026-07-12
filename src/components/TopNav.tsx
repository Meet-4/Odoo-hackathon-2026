import React, { useState, useRef, useEffect } from 'react';
import { UserProfile, Notification } from '../types';

interface TopNavProps {
  user: UserProfile;
  notifications: Notification[];
  toggleSidebar: () => void;
  onMarkRead: (id: string) => void;
  onMarkAllRead: () => void;
}

export default function TopNav({ user, notifications, toggleSidebar, onMarkRead, onMarkAllRead }: TopNavProps) {
  const [showDropdown, setShowDropdown] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const unreadCount = notifications.filter(n => !n.isRead).length;

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setShowDropdown(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <header className="h-16 bg-surface border-b border-outline/30 flex items-center justify-between px-4 lg:px-6 shrink-0 z-10 sticky top-0">
      <div className="flex items-center gap-4 flex-1">
        <button 
          onClick={toggleSidebar}
          className="p-2 rounded-full hover:bg-surface-container text-on-surface transition-colors focus:outline-none focus:ring-2 focus:ring-primary"
          title="Toggle Sidebar"
        >
          <span className="material-symbols-outlined">menu</span>
        </button>
        
        <div className="hidden md:flex items-center bg-surface-container rounded-full px-4 py-2 w-full max-w-md focus-within:ring-2 focus-within:ring-primary/50 transition-shadow">
          <span className="material-symbols-outlined text-outline mr-2 text-[20px]">search</span>
          <input 
            type="text" 
            placeholder="Search assets, users, or tickets..." 
            className="bg-transparent border-none outline-none text-on-surface text-sm w-full font-sans placeholder-outline"
          />
        </div>
      </div>
      
      <div className="flex items-center gap-4">
        {/* Notifications Dropdown */}
        <div className="relative" ref={dropdownRef}>
          <button 
            onClick={() => setShowDropdown(!showDropdown)}
            className="p-2 rounded-full hover:bg-surface-container text-on-surface relative transition-colors focus:outline-none focus:ring-2 focus:ring-primary"
          >
            <span className="material-symbols-outlined">notifications</span>
            {unreadCount > 0 && (
              <span className="absolute top-1 right-1 w-2.5 h-2.5 bg-error rounded-full border-2 border-surface"></span>
            )}
          </button>
          
          {showDropdown && (
            <div className="absolute right-0 mt-2 w-80 sm:w-96 bg-surface border border-outline/20 rounded-2xl shadow-2xl overflow-hidden z-50 flex flex-col max-h-[80vh]">
              <div className="p-4 border-b border-outline/10 flex items-center justify-between bg-surface-container/50 shrink-0">
                <h3 className="font-bold text-on-surface">Notifications</h3>
                {unreadCount > 0 && (
                  <button onClick={() => { onMarkAllRead(); setShowDropdown(false); }} className="text-xs text-primary hover:underline font-bold">
                    Mark all read
                  </button>
                )}
              </div>
              <div className="overflow-y-auto flex-1">
                {notifications.length === 0 ? (
                  <div className="p-6 text-center text-outline">
                    <span className="material-symbols-outlined text-3xl mb-2">notifications_off</span>
                    <p className="text-sm">No notifications yet.</p>
                  </div>
                ) : (
                  <div className="divide-y divide-outline/10">
                    {notifications.map(notif => (
                      <div 
                        key={notif.id} 
                        className={`p-4 transition-colors flex gap-3 ${!notif.isRead ? 'bg-primary/5 hover:bg-primary/10' : 'hover:bg-surface-container'}`}
                        onClick={() => { if (!notif.isRead) onMarkRead(notif.id); }}
                      >
                        <div className={`mt-0.5 shrink-0 ${!notif.isRead ? 'text-primary' : 'text-outline'}`}>
                          <span className="material-symbols-outlined text-[20px]">{notif.icon}</span>
                        </div>
                        <div>
                          <p className={`text-sm ${!notif.isRead ? 'font-bold text-on-surface' : 'font-medium text-on-surface/80'}`}>{notif.title}</p>
                          <p className={`text-xs mt-0.5 ${!notif.isRead ? 'text-on-surface/90' : 'text-outline'}`}>{notif.message}</p>
                          <p className="text-[10px] text-outline mt-1.5">{notif.timestamp}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
        
        <div className="h-8 w-[1px] bg-outline/30 mx-2 hidden sm:block"></div>
        
        <div className="flex items-center gap-3">
          <div className="hidden sm:block text-right">
            <p className="text-sm font-semibold text-on-surface">{user.name}</p>
            <p className="text-[11px] text-outline font-medium uppercase tracking-wider">{user.role}</p>
          </div>
          <img 
            src={user.avatar} 
            alt={user.name} 
            className="w-10 h-10 rounded-full border border-outline/20 object-cover"
          />
        </div>
      </div>
    </header>
  );
}
