import React, { useState } from 'react';
import { Booking } from '../types';

interface ResourceBookingProps {
  bookings: Booking[];
  onAddBooking: (booking: Booking) => void;
  onAddLog: (title: string, desc: string, type: 'all' | 'alerts' | 'approvals' | 'bookings', icon: string, isAlert?: boolean) => void;
}

export default function ResourceBooking({ bookings, onAddBooking, onAddLog }: ResourceBookingProps) {
  const resourcesList = [
    { id: 'res-1', name: 'Conference Room B2', type: 'Room', capacity: '12 Person', location: 'HQ - Floor 2' },
    { id: 'res-2', name: 'Test Lab Delta', type: 'Lab Space', capacity: '8 Person', location: 'HQ - IT Dept' },
    { id: 'res-3', name: 'Epson Pro Projector', type: 'Hardware', capacity: 'Portable', location: 'Storage Room 4' },
    { id: 'res-4', name: 'Delivery Van 1', type: 'Vehicle', capacity: 'Logistics', location: 'Loading Bay 3' }
  ];

  const [selectedResource, setSelectedResource] = useState(resourcesList[0].name);
  const [showBookingForm, setShowBookingForm] = useState(false);
  const [teamName, setTeamName] = useState('');
  const [bookingDate, setBookingDate] = useState(new Date().toLocaleDateString('en-US', { weekday: 'short', day: 'numeric', month: 'short' }));
  const [startHour, setStartHour] = useState('9.00');
  const [duration, setDuration] = useState('1');
  const [hasConflict, setHasConflict] = useState(false);
  const [conflictReason, setConflictReason] = useState('');

  const currentResourceBookings = bookings.filter(b => b.resource === selectedResource);
  const hours = Array.from({ length: 11 }, (_, i) => i + 8);

  const formatHourLabel = (h: number) => {
    const isPm = h >= 12;
    const displayH = h > 12 ? h - 12 : h;
    return `${displayH}:00 ${isPm ? 'PM' : 'AM'}`;
  };

  const handleBookingSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!teamName) return;
    const start = parseFloat(startHour);
    const end = start + parseFloat(duration);
    const overlap = currentResourceBookings.find(b => start < b.endHour && end > b.startHour);
    if (overlap) {
      setHasConflict(true);
      setConflictReason(`Overlap with "${overlap.title}" (${overlap.timeRange}). Select an alternate time.`);
      return;
    }
    const formatTime = (h: number) => {
      const isPm = h >= 12;
      const displayH = h > 12 ? Math.floor(h - 12) : Math.floor(h);
      const minutes = h % 1 === 0 ? '00' : '30';
      return `${displayH}:${minutes} ${isPm ? 'PM' : 'AM'}`;
    };
    const newBook: Booking = { id: `book-${Date.now()}`, resource: selectedResource, title: `Booked — ${teamName}`, timeRange: `${formatTime(start)} - ${formatTime(end)}`, startHour: start, endHour: end, date: bookingDate };
    onAddBooking(newBook);
    onAddLog(`Resource Confirmed: ${selectedResource}`, `Reserved by ${teamName} for ${newBook.timeRange} (${bookingDate}).`, 'bookings', 'event_available');
    setTeamName(''); setShowBookingForm(false); setHasConflict(false); setConflictReason('');
  };

  const inputCls = "w-full p-3.5 bg-background border border-outline/30 focus:border-primary focus:ring-1 focus:ring-primary/20 rounded-2xl outline-none text-on-surface text-sm transition-colors";

  return (
    <div id="booking-tab" className="p-6 md:p-8 space-y-8 bg-background h-full">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-outline/30 pb-6">
        <div>
          <div className="flex items-center gap-2 text-xs font-bold text-primary uppercase tracking-widest">
            <span className="material-symbols-outlined text-[16px]">event</span> Shared Resource Scheduler
          </div>
          <h1 className="text-3xl font-bold text-on-surface mt-1 tracking-tight">Resource Booking & Timelines</h1>
          <p className="text-outline text-sm mt-1">Reserve collaborative meeting zones, machinery testing labs, and transport vehicles.</p>
        </div>
        <button id="btn-trigger-booking" onClick={() => setShowBookingForm(true)}
          className="bg-primary hover:bg-primary/90 text-on-primary px-5 py-2.5 rounded-[14px] text-sm font-bold flex items-center gap-2 transition-colors shadow-sm shrink-0 self-start sm:self-center">
          <span className="material-symbols-outlined text-[20px]">add</span> New Time Reservation
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        {/* Resource Selector List */}
        <div className="space-y-4">
          <p className="text-xs uppercase font-bold text-outline tracking-wider">Available Resources</p>
          <div className="grid grid-cols-1 gap-3">
            {resourcesList.map((res) => {
              const isSelected = selectedResource === res.name;
              const activeCount = bookings.filter(b => b.resource === res.name && !b.isConflict).length;
              const hasWarnings = bookings.filter(b => b.resource === res.name && b.isConflict).length > 0;
              return (
                <button key={res.id} id={`btn-select-resource-${res.id}`}
                  onClick={() => { setSelectedResource(res.name); setHasConflict(false); }}
                  className={`w-full text-left p-4 rounded-[18px] border transition-colors ${
                    isSelected ? 'bg-primary-container border-primary/30 shadow-sm' : 'bg-surface border-outline/20 hover:border-primary/30'
                  }`}>
                  <div className="flex items-center justify-between">
                    <span className={`text-xs font-bold px-2 py-0.5 rounded-lg ${isSelected ? 'bg-primary/10 text-primary' : 'bg-surface-container text-on-surface'}`}>
                      {res.type}
                    </span>
                    <span className="text-xs text-outline font-medium">{res.capacity}</span>
                  </div>
                  <h3 className={`font-bold text-sm mt-2 ${isSelected ? 'text-primary' : 'text-on-surface'}`}>{res.name}</h3>
                  <div className="flex items-center gap-1.5 text-xs text-outline mt-1">
                    <span className="material-symbols-outlined text-[14px]">location_on</span>
                    <span>{res.location}</span>
                  </div>
                  <div className="flex items-center justify-between mt-3.5 pt-2.5 border-t border-outline/10">
                    <span className="text-xs text-outline font-medium">{activeCount} reservations</span>
                    {hasWarnings && (
                      <span className="flex items-center gap-0.5 text-xs text-error font-bold bg-error/10 px-1.5 py-0.5 rounded-md">
                        <span className="material-symbols-outlined text-[12px]">warning</span> Conflict
                      </span>
                    )}
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Timeline */}
        <div className="lg:col-span-3 space-y-6">
          <div className="bg-surface rounded-[28px] border border-outline/20 shadow-sm overflow-hidden flex flex-col">
            <div className="p-6 border-b border-outline/10 flex items-center justify-between bg-surface-container/50">
              <div>
                <span className="text-xs text-primary font-bold uppercase tracking-wider">Timeline Matrix</span>
                <h2 className="text-lg font-bold text-on-surface tracking-tight mt-0.5">Schedule for: {selectedResource}</h2>
              </div>
              <span className="bg-primary text-on-primary text-xs font-bold px-3 py-1.5 rounded-full">{bookingDate}</span>
            </div>

            <div className="p-6 overflow-y-auto space-y-3">
              <p className="text-xs uppercase font-bold text-outline tracking-wider">Hourly Coverage (08:00 - 18:00)</p>
              <div className="relative border border-outline/10 rounded-[20px] overflow-hidden divide-y divide-outline/10">
                {hours.map((hour) => {
                  const coveringBookings = currentResourceBookings.filter(b => hour >= b.startHour && hour < b.endHour);
                  return (
                    <div key={hour} className="flex min-h-[50px] items-stretch">
                      <div className="w-24 px-4 bg-surface-container/40 flex items-center shrink-0 border-r border-outline/10 text-xs font-bold text-outline">
                        {formatHourLabel(hour)}
                      </div>
                      <div className="flex-1 p-2 flex flex-col gap-1.5 justify-center">
                        {coveringBookings.length === 0 ? (
                          <span className="text-xs text-outline/50 italic pl-2">Available for booking</span>
                        ) : (
                          coveringBookings.map((b) => (
                            <div key={b.id} className={`px-3 py-1.5 rounded-xl border text-sm font-bold flex items-center justify-between gap-4 ${
                              b.isConflict ? 'bg-error/10 text-error border-error/20' : 'bg-primary-container text-primary border-primary/20'
                            }`}>
                              <div className="flex items-center gap-1.5">
                                <span className="material-symbols-outlined text-[16px]">{b.isConflict ? 'warning' : 'check_circle'}</span>
                                <span>{b.title}</span>
                              </div>
                              <span className="text-xs font-bold bg-white/60 px-2 py-0.5 rounded-lg border border-current/10 whitespace-nowrap">{b.timeRange}</span>
                            </div>
                          ))
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {bookings.some(b => b.resource === selectedResource && b.isConflict) && (
              <div className="m-6 mt-0 p-4 bg-error/10 border border-error/20 rounded-2xl flex items-start gap-3">
                <span className="material-symbols-outlined text-error shrink-0 mt-0.5">warning</span>
                <div>
                  <h4 className="text-sm font-bold text-error">Operational Conflict Flagged</h4>
                  <p className="text-sm text-error/80 mt-0.5">An operator submitted a booking that overlaps with an existing reservation.</p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Booking Modal */}
      {showBookingForm && (
        <div className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center p-4 z-50">
          <div className="bg-surface rounded-[28px] border border-outline/20 w-full max-w-md overflow-hidden shadow-2xl">
            <div className="p-6 border-b border-outline/10 flex items-center justify-between bg-surface-container">
              <div className="flex items-center gap-2.5">
                <div className="bg-primary text-on-primary p-2 rounded-xl"><span className="material-symbols-outlined text-[20px]">event</span></div>
                <h2 className="text-base font-bold text-on-surface">New Time Reservation</h2>
              </div>
              <button onClick={() => { setShowBookingForm(false); setHasConflict(false); }} className="text-outline hover:text-on-surface p-1.5 rounded-xl hover:bg-surface transition-colors">
                <span className="material-symbols-outlined">close</span>
              </button>
            </div>
            <form onSubmit={handleBookingSubmit} className="p-6 space-y-4">
              {hasConflict && (
                <div className="p-4 bg-error/10 border border-error/20 text-error rounded-2xl flex items-start gap-2.5">
                  <span className="material-symbols-outlined text-[20px] shrink-0 mt-0.5">warning</span>
                  <div>
                    <p className="font-bold text-sm">Schedule Overlap Conflict</p>
                    <p className="text-sm mt-0.5 leading-relaxed opacity-80">{conflictReason}</p>
                  </div>
                </div>
              )}
              <div><label className="block text-sm font-bold text-on-surface mb-1.5">Target Shared Resource</label>
                <select value={selectedResource} onChange={(e) => { setSelectedResource(e.target.value); setHasConflict(false); }} className={inputCls}>
                  {resourcesList.map(r => <option key={r.id} value={r.name}>{r.name} ({r.type})</option>)}
                </select></div>
              <div><label className="block text-sm font-bold text-on-surface mb-1.5">Requesting Team / Operator</label>
                <input type="text" required placeholder="e.g., Engineering Team A" value={teamName} onChange={(e) => setTeamName(e.target.value)} className={inputCls} /></div>
              <div className="grid grid-cols-2 gap-3">
                <div><label className="block text-sm font-bold text-on-surface mb-1.5">Reservation Date</label>
                  <input type="text" required value={bookingDate} onChange={(e) => setBookingDate(e.target.value)} placeholder="e.g., Tue, 7 Jul" className={inputCls} /></div>
                <div><label className="block text-sm font-bold text-on-surface mb-1.5">Start Hour</label>
                  <select value={startHour} onChange={(e) => { setStartHour(e.target.value); setHasConflict(false); }} className={inputCls}>
                    <option value="9.00">9:00 AM</option><option value="9.50">9:30 AM</option>
                    <option value="10.00">10:00 AM</option><option value="11.00">11:00 AM</option>
                    <option value="12.00">12:00 PM</option><option value="13.00">1:00 PM</option>
                    <option value="14.00">2:00 PM</option><option value="15.00">3:00 PM</option>
                    <option value="16.00">4:00 PM</option>
                  </select></div>
              </div>
              <div><label className="block text-sm font-bold text-on-surface mb-1.5">Duration Block</label>
                <select value={duration} onChange={(e) => { setDuration(e.target.value); setHasConflict(false); }} className={inputCls}>
                  <option value="1">1 Hour</option><option value="2">2 Hours</option>
                  <option value="3">3 Hours</option><option value="4">4 Hours</option>
                </select></div>
              <button type="submit" className="w-full h-12 bg-primary hover:bg-primary/90 text-on-primary font-bold rounded-[16px] flex items-center justify-center gap-2 transition-colors shadow-sm">
                <span className="material-symbols-outlined text-[20px]">book_online</span> Confirm Reservation
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
