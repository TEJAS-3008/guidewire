import React from 'react';
import { Shield, ShieldAlert, CheckCircle2, AlertTriangle, Zap, TrendingUp, Clock } from 'lucide-react';
import RiskScoreWidget from '../Shared/RiskScoreWidget';
import TrustScoreWidget from '../Shared/TrustScoreWidget';
import IncomeProtectionGraph from './IncomeProtectionGraph';

const WorkerDashboard = ({ simulationState, setSimulationState }) => {
  const { weather, claimStatus, trustIssues, elapsedSeconds, accumulatedPayout, simulatedHours } = simulationState;

  const getPolicyStatus = () => {
    if (weather === 'heavyRain') return { text: 'ACTIVE - EARNINGS PROTECTED', color: 'var(--accent-blue)', bg: 'rgba(59, 130, 246, 0.15)' };
    return { text: 'ACTIVE', color: 'var(--success-green)', bg: 'rgba(16, 185, 129, 0.15)' };
  };

  const currentRiskLevel = weather === 'heavyRain' ? 'HIGH' : weather === 'warning' ? 'MEDIUM' : 'LOW';
  
  return (
    <div className="flex flex-col gap-6">
      <header className="flex justify-between items-end mb-2">
        <div>
          <h2 className="text-3xl font-bold mb-1">Overview</h2>
          <p className="text-muted">Monitor your coverage and recent parametric events.</p>
        </div>
        <div className="flex items-center gap-4">
          <div className="text-right">
            <p className="text-xs text-muted uppercase tracking-wider font-bold mb-1">Weekly Pass Price</p>
            <p className="text-xl font-bold">₹35.00</p>
          </div>
          <div className="h-10 w-px bg-gray-800"></div>
          <div className="text-right">
            <p className="text-xs text-muted uppercase tracking-wider font-bold mb-1">Savings This Month</p>
            <p className="text-xl font-bold text-success-green flex items-center gap-1 justify-end"><TrendingUp size={16}/> ₹1,240</p>
          </div>
        </div>
      </header>

      {/* Hero Stats */}
      <div className="grid grid-cols-3 gap-6">
        <div className="glass-card flex flex-col justify-between">
          <div className="flex justify-between items-start mb-4">
            <div className="flex items-center gap-2">
              <Shield size={20} color={getPolicyStatus().color} />
              <span className="font-bold">Protection Pass</span>
            </div>
            <span className="badge" style={{ background: getPolicyStatus().bg, color: getPolicyStatus().color }}>
              {getPolicyStatus().text}
            </span>
          </div>
          <div>
            <p className="text-sm text-muted mb-1">Zone 4 (Koramangala, BLR)</p>
            <p className="text-xs text-success-green mt-4 font-bold">Your earnings are protected this week</p>
          </div>
        </div>

        <div className="glass-card flex flex-col justify-between" style={currentRiskLevel === 'HIGH' ? { borderColor: 'var(--danger-red)', boxShadow: '0 0 15px rgba(239, 68, 68, 0.15)' } : {}}>
          <div className="flex justify-between items-start mb-4">
            <div className="flex items-center gap-2">
              <AlertTriangle size={20} color={currentRiskLevel === 'HIGH' ? 'var(--danger-red)' : 'var(--warning-amber)'} />
              <span className="font-bold">Today's Risk Level</span>
            </div>
            <span className={`badge ${currentRiskLevel === 'HIGH' ? 'badge-danger' : currentRiskLevel === 'MEDIUM' ? 'badge-warning' : 'badge-success'}`}>
              {currentRiskLevel}
            </span>
          </div>
          <div>
            <div className="w-full bg-gray-800 rounded-full h-2 mb-2">
              <div 
                className="h-2 rounded-full transition-all duration-1000" 
                style={{ 
                  width: currentRiskLevel === 'HIGH' ? '90%' : currentRiskLevel === 'MEDIUM' ? '60%' : '15%',
                  background: currentRiskLevel === 'HIGH' ? 'var(--danger-red)' : currentRiskLevel === 'MEDIUM' ? 'var(--warning-amber)' : 'var(--success-green)'
                }}
              ></div>
            </div>
            <p className="text-xs text-muted text-right">Updated 5 min ago</p>
          </div>
        </div>

        <div className="glass-card flex flex-col justify-between">
          <div className="flex justify-between items-start mb-4">
            <div className="flex items-center gap-2">
              <ShieldAlert size={20} color="var(--brand-primary)" />
              <span className="font-bold">Trust Score</span>
            </div>
            <span className={`badge ${trustIssues ? 'badge-warning' : 'badge-success'}`}>
              {trustIssues ? '72/100' : '98/100'}
            </span>
          </div>
          <div>
             <p className="text-sm text-muted mb-1">{trustIssues ? 'Verification Recommended' : 'Excellent Standing'}</p>
             <p className="text-xs text-muted mt-4">Higher score = Faster auto-claims</p>
          </div>
        </div>
      </div>

      {/* Hourly Payout Engine Calculation Block */}
      {claimStatus !== 'none' && (
        <div className="glass-card mt-4 mb-4" style={{ 
          background: 'linear-gradient(to right, rgba(59, 130, 246, 0.05), rgba(139, 92, 246, 0.05))',
          border: '1px solid var(--brand-primary)',
          boxShadow: '0 0 20px rgba(139, 92, 246, 0.15)'
        }}>
          <div className="flex flex-col p-6">
            <div className="flex justify-between items-center mb-6 pb-4 border-b border-gray-800">
               <h3 className="text-xl font-bold flex items-center gap-3">
                 {claimStatus === 'calculating' ? <div className="w-3 h-3 rounded-full bg-brand-primary animate-ping"></div> : <CheckCircle2 className="text-success-green" />}
                 Hourly Payout Calculation
               </h3>
               {claimStatus === 'calculating' && (
                 <div className="flex items-center gap-2 bg-brand-primary bg-opacity-20 text-brand-primary px-4 py-2 rounded-full font-mono text-lg font-bold shadow-[0_0_15px_rgba(139,92,246,0.3)]">
                   <Clock size={18} />
                   {String(Math.floor(elapsedSeconds / 3600)).padStart(2, '0')}:
                   {String(Math.floor((elapsedSeconds % 3600) / 60)).padStart(2, '0')}:
                   {String(elapsedSeconds % 60).padStart(2, '0')}
                 </div>
               )}
            </div>

            <div className="grid grid-cols-2 gap-8">
               <div className="space-y-4">
                  <div className="flex justify-between items-center bg-black bg-opacity-30 p-3 rounded border border-gray-800">
                     <span className="text-muted text-sm">Event Type</span>
                     <span className="font-bold text-sm text-accent-blue">Heavy Rain (Zone 4)</span>
                  </div>
                  <div className="flex justify-between items-center bg-black bg-opacity-30 p-3 rounded border border-gray-800">
                     <span className="text-muted text-sm">Verified Duration</span>
                     <span className="font-bold text-sm">{claimStatus === 'calculating' ? (elapsedSeconds / 3600).toFixed(2) : simulatedHours} hours</span>
                  </div>
                  <div className="flex justify-between items-center bg-black bg-opacity-30 p-3 rounded border border-gray-800">
                     <span className="text-muted text-sm flex items-center gap-2">Your Hourly Earnings</span>
                     <span className="font-bold text-sm">₹110/hour</span>
                  </div>
                  <div className="flex justify-between items-center bg-brand-primary bg-opacity-10 p-3 rounded border border-brand-primary">
                     <span className="font-bold text-brand-primary">Estimated Payout</span>
                     <span className="text-2xl font-bold text-gradient">₹{accumulatedPayout}</span>
                  </div>
               </div>
               
               <div className="flex flex-col items-center justify-center p-6 border border-gray-800 rounded-xl bg-black bg-opacity-40 text-center relative overflow-hidden">
                  {claimStatus === 'calculating' && (
                     <div className="fade-in">
                       <div className="w-14 h-14 rounded-full border-4 border-t-brand-primary border-r-brand-secondary border-b-gray-800 border-l-gray-800 animate-spin mx-auto mb-4"></div>
                       <h3 className="text-lg font-bold mb-2">Live Accumulation Active</h3>
                       <p className="text-muted text-xs">Monitoring weather APIs and telemetry...</p>
                       <div className="mt-4 p-2 bg-blue-500 bg-opacity-10 border border-blue-500 rounded text-left">
                          <p className="text-xs text-accent-blue font-bold flex items-center gap-1"><Zap size={12}/> AI Prediction Engine</p>
                          <p className="text-[10px] text-gray-300 mt-1">Event expected to last ~{simulatedHours} hours based on current satellite trajectory.</p>
                       </div>
                     </div>
                  )}
                  
                  {claimStatus === 'paid' && (
                     <div className="fade-in slide-in w-full text-center">
                        <div className="w-14 h-14 rounded-full bg-green-500 bg-opacity-20 flex items-center justify-center mx-auto mb-3 shadow-[0_0_20px_rgba(16,185,129,0.3)]">
                          <CheckCircle2 size={24} color="var(--success-green)" />
                        </div>
                        <h3 className="text-2xl font-bold text-success-green mb-1">You saved ₹{accumulatedPayout} today</h3>
                        <p className="text-muted text-xs mb-4">Protected by GigShield. Credited instantly to UPI.</p>
                        <div className="bg-black bg-opacity-60 px-4 py-2 rounded-md font-mono text-xs border border-gray-800 inline-flex items-center justify-center gap-2">
                          <Zap size={12} className="text-amber-400" /> Txn: GFX-HR-921
                        </div>
                     </div>
                  )}

                  {claimStatus === 'manual_review' && (
                     <div className="fade-in slide-in w-full text-center">
                        <div className="w-14 h-14 rounded-full bg-amber-500 bg-opacity-20 flex items-center justify-center mx-auto mb-3">
                          <AlertTriangle size={24} color="var(--warning-amber)" />
                        </div>
                        <h3 className="text-lg font-bold text-warning-amber mb-1">Verification Required</h3>
                        <p className="text-muted text-xs mb-4">Trust Score (72) requires quick validation for ₹{accumulatedPayout} payout.</p>
                        <button className="btn btn-outline border-warning-amber text-warning-amber text-xs py-1.5 px-4 w-full">Submit Context Photo</button>
                     </div>
                  )}
               </div>
            </div>
          </div>
        </div>
      )}

      {/* Income Protection Visualizer */}
      <IncomeProtectionGraph isRaining={weather === 'heavyRain'} />

      {/* Detail Panels */}
      <div className="grid grid-cols-2 gap-6 mt-4">
        <RiskScoreWidget score={weather === 'heavyRain' ? 95 : 26} />
        <TrustScoreWidget trustIssues={trustIssues} />
      </div>
      
    </div>
  );
};

export default WorkerDashboard;
