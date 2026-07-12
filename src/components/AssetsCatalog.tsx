import React, { useState, useEffect } from 'react';
import { Asset, AssetStatus, Department, UserProfile } from '../types';

interface AssetsCatalogProps {
  user: UserProfile;
  assets: Asset[];
  departments: Department[];
  onAddAsset: (asset: Omit<Asset, 'verificationStatus' | 'allocationHistory' | 'maintenanceHistory'>) => void;
  onUpdateAssetStatus: (tag: string, status: AssetStatus, location?: string, expectedLocation?: string, assignee?: string, dept?: string) => void;
  onDeleteAsset: (tag: string) => void;
  onRequestTransfer: (assetTag: string, assetName: string, type: 'Transfer' | 'Return', targetHolder?: string, targetDept?: string, reason?: string) => void;
  onAddLog: (title: string, desc: string, type: 'all' | 'alerts' | 'approvals' | 'bookings', icon: string, isAlert?: boolean) => void;
  quickAddTriggered: boolean;
  resetQuickAddTrigger: () => void;
}

export default function AssetsCatalog({
  user, assets, departments, onAddAsset, onUpdateAssetStatus, onDeleteAsset, onRequestTransfer, onAddLog, quickAddTriggered, resetQuickAddTrigger
}: AssetsCatalogProps) {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [selectedStatus, setSelectedStatus] = useState<string>('All');
  const [activeActionAsset, setActiveActionAsset] = useState<Asset | null>(null);
  const [actionType, setActionType] = useState<'allocate' | 'transferReq' | 'returnReq' | null>(null);
  
  // Allocate State
  const [assigneeName, setAssigneeName] = useState('');
  const [assigneeDept, setAssigneeDept] = useState('');
  const [expectedDesk, setExpectedDesk] = useState('');
  
  // Request State
  const [targetHolder, setTargetHolder] = useState('');
  const [targetDept, setTargetDept] = useState('');
  const [requestReason, setRequestReason] = useState('');

  // Register State
  const [showAddForm, setShowAddForm] = useState(false);
  const [newName, setNewName] = useState('');
  const [newTag, setNewTag] = useState('');
  const [newCategory, setNewCategory] = useState('Electronics');
  const [newSerial, setNewSerial] = useState('');
  const [newLocation, setNewLocation] = useState('Bengaluru - HQ');
  const [newImage, setNewImage] = useState<string>('');

  useEffect(() => {
    if (quickAddTriggered) { setShowAddForm(true); resetQuickAddTrigger(); }
  }, [quickAddTriggered, resetQuickAddTrigger]);

  const handleAddSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newName || !newTag || !newSerial) return;
    if (assets.some(a => a.tag.toUpperCase() === newTag.toUpperCase())) { alert('An asset with this Tag already exists.'); return; }
    
    onAddAsset({ 
      tag: newTag.toUpperCase(), 
      name: newName, 
      category: newCategory, 
      status: 'Available', 
      location: newLocation, 
      serial: `SN: ${newSerial.toUpperCase()}`, 
      expectedLocation: 'Main Depot',
      image: newImage || '' 
    });
    setNewName(''); setNewTag(''); setNewSerial(''); setNewImage(''); setShowAddForm(false);
  };

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setNewImage(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleActionSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!activeActionAsset) return;
    
    if (actionType === 'allocate') {
      onUpdateAssetStatus(activeActionAsset.tag, 'Allocated', activeActionAsset.location, expectedDesk || activeActionAsset.expectedLocation, assigneeName, assigneeDept);
      onAddLog(`Allocated ${activeActionAsset.tag} to ${assigneeName}`, `Assigned workspace: ${expectedDesk || 'Main Depot'}.`, 'approvals', 'assignment_ind');
    } else if (actionType === 'transferReq') {
      onRequestTransfer(activeActionAsset.tag, activeActionAsset.name, 'Transfer', targetHolder, targetDept, requestReason);
    } else if (actionType === 'returnReq') {
      onRequestTransfer(activeActionAsset.tag, activeActionAsset.name, 'Return', undefined, undefined, requestReason);
    }
    setActiveActionAsset(null); setActionType(null); 
    setAssigneeName(''); setAssigneeDept(''); setExpectedDesk('');
    setTargetHolder(''); setTargetDept(''); setRequestReason('');
  };

  // Scope assets by role
  const visibleAssets = (() => {
    if (user.role === 'Employee') return assets.filter(a => a.allocatedTo === user.name);
    if (user.role === 'Department Head') return assets.filter(a => a.allocatedToDept === user.department || a.status === 'Available');
    return assets; // Admin, Asset Manager
  })();

  const filteredAssets = visibleAssets.filter(asset => {
    const matchesSearch = asset.name.toLowerCase().includes(searchTerm.toLowerCase()) || asset.tag.toLowerCase().includes(searchTerm.toLowerCase()) || asset.serial.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || asset.category === selectedCategory;
    const matchesStatus = selectedStatus === 'All' || asset.status === selectedStatus;
    return matchesSearch && matchesCategory && matchesStatus;
  });

  const statusBadge: Record<AssetStatus, string> = {
    Available: 'bg-primary-container text-primary border-primary/20',
    Allocated: 'bg-secondary-container text-secondary border-secondary/20',
    Maintenance: 'bg-tertiary/10 text-tertiary border-tertiary/20',
    Damaged: 'bg-error/10 text-error border-error/20',
    Lost: 'bg-outline/20 text-on-surface border-outline/30'
  };

  const modalInputCls = "w-full p-3.5 bg-background border border-outline/30 focus:border-primary focus:ring-1 focus:ring-primary/20 rounded-2xl outline-none text-on-surface text-sm transition-colors";
  const labelCls = "block text-sm font-bold text-on-surface mb-1.5";

  return (
    <div id="assets-tab" className="p-6 md:p-8 space-y-8 bg-background h-full overflow-y-auto">

      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-outline/30 pb-6">
        <div>
          <div className="flex items-center gap-2 text-xs font-bold text-primary uppercase tracking-widest">
            <span className="material-symbols-outlined text-[16px]">inventory_2</span>
            Physical Inventory Records
          </div>
          <h1 className="text-3xl font-bold text-on-surface mt-1 tracking-tight">Assets & Custodian Records</h1>
          <p className="text-outline text-sm mt-1">Register, allocate, and dispatch company assets across multi-tenant hubs.</p>
        </div>
        {user.role === 'Asset Manager' && (
          <button id="btn-register-asset" onClick={() => setShowAddForm(true)}
            className="bg-primary hover:bg-primary/90 text-on-primary px-5 py-2.5 rounded-[14px] text-sm font-bold flex items-center gap-2 transition-colors shadow-sm shrink-0 self-start sm:self-center">
            <span className="material-symbols-outlined text-[20px]">add</span>
            <span>Register New Hardware</span>
          </button>
        )}
      </div>

      {/* Control Strip */}
      <div className="bg-surface p-4 rounded-[20px] border border-outline/20 shadow-sm flex flex-col md:flex-row items-center gap-4 justify-between">
        <div className="relative w-full md:max-w-md">
          <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-outline text-[20px]">search</span>
          <input type="text" placeholder="Search tags, naming, serial keys..." value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-12 pr-4 py-2.5 text-sm bg-background border border-outline/20 focus:border-primary focus:ring-1 focus:ring-primary/10 rounded-[14px] outline-none text-on-surface placeholder-outline/70" />
        </div>
        <div className="flex flex-wrap items-center gap-3 w-full md:w-auto">
          <span className="text-xs font-bold text-outline uppercase tracking-wider">Filter:</span>
          <select value={selectedCategory} onChange={(e) => setSelectedCategory(e.target.value)}
            className="bg-background border border-outline/20 text-on-surface text-sm py-2 px-3 rounded-[12px] focus:outline-none focus:border-primary">
            <option value="All">All Categories</option>
            <option value="Electronics">Electronics</option>
            <option value="Furniture">Furniture</option>
            <option value="Machinery">Machinery</option>
          </select>
          <select value={selectedStatus} onChange={(e) => setSelectedStatus(e.target.value)}
            className="bg-background border border-outline/20 text-on-surface text-sm py-2 px-3 rounded-[12px] focus:outline-none focus:border-primary">
            <option value="All">All Statuses</option>
            <option value="Available">Available</option>
            <option value="Allocated">Allocated</option>
            <option value="Maintenance">Maintenance</option>
            <option value="Damaged">Damaged</option>
          </select>
          <span className="text-xs text-outline font-medium pl-2 border-l border-outline/30 hidden lg:inline">
            {filteredAssets.length} items
          </span>
        </div>
      </div>

      {/* Asset Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredAssets.length === 0 ? (
          <div className="col-span-full bg-surface rounded-[28px] p-16 text-center border border-outline/20">
            <span className="material-symbols-outlined text-6xl text-outline/40 mb-3 block">inventory_2</span>
            <p className="text-sm font-bold text-on-surface">No assets found matching current criteria.</p>
            <p className="text-sm text-outline mt-1">Clear filters or register a new one to populate.</p>
          </div>
        ) : (
          filteredAssets.map((asset) => (
            <div key={asset.tag} className="bg-surface rounded-[24px] border border-outline/20 shadow-sm overflow-hidden hover:shadow-md transition-shadow flex flex-col group">
              <div className="relative h-44 bg-surface-container overflow-hidden shrink-0 flex items-center justify-center">
                {asset.image ? (
                  <img src={asset.image} alt={asset.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                ) : (
                  <span className="material-symbols-outlined text-[64px] text-outline/20 group-hover:scale-110 transition-transform duration-300">image</span>
                )}
                <div className="absolute top-4 left-4 flex gap-2">
                  <span className={`text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-md border backdrop-blur-md ${statusBadge[asset.status]}`}>
                    {asset.status}
                  </span>
                  {asset.verificationStatus === 'Missing' && (
                    <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-md border border-error/50 bg-error/20 text-error backdrop-blur-md shadow-sm flex items-center gap-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-error animate-pulse"></span> Missing Audit
                    </span>
                  )}
                </div>
                {user.role === 'Asset Manager' && (
                  <button onClick={() => onDeleteAsset(asset.tag)} className="absolute top-4 right-4 bg-surface/80 hover:bg-error text-outline hover:text-white backdrop-blur-md p-1.5 rounded-lg border border-outline/10 hover:border-error/20 transition-all opacity-0 group-hover:opacity-100">
                    <span className="material-symbols-outlined text-[18px] block">delete</span>
                  </button>
                )}
              </div>
              
              <div className="p-5 flex-1 flex flex-col justify-between border-b border-outline/10">
                <div>
                  <p className="text-[10px] text-outline uppercase font-bold tracking-widest">{asset.category}</p>
                  <h3 className="text-base font-bold text-on-surface mt-1 tracking-tight leading-tight">{asset.name}</h3>
                  <div className="flex items-center gap-2 mt-2.5">
                    <span className="material-symbols-outlined text-[14px] text-outline">qr_code_2</span>
                    <span className="text-xs font-mono text-outline">{asset.tag}</span>
                    <span className="text-outline/40">•</span>
                    <span className="text-[11px] text-outline truncate">{asset.serial}</span>
                  </div>
                </div>

                <div className="mt-5 space-y-2.5">
                  <div className="flex items-start gap-2.5">
                    <div className="w-5 flex justify-center shrink-0"><span className="material-symbols-outlined text-[16px] text-outline mt-0.5">place</span></div>
                    <div>
                      <p className="text-[11px] uppercase tracking-wider font-bold text-outline">Current Sub-Hub</p>
                      <p className="text-sm font-medium text-on-surface">{asset.location}</p>
                    </div>
                  </div>
                  
                  {asset.status === 'Allocated' && asset.allocatedTo ? (
                    <div className="flex items-start gap-2.5">
                      <div className="w-5 flex justify-center shrink-0"><span className="material-symbols-outlined text-[16px] text-secondary mt-0.5">person</span></div>
                      <div>
                        <p className="text-[11px] uppercase tracking-wider font-bold text-secondary">Active Custodian</p>
                        <p className="text-sm font-medium text-on-surface">{asset.allocatedTo} <span className="text-outline text-xs">({asset.allocatedToDept})</span></p>
                      </div>
                    </div>
                  ) : asset.status === 'Available' ? (
                    <div className="flex items-start gap-2.5">
                      <div className="w-5 flex justify-center shrink-0"><span className="material-symbols-outlined text-[16px] text-primary mt-0.5">check_circle</span></div>
                      <div>
                        <p className="text-[11px] uppercase tracking-wider font-bold text-primary">Availability</p>
                        <p className="text-sm font-medium text-on-surface">Ready for allocation</p>
                      </div>
                    </div>
                  ) : asset.status === 'Maintenance' ? (
                    <div className="flex items-start gap-2.5">
                      <div className="w-5 flex justify-center shrink-0"><span className="material-symbols-outlined text-[16px] text-tertiary mt-0.5">build</span></div>
                      <div>
                        <p className="text-[11px] uppercase tracking-wider font-bold text-tertiary">Work Order</p>
                        <p className="text-sm font-medium text-on-surface">At technical depot</p>
                      </div>
                    </div>
                  ) : (
                    <div className="flex items-start gap-2.5">
                      <div className="w-5 flex justify-center shrink-0"><span className="material-symbols-outlined text-[16px] text-error mt-0.5">warning</span></div>
                      <div>
                        <p className="text-[11px] uppercase tracking-wider font-bold text-error">Quarantine</p>
                        <p className="text-sm font-medium text-on-surface">Requires immediate audit</p>
                      </div>
                    </div>
                  )}
                </div>
              </div>
              
              <div className="p-4 bg-surface-container/20 flex gap-2 overflow-x-auto no-scrollbar">
                {user.role === 'Asset Manager' && asset.status === 'Available' && (
                  <button onClick={() => { setActiveActionAsset(asset); setActionType('allocate'); }}
                    className="flex-1 bg-surface border border-outline/20 hover:border-secondary hover:text-secondary text-on-surface py-2 px-3 rounded-xl text-xs font-bold transition-colors flex items-center justify-center gap-1.5 whitespace-nowrap">
                    <span className="material-symbols-outlined text-[16px]">send</span> Allocate
                  </button>
                )}
                
                {(user.role === 'Employee' || user.role === 'Department Head') && asset.status === 'Allocated' && asset.allocatedTo === user.name && (
                  <>
                    <button onClick={() => { setActiveActionAsset(asset); setActionType('transferReq'); }}
                      className="flex-1 bg-surface border border-outline/20 hover:border-primary hover:text-primary text-on-surface py-2 px-3 rounded-xl text-xs font-bold transition-colors flex items-center justify-center gap-1.5 whitespace-nowrap">
                      <span className="material-symbols-outlined text-[16px]">swap_horiz</span> Request Transfer
                    </button>
                    <button onClick={() => { setActiveActionAsset(asset); setActionType('returnReq'); }}
                      className="flex-1 bg-surface border border-outline/20 hover:border-error hover:text-error text-on-surface py-2 px-3 rounded-xl text-xs font-bold transition-colors flex items-center justify-center gap-1.5 whitespace-nowrap">
                      <span className="material-symbols-outlined text-[16px]">assignment_return</span> Request Return
                    </button>
                  </>
                )}
                
                <button className="flex-1 bg-background border border-outline/20 hover:border-outline/40 text-on-surface py-2 px-3 rounded-xl text-xs font-bold transition-colors flex items-center justify-center gap-1.5 whitespace-nowrap">
                  <span className="material-symbols-outlined text-[16px]">history</span> Ledger
                </button>
              </div>
            </div>
          ))
        )}
      </div>

      {/* Allocate/Transfer Modals */}
      {activeActionAsset && (
        <div className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center p-4 z-50">
          <div className="bg-surface rounded-[28px] border border-outline/20 w-full max-w-md shadow-2xl overflow-hidden">
            <div className="p-5 border-b border-outline/10 flex items-center justify-between bg-surface-container">
              <div className="flex items-center gap-2 text-primary font-bold">
                <span className="material-symbols-outlined">
                  {actionType === 'allocate' ? 'assignment_ind' : actionType === 'transferReq' ? 'swap_horiz' : 'assignment_return'}
                </span>
                <h2 className="text-base text-on-surface">
                  {actionType === 'allocate' ? 'Allocate Hardware' : actionType === 'transferReq' ? 'Request Transfer' : 'Request Return'}
                </h2>
              </div>
              <button onClick={() => { setActiveActionAsset(null); setActionType(null); }} className="text-outline hover:text-on-surface p-1.5 rounded-xl hover:bg-surface transition-colors">
                <span className="material-symbols-outlined">close</span>
              </button>
            </div>
            
            <form onSubmit={handleActionSubmit} className="p-6 space-y-4">
              <div className="p-3 bg-surface-container/50 border border-outline/10 rounded-xl mb-4">
                <p className="text-xs font-mono text-outline">{activeActionAsset.tag}</p>
                <p className="text-sm font-bold text-on-surface">{activeActionAsset.name}</p>
              </div>

              {actionType === 'allocate' && (
                <>
                  <div>
                    <label className={labelCls}>Custodian Name</label>
                    <input type="text" required value={assigneeName} onChange={e => setAssigneeName(e.target.value)} placeholder="e.g., Alex Employee" className={modalInputCls} />
                  </div>
                  <div>
                    <label className={labelCls}>Target Department</label>
                    <select required value={assigneeDept} onChange={e => setAssigneeDept(e.target.value)} className={modalInputCls}>
                      <option value="" disabled>Select Department</option>
                      {departments.map(d => <option key={d.id} value={d.name}>{d.name}</option>)}
                    </select>
                  </div>
                  <div>
                    <label className={labelCls}>Expected Location</label>
                    <input type="text" value={expectedDesk} onChange={e => setExpectedDesk(e.target.value)} placeholder="e.g., Desk E14" className={modalInputCls} />
                  </div>
                </>
              )}

              {actionType === 'transferReq' && (
                <>
                  <div>
                    <label className={labelCls}>Target Holder Name</label>
                    <input type="text" required value={targetHolder} onChange={e => setTargetHolder(e.target.value)} placeholder="e.g., Priya Shah" className={modalInputCls} />
                  </div>
                  <div>
                    <label className={labelCls}>Target Department</label>
                    <select required value={targetDept} onChange={e => setTargetDept(e.target.value)} className={modalInputCls}>
                      <option value="" disabled>Select Department</option>
                      {departments.map(d => <option key={d.id} value={d.name}>{d.name}</option>)}
                    </select>
                  </div>
                  <div>
                    <label className={labelCls}>Reason for Transfer</label>
                    <input type="text" required value={requestReason} onChange={e => setRequestReason(e.target.value)} placeholder="e.g., Reassigned to new project..." className={modalInputCls} />
                  </div>
                </>
              )}

              {actionType === 'returnReq' && (
                <div>
                  <label className={labelCls}>Reason for Return</label>
                  <input type="text" required value={requestReason} onChange={e => setRequestReason(e.target.value)} placeholder="e.g., No longer required, asset malfunction..." className={modalInputCls} />
                </div>
              )}
              
              <div className="pt-2">
                <button type="submit" className="w-full h-12 bg-primary hover:bg-primary/90 text-on-primary text-sm font-bold rounded-[16px] shadow-sm transition-colors flex items-center justify-center gap-2">
                  <span className="material-symbols-outlined text-[18px]">done</span>
                  {actionType === 'allocate' ? 'Confirm Allocation' : 'Submit Request'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Register Asset Modal (Asset Manager Only) */}
      {showAddForm && user.role === 'Asset Manager' && (
        <div className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center p-4 z-50">
          <div className="bg-surface rounded-[28px] border border-outline/20 w-full max-w-2xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh]">
            <div className="p-5 border-b border-outline/10 flex items-center justify-between bg-surface-container shrink-0">
              <div className="flex items-center gap-2 text-primary font-bold">
                <span className="material-symbols-outlined">add_circle</span>
                <h2 className="text-base text-on-surface">Register New Hardware</h2>
              </div>
              <button onClick={() => setShowAddForm(false)} className="text-outline hover:text-on-surface p-1.5 rounded-xl hover:bg-surface transition-colors">
                <span className="material-symbols-outlined">close</span>
              </button>
            </div>
            
            <form onSubmit={handleAddSubmit} className="p-6 overflow-y-auto space-y-5">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div className="md:col-span-2">
                  <label className={labelCls}>Hardware Name / Model</label>
                  <input type="text" required value={newName} onChange={e => setNewName(e.target.value)} placeholder="e.g., Dell Latitude 5420" className={modalInputCls} />
                </div>
                
                <div>
                  <label className={labelCls}>Asset Tag ID</label>
                  <input type="text" required value={newTag} onChange={e => setNewTag(e.target.value)} placeholder="e.g., AF-0012" className={modalInputCls + ' uppercase'} />
                </div>
                
                <div>
                  <label className={labelCls}>Category</label>
                  <select value={newCategory} onChange={e => setNewCategory(e.target.value)} className={modalInputCls}>
                    <option value="Electronics">Electronics</option>
                    <option value="Furniture">Furniture</option>
                    <option value="Machinery">Machinery</option>
                  </select>
                </div>
                
                <div>
                  <label className={labelCls}>Serial Number</label>
                  <input type="text" required value={newSerial} onChange={e => setNewSerial(e.target.value)} placeholder="e.g., DL-77291-Q" className={modalInputCls + ' uppercase'} />
                </div>
                
                <div>
                  <label className={labelCls}>Initial Location</label>
                  <input type="text" required value={newLocation} onChange={e => setNewLocation(e.target.value)} placeholder="e.g., Warehouse A" className={modalInputCls} />
                </div>

                <div className="md:col-span-2 pt-2">
                  <label className={labelCls}>Asset Image (Optional)</label>
                  <div className="flex items-center gap-4 mt-2">
                    <div className="w-20 h-20 rounded-2xl bg-surface-container border border-outline/20 flex items-center justify-center shrink-0 overflow-hidden">
                      {newImage ? <img src={newImage} alt="Preview" className="w-full h-full object-cover" /> : <span className="material-symbols-outlined text-outline/40 text-[32px]">image</span>}
                    </div>
                    <div className="flex-1">
                      <label className="cursor-pointer bg-surface border border-outline/30 hover:border-primary text-sm font-bold text-on-surface px-4 py-2.5 rounded-[14px] inline-flex items-center gap-2 transition-colors">
                        <span className="material-symbols-outlined text-[18px]">upload</span> Upload Photo
                        <input type="file" accept="image/*" onChange={handleImageUpload} className="hidden" />
                      </label>
                      <p className="text-[11px] text-outline mt-2">JPG, PNG up to 2MB.</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="pt-4 border-t border-outline/10 flex justify-end gap-3">
                <button type="button" onClick={() => setShowAddForm(false)} className="px-5 py-2.5 text-sm font-bold text-on-surface hover:bg-surface-container rounded-[14px] transition-colors">Cancel</button>
                <button type="submit" className="px-6 py-2.5 bg-primary hover:bg-primary/90 text-on-primary text-sm font-bold rounded-[14px] shadow-sm transition-colors">Register Asset</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
