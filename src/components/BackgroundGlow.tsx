import React from 'react';

export const BackgroundGlow: React.FC = () => {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {/* Top ambient glow */}
      <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-gradient-to-b from-purple-600/15 via-indigo-600/10 to-transparent blur-[120px] rounded-full" />

      {/* Subtle blue accent glow */}
      <div className="absolute top-1/3 -right-40 w-[500px] h-[500px] bg-cyan-500/8 blur-[140px] rounded-full" />

      {/* Subtle purple accent glow on left */}
      <div className="absolute top-2/3 -left-40 w-[550px] h-[550px] bg-purple-600/8 blur-[140px] rounded-full" />

      {/* Subtle grid pattern overlay */}
      <div
        className="absolute inset-0 opacity-[0.02] bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:24px_24px]"
        aria-hidden="true"
      />
    </div>
  );
};
