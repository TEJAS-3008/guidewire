import React from 'react';
import { Wallet, CreditCard, Clock, CheckCircle2, Package, Info } from 'lucide-react';

const PoliciesWallet = () => {
  const transactions = [
    { id: 'TXN-901', type: 'Credit', desc: 'Weekly Parametric Payout - Rain', amount: '+₹520.00', date: 'Today, 2:30 PM', status: 'completed' },
    { id: 'TXN-882', type: 'Debit', desc: 'Platform Co-Pay Auto Deduct', amount: '-₹15.00', date: 'Yesterday, 9:00 AM', status: 'completed' },
    { id: 'TXN-845', type: 'Credit', desc: 'Weekly Parametric Payout - Heat', amount: '+₹300.00', date: 'Oct 12, 4:15 PM', status: 'completed' },
    { id: 'TXN-801', type: 'Debit', desc: 'Platform Co-Pay Auto Deduct', amount: '-₹15.00', date: 'Oct 08, 9:00 AM', status: 'completed' },
  ];

  return (
    <div className="flex flex-col gap-6 fade-in">
      <header className="mb-2">
        <h2 className="text-3xl font-bold mb-1">Protection Pass & Wallet</h2>
        <p className="text-muted">Manage your active coverage and wallet transactions.</p>
      </header>

      <div className="grid grid-cols-3 gap-6">
        <div className="glass-card col-span-1" style={{ background: 'linear-gradient(135deg, rgba(139, 92, 246, 0.2), rgba(59, 130, 246, 0.2))', border: '1px solid var(--brand-primary)' }}>
          <div className="flex justify-between items-center mb-6">
            <h3 className="font-bold">GigShield Balance</h3>
            <Wallet size={20} color="var(--brand-primary)" />
          </div>
          <p className="text-4xl font-bold mb-2">₹1,240.50</p>
          <div className="text-sm mt-4 text-gray-300 flex items-center justify-between">
            <span>Linked UPI: p.ravi@okaxis</span>
            <CheckCircle2 size={16} className="text-success-green" />
          </div>
          <button className="btn btn-primary w-full mt-6">Withdraw to Bank</button>
        </div>

        <div className="glass-card col-span-2">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-lg font-bold">Active Protection Plan</h3>
            <span className="badge badge-success">ACTIVE</span>
          </div>
          <div className="grid grid-cols-3 gap-4 mb-4">
            <div className="p-4 bg-black bg-opacity-30 rounded-lg border border-gray-800">
              <p className="text-xs text-muted mb-1">Base Pass Price</p>
              <p className="text-xl font-bold">₹30.00 <span className="text-xs text-muted font-normal">/wk</span></p>
            </div>
            <div className="p-4 bg-black bg-opacity-30 rounded-lg border border-gray-800">
              <p className="text-xs text-muted mb-1">Platform Co-Pay</p>
              <p className="text-xl font-bold text-success-green">-₹15.00 <span className="text-xs text-muted font-normal">/wk</span></p>
            </div>
            <div className="p-4 bg-black bg-opacity-30 rounded-lg border border-gray-800">
              <p className="text-xs text-muted mb-1">Your Net Cost</p>
              <p className="text-xl font-bold text-accent-blue">₹15.00 <span className="text-xs text-muted font-normal">/wk</span></p>
            </div>
          </div>
          <div className="mt-2 p-3 bg-brand-primary bg-opacity-10 border border-brand-primary rounded flex items-start gap-3">
             <Info size={16} className="text-brand-primary mt-0.5" shrink-0="true"/>
             <p className="text-xs text-brand-primary font-medium tracking-wide">
               GigShield compensates you for every hour you are unable to work due to verified disruptions. Payouts are dynamically calculated based on your average base earning rate.
             </p>
          </div>
          <p className="text-xs text-muted border-t border-gray-800 pt-4 mt-4">
            Pricing is dynamically calculated based on Zone 4 aggregate historical risk. Co-pay is sponsored by Zomato for active Silver+ tier partners.
          </p>
        </div>
      </div>

      <div className="glass-card mt-2">
        <h3 className="text-lg font-bold mb-4">Recent Ledger Activity</h3>
        <div className="w-full">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="text-xs text-muted border-b border-gray-800">
                <th className="pb-3 px-2 font-bold uppercase tracking-wider">Transaction ID</th>
                <th className="pb-3 px-2 font-bold uppercase tracking-wider">Description</th>
                <th className="pb-3 px-2 font-bold uppercase tracking-wider">Date</th>
                <th className="pb-3 px-2 font-bold uppercase tracking-wider text-right">Amount</th>
              </tr>
            </thead>
            <tbody>
              {transactions.map((txn, idx) => (
                <tr key={idx} className="border-b border-gray-800 hover:bg-white hover:bg-opacity-5 transition-colors">
                  <td className="py-4 px-2 font-mono text-xs">{txn.id}</td>
                  <td className="py-4 px-2 text-sm">
                    <div className="flex items-center gap-2">
                      {txn.type === 'Credit' ? <Package size={14} className="text-success-green"/> : <CreditCard size={14} className="text-warning-amber"/>}
                      {txn.desc}
                    </div>
                  </td>
                  <td className="py-4 px-2 text-sm text-muted">
                    <div className="flex items-center gap-2">
                       <Clock size={12}/> {txn.date}
                    </div>
                  </td>
                  <td className={`py-4 px-2 text-sm text-right font-bold ${txn.type === 'Credit' ? 'text-success-green' : ''}`}>
                    {txn.amount}
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

export default PoliciesWallet;
