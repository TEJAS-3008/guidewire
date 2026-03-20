import React from 'react';
import { ShieldCheck, MapPin, Smartphone, Wifi, Activity } from 'lucide-react';

const TrustScoreWidget = ({ trustIssues }) => {
  const currentScore = trustIssues ? 72 : 98;
  
  const trustFactors = [
    { label: 'Location consistency', status: trustIssues ? 'warn' : 'pass', icon: <MapPin size={16}/> },
    { label: 'Behavior patterns', status: 'pass', icon: <Activity size={16}/> },
    { label: 'Device authenticity', status: 'pass', icon: <Smartphone size={16}/> },
    { label: 'Network fingerprint', status: trustIssues ? 'warn' : 'pass', icon: <Wifi size={16}/> },
    { label: 'Environmental match', status: 'pass', icon: <ShieldCheck size={16}/> }
  ];

  return (
    <div className="glass-card h-full relative overflow-hidden">
      {/* Decorative background element */}
      <div className="absolute top-0 right-0 -mt-10 -mr-10 opacity-5 pointer-events-none">
        <ShieldCheck size={200} />
      </div>

      <div className="glass-card-header mb-6">
        <div>
          <h3 className="text-lg font-bold">Trust Engine Score</h3>
          <p className="text-xs text-muted">Fraud prevention & continuous auth</p>
        </div>
        <div className="w-16 h-16 rounded-full border-4 flex items-center justify-center font-bold text-xl transition-colors duration-500" 
             style={{ borderColor: trustIssues ? 'var(--warning-amber)' : 'var(--success-green)', color: trustIssues ? 'var(--warning-amber)' : 'var(--success-green)'}}>
          {currentScore}
        </div>
      </div>

      <div className="flex flex-col gap-4 mt-2">
        {trustFactors.map((factor, idx) => (
          <div key={idx} className="flex justify-between items-center bg-black bg-opacity-20 p-3 rounded-md border border-gray-800">
            <div className="flex items-center gap-3 text-sm">
              <span className="text-muted">{factor.icon}</span>
              <span className="text-gray-200">{factor.label}</span>
            </div>
            <div className="flex items-center">
              {factor.status === 'pass' ? (
                <div className="w-5 h-5 rounded-full bg-green-500 bg-opacity-20 flex items-center justify-center">
                  <div className="w-2 h-2 rounded-full bg-green-500"></div>
                </div>
              ) : (
                <div className="w-5 h-5 rounded-full bg-amber-500 bg-opacity-20 flex items-center justify-center">
                  <div className="w-2 h-2 rounded-full bg-amber-500 animate-ping"></div>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TrustScoreWidget;
