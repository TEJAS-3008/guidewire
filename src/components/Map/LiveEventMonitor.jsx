import React from 'react';
import { MapPin, AlertTriangle, Navigation, CloudRain } from 'lucide-react';

const LiveEventMonitor = ({ weather, trustIssues }) => {
  const isRaining = weather === 'heavyRain';
  
  return (
    <div className="glass-card w-full" style={{ padding: 0, overflow: 'hidden' }}>
      <div className="p-4 border-b border-gray-800 flex justify-between items-center bg-black bg-opacity-40">
        <div className="flex items-center gap-3">
          <Navigation size={18} color="var(--brand-primary)" />
          <h3 className="font-bold">Live Risk Topography - Bengaluru</h3>
        </div>
        <div className="flex gap-4">
          <div className="flex items-center gap-2 text-xs text-muted">
            <div className="w-3 h-3 rounded-full bg-red-500 opacity-80"></div> Active Trigger Zone
          </div>
          <div className="flex items-center gap-2 text-xs text-muted">
            <div className="w-3 h-3 rounded-full bg-amber-500 opacity-80"></div> Warning Zone
          </div>
          <div className="flex items-center gap-2 text-xs text-muted">
            <div className="w-3 h-3 bg-purple-500 rounded-sm opacity-80" style={{ boxShadow: '0 0 8px rgba(168, 85, 247, 0.8)' }}></div> Fraud Cluster
          </div>
        </div>
      </div>
      
      {/* Map Container Simulation using CSS Grid/Absolute positioning */}
      <div className="relative w-full" style={{ height: '400px', background: '#0f111a', backgroundImage: 'radial-gradient(circle at center, #1a1c29 0%, #0a0b10 100%)' }}>
        <div className="map-overlay-grid"></div>

        {/* Central Core (Safe) */}
        {!isRaining && !trustIssues && (
           <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center z-10 p-4 rounded-xl slide-in" style={{ background: 'rgba(16, 185, 129, 0.1)', border: '1px solid rgba(16, 185, 129, 0.3)' }}>
             <p className="text-success-green font-bold">City Clear</p>
             <p className="text-xs text-muted">No parametric triggers active</p>
           </div>
        )}

        {/* Rain Cloud / Zone 4 (Koramangala Trigger) */}
        {isRaining && (
          <>
            {/* Radar Sweep Effect */}
            <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full border border-blue-500 border-opacity-30 transform -translate-x-1/2 -translate-y-1/2 animate-ping z-0" style={{ animationDuration: '3s' }}></div>
            
            <div className="absolute top-1/4 left-1/4 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 rounded-full flex flex-col items-center justify-center z-10" style={{ background: 'radial-gradient(circle, rgba(59, 130, 246, 0.2) 0%, transparent 70%)' }}>
               <div className="absolute inset-0 border-2 border-red-500 border-dashed rounded-full animate-[spin_10s_linear_infinite] opacity-50"></div>
               <div className="bg-red-500 bg-opacity-80 text-white px-3 py-1 rounded-full text-xs font-bold mb-2 flex items-center gap-1 shadow-[0_0_15px_rgba(239,68,68,0.6)]">
                 <CloudRain size={12} /> Zone 4: Heavy Rain
               </div>
               <p className="text-xs font-bold text-center">142 Gig Workers Auto-Claiming</p>
            </div>
            
            {/* Map Worker Nodes in Zone 4 */}
            <div className="absolute top-[20%] left-[22%] w-2 h-2 bg-blue-400 rounded-full animate-pulse shadow-[0_0_8px_#60a5fa] z-10"></div>
            <div className="absolute top-[28%] left-[26%] w-2 h-2 bg-blue-400 rounded-full animate-pulse shadow-[0_0_8px_#60a5fa] z-10" style={{ animationDelay: '0.2s' }}></div>
            <div className="absolute top-[24%] left-[30%] w-2 h-2 bg-blue-400 rounded-full animate-pulse shadow-[0_0_8px_#60a5fa] z-10" style={{ animationDelay: '0.5s' }}></div>
            <div className="absolute top-[25%] left-[20%] w-2 h-2 bg-blue-400 rounded-full animate-pulse shadow-[0_0_8px_#60a5fa] z-10" style={{ animationDelay: '0.7s' }}></div>
          </>
        )}

        {/* Warning Zone (HSR Layout) */}
        {weather === 'warning' && (
          <div className="absolute bottom-1/3 right-1/4 transform translate-x-1/2 translate-y-1/2 w-48 h-48 rounded-full flex flex-col items-center justify-center z-10" style={{ background: 'radial-gradient(circle, rgba(245, 158, 11, 0.15) 0%, transparent 70%)' }}>
             <div className="absolute inset-0 border border-amber-500 opacity-30 rounded-full"></div>
             <div className="bg-amber-500 bg-opacity-20 text-warning-amber border border-amber-500 px-2 py-1 rounded-sm text-xs font-bold shadow-[0_0_10px_rgba(245,158,11,0.2)]">
               Zone 6 Anticipated Risk
             </div>
          </div>
        )}

        {/* Fraud Cluster Detection */}
        {trustIssues && (
           <div className="absolute bottom-1/4 left-1/3 transform -translate-x-1/2 translate-y-1/2 z-20">
             <div className="relative group cursor-pointer">
               {/* Hexagon/Radar for Fraud */}
               <div className="absolute -inset-8 border border-purple-500 border-opacity-50 blur-[2px] rounded-full animate-pulse-danger" style={{ animationDuration: '1.5s', boxShadow: '0 0 20px rgba(168, 85, 247, 0.5)' }}></div>
               
               <div className="bg-purple-600 bg-opacity-90 border border-purple-400 p-2 rounded-lg flex items-center justify-center flex-col shadow-[0_0_15px_rgba(168,85,247,0.8)]">
                  <AlertTriangle size={24} color="white" />
                  <span className="text-[10px] uppercase font-bold text-white mt-1">Spoofing Ring</span>
               </div>

               {/* Tooltip on hover (simulated by structure, not pure hover state for prototype ease) */}
               <div className="absolute top-full mt-2 w-48 p-3 glass-card text-xs left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity">
                  <p className="font-bold text-danger-red mb-1">High Probability Fraud</p>
                  <p className="text-muted">34 devices reporting identical spoofed GPS coordinates bypassing weather API.</p>
               </div>
             </div>
           </div>
        )}
      </div>
    </div>
  );
};

export default LiveEventMonitor;
