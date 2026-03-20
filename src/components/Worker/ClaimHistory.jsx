import React from 'react';
import { FileText, MapPin, CloudRain, ThermometerSun, AlertCircle } from 'lucide-react';

const ClaimHistory = () => {
  const claims = [
    { id: 'CLM-10042', trigger: 'Heavy Rainfall (>60mm/hr)', icon: <CloudRain size={16} className="text-blue-400"/>, zone: 'Zone 4: Koramangala', amount: '₹520', date: 'Oct 24, 2024', status: 'Paid Automatically', time: '8m 12s' },
    { id: 'CLM-09211', trigger: 'Heatwave (AQI >300 + 41°C)', icon: <ThermometerSun size={16} className="text-red-400"/>, zone: 'Zone 2: Indiranagar', amount: '₹300', date: 'Oct 12, 2024', status: 'Paid Automatically', time: '2m 05s' },
    { id: 'CLM-08191', trigger: 'Flood Disruption', icon: <AlertCircle size={16} className="text-amber-400"/>, zone: 'Zone 9: Bellandur', amount: '₹850', date: 'Sep 02, 2024', status: 'Paid after Manual Review', time: '14 hrs' },
  ];

  return (
    <div className="flex flex-col gap-6 fade-in">
      <header className="mb-2">
        <h2 className="text-3xl font-bold mb-1">Claim History</h2>
        <p className="text-muted">History of parametric triggers and automated resolutions.</p>
      </header>

      <div className="glass-card">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-lg font-bold">Lifetime Auto-Claims Overview</h3>
          <div className="flex gap-4">
             <div className="text-right">
                <span className="text-xs font-bold uppercase text-muted tracking-wider block">Total Paid Out</span>
                <span className="text-xl font-bold text-success-green">₹1,670</span>
             </div>
             <div className="h-10 w-px bg-gray-800"></div>
             <div className="text-right">
                <span className="text-xs font-bold uppercase text-muted tracking-wider block">Avg Settlement</span>
                 <span className="text-xl font-bold text-accent-blue">&lt; 10 mins</span>
             </div>
          </div>
        </div>

        <div className="flex flex-col gap-4">
          {claims.map((claim, idx) => (
            <div key={idx} className="p-4 rounded-lg bg-black bg-opacity-30 border border-gray-800 hover:border-gray-600 transition-colors">
              <div className="flex justify-between items-start mb-3">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-md bg-gray-800">
                    <FileText size={20} className="text-brand-primary" />
                  </div>
                  <div>
                    <h4 className="font-bold font-mono text-sm">{claim.id}</h4>
                    <p className="text-xs text-muted">{claim.date}</p>
                  </div>
                </div>
                <div className="text-right">
                  <h4 className="font-bold text-lg text-white">{claim.amount}</h4>
                  <span className={`text-xs ${claim.status.includes('Manual') ? 'text-warning-amber' : 'text-success-green'}`}>
                    {claim.status}
                  </span>
                </div>
              </div>
              
              <div className="grid grid-cols-3 gap-4 border-t border-gray-800 pt-3 mt-1">
                 <div className="flex items-center gap-2 text-sm">
                   {claim.icon} <span>{claim.trigger}</span>
                 </div>
                 <div className="flex items-center gap-2 text-sm text-gray-300">
                   <MapPin size={14} className="text-muted"/> <span>{claim.zone}</span>
                 </div>
                 <div className="flex items-center justify-end gap-2 text-xs text-muted">
                    Settlement Time: <span className="font-bold text-white">{claim.time}</span>
                 </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ClaimHistory;
