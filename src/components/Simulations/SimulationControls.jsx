import React from 'react';
import { Play, RotateCcw, CloudLightning, ShieldAlert, Clock } from 'lucide-react';

const SimulationControls = ({ onTrigger, currentState }) => {
  return (
    <div style={{
      position: 'fixed',
      bottom: '2rem',
      right: '2rem',
      background: 'rgba(30, 30, 40, 0.8)',
      backdropFilter: 'blur(16px)',
      border: '1px solid var(--border-light)',
      borderRadius: 'var(--radius-lg)',
      padding: '1rem',
      boxShadow: 'var(--shadow-lg)',
      zIndex: 50,
      display: 'flex',
      flexDirection: 'column',
      gap: '0.75rem',
      width: '280px'
    }}>
      <div className="flex justify-between items-center mb-1">
        <span className="text-xs font-bold text-muted uppercase tracking-wider">Simulation Panel</span>
        <button 
          onClick={() => onTrigger('reset')}
          className="text-muted hover:text-white transition-colors flex items-center gap-1 text-xs"
        >
          <RotateCcw size={14} /> Reset
        </button>
      </div>
      
      <button 
        className="btn w-full flex justify-between items-center text-sm"
        style={{ 
          background: currentState.weather === 'heavyRain' && currentState.simulatedHours === 3 ? 'rgba(59, 130, 246, 0.2)' : 'var(--bg-tertiary)',
          border: currentState.weather === 'heavyRain' && currentState.simulatedHours === 3 ? '1px solid var(--accent-blue)' : '1px solid var(--border-light)',
          color: currentState.weather === 'heavyRain' && currentState.simulatedHours === 3 ? 'var(--accent-blue)' : 'white'
        }}
        onClick={() => onTrigger('rain', 3)}
      >
        <div className="flex items-center gap-2">
          <Clock size={16} />
          <span>Simulate 3Hr Disruption</span>
        </div>
        <Play size={14} />
      </button>

      <button 
        className="btn w-full flex justify-between items-center text-sm"
        style={{ 
          background: currentState.weather === 'heavyRain' && currentState.simulatedHours === 6 ? 'rgba(59, 130, 246, 0.2)' : 'var(--bg-tertiary)',
          border: currentState.weather === 'heavyRain' && currentState.simulatedHours === 6 ? '1px solid var(--accent-blue)' : '1px solid var(--border-light)',
          color: currentState.weather === 'heavyRain' && currentState.simulatedHours === 6 ? 'var(--accent-blue)' : 'white'
        }}
        onClick={() => onTrigger('rain', 6)}
      >
        <div className="flex items-center gap-2">
          <Clock size={16} />
          <span>Simulate 6Hr Disruption</span>
        </div>
        <Play size={14} />
      </button>

      <div className="flex items-center justify-between border-t border-gray-800 pt-3 mt-1">
        <div className="flex items-center gap-2 text-sm text-gray-300">
          <ShieldAlert size={16} color={currentState.trustIssues ? "var(--warning-amber)" : "var(--text-muted)"} />
          <span>Simulate Fraud Flag</span>
        </div>
        <label className="relative inline-flex items-center cursor-pointer">
          <input 
            type="checkbox" 
            className="sr-only peer" 
            checked={currentState.trustIssues}
            onChange={() => onTrigger('fraud')}
          />
          <div className="w-9 h-5 bg-gray-700 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-amber-500"></div>
        </label>
      </div>
    </div>
  );
};

export default SimulationControls;
