import React, { useState } from 'react';
import { Department, Employee, UserProfile } from '../types';

interface OrganizationSetupProps {
  user: UserProfile;
  departments: Department[];
  employees: Employee[];
  onAddDepartment: (name: string, head: string, parent: string) => void;
  onToggleDeptStatus: (id: string) => void;
  onDeleteDept: (id: string) => void;
  onAddEmployee: (emp: Omit<Employee, 'id'>) => void;
  onPromoteEmployee: (id: string, newRole: Employee['role']) => void;
  onToggleEmployeeStatus: (id: string) => void;
}

export default function OrganizationSetup({
  user, departments, employees, onAddDepartment, onToggleDeptStatus, onDeleteDept, onAddEmployee, onPromoteEmployee, onToggleEmployeeStatus
}: OrganizationSetupProps) {
  
  const [newDeptName, setNewDeptName] = useState('');
  const [newDeptHead, setNewDeptHead] = useState('');
  const [newDeptParent, setNewDeptParent] = useState('--');
  
  const [newEmpName, setNewEmpName] = useState('');
  const [newEmpEmail, setNewEmpEmail] = useState('');
  const [newEmpDept, setNewEmpDept] = useState('Engineering');
  const [newEmpRole, setNewEmpRole] = useState<Employee['role']>('Employee');
  const [newEmpTitle, setNewEmpTitle] = useState('');
  
  const [deptSearch, setDeptSearch] = useState('');
  const [empSearch, setEmpSearch] = useState('');

  if (user.role !== 'Admin') {
    return (
      <div className="flex flex-col items-center justify-center h-full w-full bg-background p-8">
        <span className="material-symbols-outlined text-[80px] text-error/30 mb-4">gpp_bad</span>
        <h1 className="text-2xl font-bold text-on-surface">Administrative Access Required</h1>
        <p className="text-outline mt-2 text-center max-w-md">
          You are authenticated as a <strong>{user.role}</strong>. Only Global Administrators have authorization to modify organizational structures and role assignments.
        </p>
      </div>
    );
  }

  const handleAddDept = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newDeptName || !newDeptHead) return;
    onAddDepartment(newDeptName, newDeptHead, newDeptParent);
    setNewDeptName(''); setNewDeptHead(''); setNewDeptParent('--');
  };

  const handleAddEmployeeSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newEmpName || !newEmpEmail || !newEmpTitle) return;
    onAddEmployee({
      name: newEmpName, email: newEmpEmail, dept: newEmpDept, role: newEmpRole, jobTitle: newEmpTitle,
      avatar: `https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&q=80&w=100`, status: 'Active'
    });
    setNewEmpName(''); setNewEmpEmail(''); setNewEmpTitle(''); setNewEmpRole('Employee');
  };

  const filteredDepts = departments.filter(d => d.name.toLowerCase().includes(deptSearch.toLowerCase()) || d.head.toLowerCase().includes(deptSearch.toLowerCase()));
  const filteredEmps = employees.filter(emp => emp.name.toLowerCase().includes(empSearch.toLowerCase()) || emp.email.toLowerCase().includes(empSearch.toLowerCase()) || emp.role.toLowerCase().includes(empSearch.toLowerCase()));

  const inputCls = "w-full p-3.5 bg-background border border-outline/30 focus:border-primary focus:ring-1 focus:ring-primary/20 rounded-2xl outline-none text-on-surface text-sm transition-colors";
  const labelCls = "block text-sm font-bold text-on-surface mb-1.5";

  return (
    <div id="org-setup-tab" className="p-6 md:p-8 space-y-8 bg-background h-full overflow-y-auto">
      <div className="border-b border-outline/30 pb-6">
        <div className="flex items-center gap-2 text-xs font-bold text-primary uppercase tracking-widest">
          <span className="material-symbols-outlined text-[16px]">domain</span> Directory Configuration
        </div>
        <h1 className="text-3xl font-bold text-on-surface mt-1 tracking-tight">Organization Setup</h1>
        <p className="text-outline text-sm mt-1">Maintain departmental hierarchies, designate heads of custody, and manage authorized personnel rosters.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-8">
          
          <div className="bg-surface rounded-[28px] border border-outline/20 shadow-sm overflow-hidden">
            <div className="p-6 border-b border-outline/10 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
              <div>
                <h2 className="text-lg font-bold text-on-surface tracking-tight">Active Corporate Departments</h2>
              </div>
              <div className="relative max-w-xs w-full">
                <span className="material-symbols-outlined absolute left-3.5 top-1/2 -translate-y-1/2 text-outline text-[18px]">search</span>
                <input type="text" placeholder="Filter departments..." value={deptSearch} onChange={(e) => setDeptSearch(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 text-sm bg-background border border-outline/20 focus:border-primary rounded-[14px] outline-none" />
              </div>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse min-w-[600px]">
                <thead>
                  <tr className="bg-surface-container text-outline uppercase tracking-wider text-xs font-bold border-b border-outline/10">
                    <th className="py-3.5 px-6">Department Name</th>
                    <th className="py-3.5 px-6">Custodian Head</th>
                    <th className="py-3.5 px-6">Parent Org</th>
                    <th className="py-3.5 px-6 text-center">Status</th>
                    <th className="py-3.5 px-6 text-right">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-outline/10">
                  {filteredDepts.length === 0 ? (
                    <tr><td colSpan={5} className="py-12 text-center text-outline">No departments found.</td></tr>
                  ) : (
                    filteredDepts.map((dept) => (
                      <tr key={dept.id} className="hover:bg-surface-container/30 transition-colors">
                        <td className="py-4 px-6 font-bold text-on-surface">{dept.name}</td>
                        <td className="py-4 px-6">
                          <div className="flex items-center gap-2.5">
                            <img src={dept.headAvatar} alt={dept.head} className="w-7 h-7 rounded-full object-cover border border-outline/20" />
                            <span className="font-bold text-on-surface text-sm">{dept.head}</span>
                          </div>
                        </td>
                        <td className="py-4 px-6 text-outline text-sm font-medium">{dept.parentDept}</td>
                        <td className="py-4 px-6 text-center">
                          <button onClick={() => onToggleDeptStatus(dept.id)}
                            className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold transition-colors ${
                              dept.status === 'Active' ? 'bg-primary-container text-primary border border-primary/20' : 'bg-surface-container text-outline border border-outline/20'
                            }`}>
                            <span className={`w-1.5 h-1.5 rounded-full ${dept.status === 'Active' ? 'bg-primary animate-pulse' : 'bg-outline'}`}></span>
                            {dept.status}
                          </button>
                        </td>
                        <td className="py-4 px-6 text-right">
                          <button onClick={() => onDeleteDept(dept.id)}
                            className="text-outline hover:text-error p-1.5 rounded-xl hover:bg-error/10 transition-colors">
                            <span className="material-symbols-outlined text-[18px]">delete</span>
                          </button>
                        </td>
                      </tr>
                    ))
                  )}
                </tbody>
              </table>
            </div>
          </div>

          <div className="bg-surface rounded-[28px] border border-outline/20 shadow-sm overflow-hidden">
            <div className="p-6 border-b border-outline/10 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
              <div>
                <h2 className="text-lg font-bold text-on-surface tracking-tight">Personnel Custodian Roster</h2>
                <p className="text-sm text-outline mt-0.5">Authorizations & active assignments for hardware custodians.</p>
              </div>
              <div className="relative max-w-xs w-full">
                <span className="material-symbols-outlined absolute left-3.5 top-1/2 -translate-y-1/2 text-outline text-[18px]">search</span>
                <input type="text" placeholder="Filter personnel..." value={empSearch} onChange={(e) => setEmpSearch(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 text-sm bg-background border border-outline/20 focus:border-primary rounded-[14px] outline-none" />
              </div>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse min-w-[700px]">
                <thead>
                  <tr className="bg-surface-container text-outline uppercase tracking-wider text-xs font-bold border-b border-outline/10">
                    <th className="py-3.5 px-6">Personnel Info</th>
                    <th className="py-3.5 px-6">Department</th>
                    <th className="py-3.5 px-6">Assigned Role (ERP)</th>
                    <th className="py-3.5 px-6 text-center">Status</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-outline/10">
                  {filteredEmps.map((emp) => (
                    <tr key={emp.id} className="hover:bg-surface-container/30 transition-colors">
                      <td className="py-4 px-6">
                        <div className="flex items-center gap-3">
                          <img src={emp.avatar} alt={emp.name} className="w-10 h-10 rounded-xl object-cover border border-outline/20" />
                          <div>
                            <p className="font-bold text-on-surface flex items-center gap-2">{emp.name}</p>
                            <p className="text-xs text-outline mt-0.5">{emp.jobTitle}</p>
                            <p className="text-xs text-outline flex items-center gap-1 mt-0.5">
                              <span className="material-symbols-outlined text-[14px]">mail</span>{emp.email}
                            </p>
                          </div>
                        </div>
                      </td>
                      <td className="py-4 px-6">
                        <span className="bg-secondary-container text-secondary px-2.5 py-1 rounded-lg font-bold text-xs">{emp.dept}</span>
                      </td>
                      <td className="py-4 px-6">
                        {/* Promote Role Dropdown */}
                        <select 
                          value={emp.role} 
                          onChange={(e) => onPromoteEmployee(emp.id, e.target.value as Employee['role'])}
                          className="text-sm bg-background border border-outline/20 text-on-surface py-1.5 px-2.5 rounded-[8px] focus:outline-none focus:border-primary font-bold">
                          <option value="Admin">Admin</option>
                          <option value="Asset Manager">Asset Manager</option>
                          <option value="Department Head">Department Head</option>
                          <option value="Employee">Employee</option>
                        </select>
                      </td>
                      <td className="py-4 px-6 text-center">
                        <button onClick={() => onToggleEmployeeStatus(emp.id)}
                          className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold transition-colors ${
                            emp.status === 'Active' ? 'bg-primary-container text-primary border border-primary/20' : 'bg-surface-container text-outline border border-outline/20'
                          }`}>
                          <span className="material-symbols-outlined text-[14px]">{emp.status === 'Active' ? 'check_circle' : 'cancel'}</span>
                          {emp.status}
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        <div className="space-y-8">
          <div className="bg-surface p-6 rounded-[28px] border border-outline/20 shadow-sm space-y-5">
            <div>
              <h2 className="text-lg font-bold text-on-surface tracking-tight">New Custodian Dept</h2>
            </div>
            <form onSubmit={handleAddDept} className="space-y-4">
              <div><label className={labelCls}>Department Title</label>
                <input type="text" required placeholder="e.g., Marketing Ops" value={newDeptName} onChange={(e) => setNewDeptName(e.target.value)} className={inputCls} /></div>
              <div><label className={labelCls}>Designated Head</label>
                <input type="text" required placeholder="e.g., Suresh Khanna" value={newDeptHead} onChange={(e) => setNewDeptHead(e.target.value)} className={inputCls} /></div>
              <div><label className={labelCls}>Parent Department</label>
                <select value={newDeptParent} onChange={(e) => setNewDeptParent(e.target.value)} className={inputCls}>
                  <option value="--">-- No Parent Department --</option>
                  {departments.map(d => <option key={d.id} value={d.name}>{d.name}</option>)}
                </select></div>
              <button type="submit" className="w-full h-12 bg-primary hover:bg-primary/90 text-on-primary font-bold rounded-[16px] flex items-center justify-center gap-2 transition-colors shadow-sm">
                <span className="material-symbols-outlined text-[20px]">add</span> Initialize Department
              </button>
            </form>
          </div>

          <div className="bg-surface p-6 rounded-[28px] border border-outline/20 shadow-sm space-y-5">
            <div>
              <h2 className="text-lg font-bold text-on-surface tracking-tight">Register Personnel</h2>
            </div>
            <form onSubmit={handleAddEmployeeSubmit} className="space-y-4">
              <div><label className={labelCls}>Full Name</label>
                <input type="text" required placeholder="e.g., Vikram Sen" value={newEmpName} onChange={(e) => setNewEmpName(e.target.value)} className={inputCls} /></div>
              <div><label className={labelCls}>Corporate Email</label>
                <input type="email" required placeholder="vikram.sen@assetflow.com" value={newEmpEmail} onChange={(e) => setNewEmpEmail(e.target.value)} className={inputCls} /></div>
              <div className="grid grid-cols-2 gap-3">
                <div><label className={labelCls}>Department</label>
                  <select required value={newEmpDept} onChange={(e) => setNewEmpDept(e.target.value)} className={inputCls}>
                    <option value="" disabled>Select Dept</option>
                    {departments.map(d => <option key={d.id} value={d.name}>{d.name}</option>)}
                  </select></div>
                <div><label className={labelCls}>Job Title</label>
                  <input type="text" required placeholder="e.g., Tech Lead" value={newEmpTitle} onChange={(e) => setNewEmpTitle(e.target.value)} className={inputCls} /></div>
              </div>
              <div><label className={labelCls}>System Role</label>
                <select value={newEmpRole} onChange={(e) => setNewEmpRole(e.target.value as Employee['role'])} className={inputCls}>
                  <option value="Employee">Employee (Standard View)</option>
                  <option value="Department Head">Department Head</option>
                  <option value="Asset Manager">Asset Manager</option>
                  <option value="Admin">Administrator</option>
                </select>
              </div>
              <button type="submit" className="w-full h-12 bg-primary hover:bg-primary/90 text-on-primary font-bold rounded-[16px] flex items-center justify-center gap-2 transition-colors shadow-sm">
                <span className="material-symbols-outlined text-[20px]">person_add</span> Onboard Profile
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
