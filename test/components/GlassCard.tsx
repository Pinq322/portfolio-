
import React from 'react';

const GlassCard: React.FC<{ children: React.ReactNode; className?: string }> = ({ children, className = '' }) => (
  <div className={`relative overflow-hidden bg-white/60 dark:bg-[#141414]/80 backdrop-blur-xl border border-black/5 dark:border-white/5 rounded-[2.5rem] transition-all duration-500 hover:shadow-2xl hover:border-brand/30 group ${className}`}>
    <div className="absolute -top-24 -right-24 w-64 h-64 bg-brand/5 blur-[80px] rounded-full pointer-events-none group-hover:bg-brand/10 transition-all duration-500" />
    {children}
  </div>
);

export default GlassCard;
