import React from 'react';
import { AlertCircle, CloudRain, ShieldCheck } from 'lucide-react';

const TopBannerAlert = ({ type, message, action }) => {
  const getStyles = () => {
    switch(type) {
      case 'danger':
        return { 
          bg: 'rgba(239, 68, 68, 0.1)', 
          border: '1px solid rgba(239, 68, 68, 0.3)', 
          color: 'var(--danger-red)',
          icon: <CloudRain size={20} className="animate-pulse-danger" />
        };
      case 'warning':
        return { 
          bg: 'rgba(245, 158, 11, 0.1)', 
          border: '1px solid rgba(245, 158, 11, 0.3)', 
          color: 'var(--warning-amber)',
          icon: <AlertCircle size={20} />
        };
      case 'success':
        return { 
          bg: 'rgba(16, 185, 129, 0.1)', 
          border: '1px solid rgba(16, 185, 129, 0.3)', 
          color: 'var(--success-green)',
          icon: <ShieldCheck size={20} />
        };
      default:
        return { bg: 'var(--bg-tertiary)', border: '1px solid var(--border-color)', color: 'white', icon: null };
    }
  };

  const styles = getStyles();

  return (
    <div 
      className="flex items-center justify-between p-4 slide-in" 
      style={{ 
        background: styles.bg, 
        borderBottom: styles.border,
        color: styles.color,
        backdropFilter: 'blur(10px)'
      }}
    >
      <div className="flex items-center gap-3">
        {styles.icon}
        <span className="font-bold text-sm tracking-wide">{message}</span>
      </div>
      {action && (
        <button className="btn btn-outline text-sm" style={{ padding: '0.4rem 1rem', borderColor: styles.color, color: styles.color }} onClick={action.onClick}>
          {action.label}
        </button>
      )}
    </div>
  );
};

export default TopBannerAlert;
