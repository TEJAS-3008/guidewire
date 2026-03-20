import React from 'react';
import { Users, FileText, AlertOctagon, TrendingUp, ShieldAlert, Activity } from 'lucide-react';
import LiveEventMonitor from '../Map/LiveEventMonitor';

const AdminDashboard = ({ simulationState }) => {
  const { weather, claimStatus, trustIssues } = simulationState;

  const isActiveEvent = weather === 'heavyRain';
  const activeClaims = isActiveEvent ? 142 : 12;
  const fraudAlerts = trustIssues ? 34 : 5;
  const payoutVol = isActiveEvent ? '₹73,840' : '₹12,450';

  return (
    <div className="flex flex-col gap-6">
      <header className="flex justify-between items-end mb-2">
        <div>
          <h2 className="text-3xl font-bold mb-1">Command Center</h2>
          <p className="text-muted">City-wide risk monitoring and parametric portfolio management.</p>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse-danger" style={{ background: isActiveEvent ? 'var(--danger-red)' : 'var(--success-green)' }}></div>
          <span className="text-sm font-bold uppercase tracking-widest text-muted">{isActiveEvent ? 'EVENT ACTIVE' : 'SYSTEM NORMAL'}</span>
        </div>
      </header>

      {/* KPI Cards */}
      <div className="grid grid-cols-4 gap-4">
        <div className="glass-card flex flex-col justify-between">
          <div className="flex justify-between items-start mb-2">
            <h4 className="text-sm font-bold text-muted">Total Active Passes</h4>
            <ShieldAlert size={16} color="var(--brand-primary)" />
          </div>
          <p className="text-2xl font-bold">42,891</p>
          <div className="flex items-center gap-1 text-xs text-success-green mt-2">
            <TrendingUp size={12} /> <span>+12% this week</span>
          </div>
        </div>
        
        <div className="glass-card flex flex-col justify-between" style={isActiveEvent ? { borderColor: 'var(--accent-blue)', boxShadow: '0 0 15px rgba(59, 130, 246, 0.15)' } : {}}>
          <div className="flex justify-between items-start mb-2">
            <h4 className="text-sm font-bold text-muted">Active Claims Processing</h4>
            <FileText size={16} color="var(--accent-blue)" />
          </div>
          <p className="text-2xl font-bold animate-pulse">{activeClaims}</p>
          <div className="flex items-center gap-1 text-xs text-muted mt-2">
             <span>Live auto-trigger count</span>
          </div>
        </div>

        <div className="glass-card flex flex-col justify-between" style={trustIssues ? { borderColor: 'var(--warning-amber)', boxShadow: '0 0 15px rgba(245, 158, 11, 0.15)' } : {}}>
          <div className="flex justify-between items-start mb-2">
            <h4 className="text-sm font-bold text-muted">Fraud Clusters</h4>
            <AlertOctagon size={16} color="var(--warning-amber)" />
          </div>
          <p className="text-2xl font-bold">{fraudAlerts}</p>
          <div className="flex items-center gap-1 text-xs text-warning-amber mt-2">
             <span>{trustIssues ? 'Elevated spoofing detected' : 'Normal background rate'}</span>
          </div>
        </div>

        <div className="glass-card flex flex-col justify-between">
          <div className="flex justify-between items-start mb-2">
            <h4 className="text-sm font-bold text-muted">24h Payout Volume</h4>
            <Activity size={16} color="var(--success-green)" />
          </div>
          <p className="text-2xl font-bold text-success-green">{payoutVol}</p>
          <div className="flex items-center gap-1 text-xs text-muted mt-2">
             <span>Platform reserves solid</span>
          </div>
        </div>
      </div>

      {/* Main Map Area */}
      <div className="grid grid-cols-1 mt-4">
        <LiveEventMonitor weather={weather} trustIssues={trustIssues} />
      </div>

    </div>
  );
};

export default AdminDashboard;
