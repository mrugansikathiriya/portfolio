import React from 'react';

interface BadgeProps {
  children: React.ReactNode;
  variant?: 'default' | 'accent' | 'purple' | 'blue' | 'success';
  size?: 'sm' | 'md';
  className?: string;
}

export const Badge: React.FC<BadgeProps> = ({
  children,
  variant = 'default',
  size = 'md',
  className = '',
}) => {
  const sizeStyles = {
    sm: 'text-xs px-2.5 py-0.5',
    md: 'text-xs md:text-sm px-3 py-1',
  };

  const variantStyles = {
    default:
      'bg-slate-800/80 text-slate-300 border border-slate-700/60 hover:border-slate-600',
    accent:
      'bg-purple-500/10 text-purple-300 border border-purple-500/25',
    purple:
      'bg-purple-500/15 text-purple-200 border border-purple-500/30',
    blue:
      'bg-cyan-500/10 text-cyan-300 border border-cyan-500/25',
    success:
      'bg-emerald-500/10 text-emerald-300 border border-emerald-500/25',
  };

  return (
    <span
      className={`inline-flex items-center gap-1.5 font-medium rounded-lg transition-colors ${sizeStyles[size]} ${variantStyles[variant]} ${className}`}
    >
      {children}
    </span>
  );
};
