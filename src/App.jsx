import React, { useState, useEffect } from 'react';
import Sidebar from './components/Layout/Sidebar';
import WorkerDashboard from './components/Worker/WorkerDashboard';
import PoliciesWallet from './components/Worker/PoliciesWallet';
import ClaimHistory from './components/Worker/ClaimHistory';
import AdminDashboard from './components/Admin/AdminDashboard';
import FraudDetection from './components/Admin/FraudDetection';
import TopBannerAlert from './components/Shared/TopBannerAlert';
import SimulationControls from './components/Simulations/SimulationControls';
import './index.css';

function App() {
  const [view, setView] = useState('worker'); // 'worker', 'admin', etc.
  const [simulationState, setSimulationState] = useState({
    weather: 'clear', // clear, warning, heavyRain
    claimStatus: 'none', // none, calculating, approved, paid, manual_review
    trustIssues: false,
    simulatedHours: 3,
    elapsedSeconds: 0, 
    accumulatedPayout: 0
  });

  const HOURLY_RATE = 110;

  // Handle auto-claim progression based on logic
  useEffect(() => {
    let interval;
    if (simulationState.weather === 'heavyRain' && simulationState.claimStatus !== 'paid' && simulationState.claimStatus !== 'manual_review') {
      
      const MAX_SECONDS = simulationState.simulatedHours * 3600; // Simulated target
      const INCREMENT = 240; // Real-time UI speed factor (simulates fast)

      interval = setInterval(() => {
        setSimulationState(prev => {
          const nextSeconds = prev.elapsedSeconds + INCREMENT;
          const currentHours = nextSeconds / 3600;
          const currentPayout = Math.min(Math.round((currentHours * HOURLY_RATE) / 10) * 10, 1500); // Rounded to nearest 10
          
          if (nextSeconds >= MAX_SECONDS) {
            clearInterval(interval);
            return {
              ...prev,
              elapsedSeconds: MAX_SECONDS,
              accumulatedPayout: currentPayout,
              claimStatus: prev.trustIssues ? 'manual_review' : 'paid'
            };
          }

          return {
            ...prev,
            elapsedSeconds: nextSeconds,
            accumulatedPayout: currentPayout,
            claimStatus: 'calculating'
          };
        });
      }, 50); // Runs every 50ms for visual effect
    }
    
    return () => {
      if (interval) clearInterval(interval);
    };
  }, [simulationState.weather, simulationState.claimStatus, simulationState.trustIssues, simulationState.simulatedHours]);

  const triggerEvent = (event, hours = 3) => {
    if (event === 'rain') {
      setSimulationState(prev => ({ 
        ...prev, 
        weather: 'heavyRain', 
        claimStatus: 'calculating', 
        simulatedHours: hours,
        elapsedSeconds: 0,
        accumulatedPayout: 0
      }));
    } else if (event === 'reset') {
      setSimulationState(prev => ({ 
        ...prev,
        weather: 'clear', 
        claimStatus: 'none', 
        elapsedSeconds: 0,
        accumulatedPayout: 0
      }));
    } else if (event === 'fraud') {
      setSimulationState(prev => ({ ...prev, trustIssues: !prev.trustIssues }));
    }
  };

  return (
    <div className="app-container">
      <Sidebar currentView={view} setView={setView} />
      
      <main className="main-content">
        {simulationState.weather === 'heavyRain' && (
          <TopBannerAlert 
            type="danger" 
            message="Heavy Rain Alert — Your Protection Pass is Active in Zone 4" 
          />
        )}
        
        {simulationState.weather === 'warning' && (
          <TopBannerAlert 
            type="warning" 
            message="High Risk Expected Tomorrow (Monsoon Incoming) — Activate coverage now" 
            action={{ label: "Activate", onClick: () => {} }}
          />
        )}

        <div className="page-container fade-in">
          {view === 'worker' && <WorkerDashboard simulationState={simulationState} setSimulationState={setSimulationState} />}
          {view === 'wallet' && <PoliciesWallet />}
          {view === 'history' && <ClaimHistory />}
          {view === 'admin' && <AdminDashboard simulationState={simulationState} />}
          {view === 'fraud' && <FraudDetection />}
        </div>
      </main>

      <SimulationControls 
        onTrigger={triggerEvent} 
        currentState={simulationState} 
      />
    </div>
  );
}

export default App;
