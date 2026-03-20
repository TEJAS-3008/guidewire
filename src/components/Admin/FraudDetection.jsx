import React from 'react';
import { ShieldAlert, Cpu, AlertTriangle, Fingerprint, MapPin, XCircle } from 'lucide-react';

const FraudDetection = () => {
  const flags = [
    { id: 'USER-8819A', name: 'Ravi S.', score: 42, reason: 'GPS Spoofing - Jumped 12km in 3s', device: 'Xiaomi Poco (Rooted)', status: 'Blocked' },
    { id: 'USER-9122C', name: 'Karthik M.', score: 55, reason: 'Multiple Claims from strict coordinate 12.97,77.59', device: 'Samsung Galaxy', status: 'Review Flag' },
    { id: 'USER-7731F', name: 'Imran K.', score: 30, reason: 'Weather API disjoint (Device sensors dry)', device: 'OnePlus 9', status: 'Blocked' },
  ];

  return (
    <div className="flex flex-col gap-6 fade-in">
      <header className="mb-2">
        <h2 className="text-3xl font-bold mb-1 border-b border-warning-amber inline-block pb-1">AI Trust & Fraud Engine</h2>
        <p className="text-muted mt-2">Continuous continuous authentication and spoofing prevention.</p>
      </header>

      <div className="grid grid-cols-3 gap-6">
        <div className="glass-card flex flex-col items-center justify-center text-center p-6 border-warning-amber shadow-[0_0_15px_rgba(245,158,11,0.1)]">
          <div className="w-16 h-16 rounded-full bg-amber-500 bg-opacity-20 flex flex-col items-center justify-center mb-3 text-warning-amber relative">
            <div className="absolute inset-0 border-2 border-amber-500 rounded-full animate-ping opacity-30"></div>
            <AlertTriangle size={32} />
          </div>
          <h3 className="text-3xl font-bold">1.2%</h3>
          <p className="text-xs text-muted uppercase font-bold tracking-wider mt-1">Intercept Rate</p>
          <p className="text-xs mt-2 text-warning-amber">12 pending manual reviews</p>
        </div>

        <div className="glass-card col-span-2">
           <h3 className="text-lg font-bold mb-4">Live Threat Vectors Analyzed</h3>
           <div className="space-y-4">
              <div>
                <div className="flex justify-between text-sm mb-1">
                  <span className="flex items-center gap-2"><MapPin size={14} className="text-muted"/> Location Consistency</span>
                  <span className="font-mono text-xs">8,492 passes / 12 fails</span>
                </div>
                <div className="w-full bg-gray-800 h-1 rounded flex">
                   <div className="bg-success-green h-1 rounded-l" style={{ width: '98%'}}></div>
                   <div className="bg-danger-red h-1 rounded-r animate-pulse" style={{ width: '2%'}}></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between text-sm mb-1">
                  <span className="flex items-center gap-2"><Cpu size={14} className="text-muted"/> Environment vs. API Match</span>
                  <span className="font-mono text-xs">8,401 passes / 80 fails</span>
                </div>
                <div className="w-full bg-gray-800 h-1 rounded flex">
                   <div className="bg-success-green h-1 rounded-l" style={{ width: '90%'}}></div>
                   <div className="bg-danger-red h-1 rounded-r" style={{ width: '10%'}}></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between text-sm mb-1">
                  <span className="flex items-center gap-2"><Fingerprint size={14} className="text-muted"/> Hardware Fingerprinting</span>
                  <span className="font-mono text-xs">8,450 passes / 40 fails</span>
                </div>
                <div className="w-full bg-gray-800 h-1 rounded flex">
                   <div className="bg-success-green h-1 rounded-l" style={{ width: '94%'}}></div>
                   <div className="bg-warning-amber h-1 rounded-r" style={{ width: '6%'}}></div>
                </div>
              </div>
           </div>
        </div>
      </div>

      <div className="glass-card">
         <div className="flex items-center gap-2 mb-4">
           <ShieldAlert size={18} className="text-danger-red"/>
           <h3 className="text-lg font-bold">High-Risk Worker Accounts (AI Flagged)</h3>
         </div>
         
         <div className="w-full overflow-hidden rounded-md border border-gray-800">
           <table className="w-full text-left bg-black bg-opacity-40">
             <thead>
               <tr className="text-xs text-muted bg-gray-900 border-b border-gray-800 uppercase tracking-widest">
                 <th className="p-3">User ID</th>
                 <th className="p-3">Trust Score</th>
                 <th className="p-3">Intervention Reason</th>
                 <th className="p-3">Telemetry Data</th>
                 <th className="p-3 text-right">Action</th>
               </tr>
             </thead>
             <tbody>
                {flags.map((flag, i) => (
                  <tr key={i} className="border-b border-gray-800 text-sm hover:bg-white hover:bg-opacity-5 transition-colors">
                    <td className="p-3 font-bold">{flag.id}<span className="block text-xs font-normal text-muted">{flag.name}</span></td>
                    <td className="p-3">
                       <span className={`px-2 py-1 rounded badge ${flag.score < 50 ? 'badge-danger' : 'badge-warning'}`}>
                         {flag.score}/100
                       </span>
                    </td>
                    <td className="p-3">{flag.reason}</td>
                    <td className="p-3 text-xs font-mono text-muted">{flag.device}</td>
                    <td className="p-3 text-right">
                       {flag.status === 'Blocked' ? (
                          <button className="btn text-xs bg-red-500 bg-opacity-20 text-red-500 border border-red-500 py-1 px-3 pointer-events-none w-24 justify-center">
                            BLOCKED
                          </button>
                       ) : (
                          <button className="btn text-xs bg-brand-primary text-white py-1 px-3 w-24 justify-center">
                            REVIEW
                          </button>
                       )}
                    </td>
                  </tr>
                ))}
             </tbody>
           </table>
         </div>
      </div>
    </div>
  );
};

export default FraudDetection;
