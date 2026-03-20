import React from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { ShieldAlert, TrendingDown } from 'lucide-react';

const IncomeProtectionGraph = ({ isRaining }) => {
  // Data for the graph simulating a 6-hour shift where disruption happens mid-way
  const data = [
    { time: '12 PM', withoutShield: 110, withShield: 110 },
    { time: '1 PM', withoutShield: 220, withShield: 220 },
    { time: '2 PM', withoutShield: 330, withShield: 330 },
    { time: '3 PM', withoutShield: 440, withShield: 440 }, // Disruption starts here
    { time: '4 PM', withoutShield: 440, withShield: 550 }, // Hourly payout kicks in (110)
    { time: '5 PM', withoutShield: 440, withShield: 660 }, 
    { time: '6 PM', withoutShield: 440, withShield: 770 },
  ];

  return (
    <div className="glass-card mt-6">
      <div className="flex justify-between items-start mb-6">
        <div>
          <h3 className="text-lg font-bold flex items-center gap-2">
            Income Protection Curve
          </h3>
          <p className="text-sm text-muted">Your income is protected even when you can't work.</p>
        </div>
        <div className="flex gap-4 text-xs font-bold">
            <div className="flex items-center gap-1">
              <div className="w-3 h-3 bg-brand-primary rounded-sm"></div>
              <span>With Protection Pass</span>
            </div>
            <div className="flex items-center gap-1 text-muted">
              <div className="w-3 h-3 bg-gray-600 rounded-sm"></div>
              <span>Without Protection</span>
            </div>
        </div>
      </div>

      <div className="h-64 w-full relative">
        {!isRaining && (
          <div className="absolute inset-0 z-10 flex flex-col items-center justify-center bg-black bg-opacity-60 backdrop-blur-sm rounded-lg border border-gray-800">
             <ShieldAlert size={24} className="text-brand-primary mb-2" />
             <p className="font-bold text-sm">Simulation Inactive</p>
             <p className="text-xs text-muted max-w-xs text-center mt-1">Trigger a weather event to visualize how your Protection Pass maintains your earnings trajectory.</p>
          </div>
        )}
        
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={data} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
            <defs>
              <linearGradient id="colorWith" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="var(--brand-primary)" stopOpacity={0.4}/>
                <stop offset="95%" stopColor="var(--brand-primary)" stopOpacity={0}/>
              </linearGradient>
              <linearGradient id="colorWithout" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#4b5563" stopOpacity={0.3}/>
                <stop offset="95%" stopColor="#4b5563" stopOpacity={0}/>
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" stroke="#27272a" vertical={false} />
            <XAxis dataKey="time" stroke="#64748b" tick={{fill: '#64748b', fontSize: 12}} axisLine={false} tickLine={false} />
            <YAxis stroke="#64748b" tick={{fill: '#64748b', fontSize: 12}} axisLine={false} tickLine={false} tickFormatter={(value) => `₹${value}`} />
            <Tooltip 
              contentStyle={{ backgroundColor: 'var(--bg-secondary)', border: '1px solid var(--border-color)', borderRadius: '8px' }}
              itemStyle={{ fontSize: '12px', fontWeight: 'bold' }}
              labelStyle={{ color: 'var(--text-muted)', marginBottom: '4px' }}
            />
            <Area type="monotone" dataKey="withoutShield" stroke="#4b5563" strokeWidth={2} fillOpacity={1} fill="url(#colorWithout)" />
            <Area type="monotone" dataKey="withShield" stroke="var(--brand-primary)" strokeWidth={3} fillOpacity={1} fill="url(#colorWith)" />
            
            {/* Draw a vertical reference line at the disruption point manually via customized component if needed, or rely on visual divergence */}
          </AreaChart>
        </ResponsiveContainer>
      </div>

      <div className="mt-4 p-3 bg-black bg-opacity-30 border border-gray-800 rounded-md flex items-start gap-3">
         <TrendingDown size={18} className="text-warning-amber mt-0.5" shrink-0="true"/>
         <p className="text-xs text-muted">Notice how the gray line flatlines at 3 PM during the disruption. The GigShield algorithmic payout kicks in instantly, keeping your daily earnings trajectory (purple line) on pace.</p>
      </div>
    </div>
  );
};

export default IncomeProtectionGraph;
