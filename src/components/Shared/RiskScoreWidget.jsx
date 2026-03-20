import React from 'react';
import { Activity, Droplets, Wind, CloudFog } from 'lucide-react';

const RiskScoreWidget = ({ score }) => {
  const getRiskColor = (val) => {
    if (val > 80) return 'var(--danger-red)';
    if (val > 50) return 'var(--warning-amber)';
    return 'var(--success-green)';
  };

  const riskFactors = [
    { label: 'Rainfall Risk (62mm/hr)', val: score > 50 ? 95 : 20, icon: <Droplets size={16}/> },
    { label: 'Flood Risk (Zone 4)', val: score > 50 ? 70 : 15, icon: <Activity size={16}/> },
    { label: 'Pollution AQI (>300)', val: 40, icon: <CloudFog size={16}/> },
    { label: 'Disruption History', val: 60, icon: <Wind size={16}/> }
  ];

  return (
    <div className="glass-card h-full">
      <div className="glass-card-header mb-6">
        <div>
          <h3 className="text-lg font-bold">Local Risk Breakdown</h3>
          <p className="text-xs text-muted">Real-time parametric assessment</p>
        </div>
        <div className="text-right">
          <span className="text-3xl font-bold text-gradient">{score > 50 ? '82' : '26'}</span>
          <span className="text-sm text-muted">/100</span>
        </div>
      </div>

      <div className="flex flex-col gap-5 mt-4">
        {riskFactors.map((factor, idx) => (
          <div key={idx} className="w-full">
            <div className="flex justify-between items-center mb-2 text-sm">
              <div className="flex items-center gap-2 text-gray-300">
                {factor.icon}
                <span>{factor.label}</span>
              </div>
              <span className="font-bold">{factor.val}%</span>
            </div>
            <div className="w-full bg-gray-800 rounded-full h-1.5 overflow-hidden">
              <div 
                className="h-full rounded-full transition-all duration-1000 ease-out"
                style={{ 
                  width: `${factor.val}%`, 
                  background: getRiskColor(factor.val),
                  boxShadow: `0 0 10px ${getRiskColor(factor.val)}`
                }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RiskScoreWidget;
