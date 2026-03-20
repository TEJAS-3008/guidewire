import React from 'react';
import { LayoutDashboard, Settings, Map, ShieldAlert, History, Wallet, User, Shield } from 'lucide-react';

const Sidebar = ({ currentView, setView }) => {
  return (
    <aside style={{
      width: '260px',
      background: 'var(--bg-secondary)',
      borderRight: '1px solid var(--border-color)',
      padding: '1.5rem',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      zIndex: 10
    }}>
      <div>
        <div className="flex items-center gap-2 mb-8 mt-2">
          <div style={{
            background: 'var(--brand-gradient)',
            padding: '8px',
            borderRadius: 'var(--radius-md)',
            boxShadow: '0 0 15px rgba(139, 92, 246, 0.4)'
          }}>
            <Shield size={24} color="white" />
          </div>
          <div>
            <h1 className="text-xl font-bold text-gradient">GigShield</h1>
            <p className="text-xs text-muted font-medium tracking-wide">PARAMETRIC PROTECTION</p>
          </div>
        </div>

        <nav className="flex flex-col gap-2">
          <p className="text-xs text-muted mb-2 mt-4 uppercase font-bold tracking-wider">Worker View</p>
          
          <button 
            className={`flex items-center gap-3 w-full p-3 rounded-md transition-all ${currentView === 'worker' ? 'bg-opacity-20 text-blue-400' : 'text-muted hover:text-white'}`}
            style={currentView === 'worker' ? { background: 'var(--bg-tertiary)', color: 'white', borderLeft: '3px solid var(--brand-primary)' } : { borderLeft: '3px solid transparent' }}
            onClick={() => setView('worker')}
          >
            <LayoutDashboard size={20} />
            <span className="font-medium text-sm">Dashboard</span>
          </button>
          
          <button 
            className={`flex items-center gap-3 w-full p-3 rounded-md transition-all ${currentView === 'wallet' ? 'bg-opacity-20 text-blue-400' : 'text-muted hover:text-white'}`}
            style={currentView === 'wallet' ? { background: 'var(--bg-tertiary)', color: 'white', borderLeft: '3px solid var(--brand-primary)' } : { borderLeft: '3px solid transparent' }}
            onClick={() => setView('wallet')}
          >
            <Wallet size={20} />
            <span className="font-medium text-sm">Protection Pass & Wallet</span>
          </button>

          <button 
            className={`flex items-center gap-3 w-full p-3 rounded-md transition-all ${currentView === 'history' ? 'bg-opacity-20 text-blue-400' : 'text-muted hover:text-white'}`}
            style={currentView === 'history' ? { background: 'var(--bg-tertiary)', color: 'white', borderLeft: '3px solid var(--brand-primary)' } : { borderLeft: '3px solid transparent' }}
            onClick={() => setView('history')}
          >
            <History size={20} />
            <span className="font-medium text-sm">Claim History</span>
          </button>

          <p className="text-xs text-muted mb-2 mt-8 uppercase font-bold tracking-wider">Admin View</p>

          <button 
            className={`flex items-center gap-3 w-full p-3 rounded-md transition-all ${currentView === 'admin' ? 'bg-opacity-20 text-blue-400' : 'text-muted hover:text-white'}`}
            style={currentView === 'admin' ? { background: 'var(--bg-tertiary)', color: 'white', borderLeft: '3px solid var(--warning-amber)' } : { borderLeft: '3px solid transparent' }}
            onClick={() => setView('admin')}
          >
            <Map size={20} />
            <span className="font-medium text-sm">City Monitor</span>
          </button>
          
          <button 
            className={`flex items-center gap-3 w-full p-3 rounded-md transition-all ${currentView === 'fraud' ? 'bg-opacity-20 text-blue-400' : 'text-muted hover:text-white'}`}
            style={currentView === 'fraud' ? { background: 'var(--bg-tertiary)', color: 'white', borderLeft: '3px solid var(--warning-amber)' } : { borderLeft: '3px solid transparent' }}
            onClick={() => setView('fraud')}
          >
            <ShieldAlert size={20} />
            <span className="font-medium text-sm">Fraud Detection</span>
          </button>
        </nav>
      </div>

      <div className="flex items-center gap-3 p-3 bg-opacity-50 rounded-md" style={{ background: 'var(--bg-tertiary)' }}>
        <div style={{ width: '36px', height: '36px', borderRadius: '50%', background: 'var(--brand-primary)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <User size={18} color="white" />
        </div>
        <div>
          <p className="text-sm font-bold">Ravi Kumar</p>
          <p className="text-xs text-muted">Zomato Partner</p>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
