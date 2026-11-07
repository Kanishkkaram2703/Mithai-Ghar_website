import React from 'react';

interface PatternDividerProps {
  className?: string;
  variant?: 'rangoli' | 'paisley' | 'minimal';
  color?: string;
}

export const PatternDivider: React.FC<PatternDividerProps> = ({
  className = '',
  variant = 'rangoli',
  color = '#e8590c'
}) => {
  if (variant === 'minimal') {
    return (
      <div className={`flex items-center justify-center gap-3 py-6 ${className}`} aria-hidden="true">
        <div className="h-px w-16 bg-[#5b1a1a]/20" />
        <div className="h-2 w-2 rotate-45 border border-[#e8590c] bg-[#f2a900]" />
        <div className="h-px w-16 bg-[#5b1a1a]/20" />
      </div>
    );
  }

  if (variant === 'paisley') {
    return (
      <div className={`flex items-center justify-center gap-4 py-8 opacity-80 ${className}`} aria-hidden="true">
        <div className="h-px w-20 md:w-32 bg-gradient-to-r from-transparent via-[#5b1a1a]/30 to-[#e8590c]/50" />
        <svg width="40" height="24" viewBox="0 0 40 24" fill="none" className="shrink-0">
          <path
            d="M20 2C15 2 10 7 12 14C13.5 19 19 22 23 21C27 20 28 15 26 12C24 9 20 10 20 12C20 13.5 21.5 14.5 22.5 13.5"
            stroke={color}
            strokeWidth="1.5"
            strokeLinecap="round"
          />
          <circle cx="20" cy="12" r="1.5" fill={color} />
          <circle cx="8" cy="12" r="1.5" fill="#f2a900" />
          <circle cx="32" cy="12" r="1.5" fill="#f2a900" />
        </svg>
        <div className="h-px w-20 md:w-32 bg-gradient-to-l from-transparent via-[#5b1a1a]/30 to-[#e8590c]/50" />
      </div>
    );
  }

  // Rangoli geometric pattern divider
  return (
    <div className={`flex items-center justify-center gap-4 py-8 ${className}`} aria-hidden="true">
      <div className="h-px flex-1 max-w-xs bg-gradient-to-r from-transparent via-[#5b1a1a]/25 to-[#f2a900]/60" />
      <svg width="64" height="28" viewBox="0 0 64 28" fill="none" className="shrink-0 text-[#f2a900]">
        <circle cx="32" cy="14" r="3" fill="#f2a900" />
        <circle cx="32" cy="14" r="8" stroke="#e8590c" strokeWidth="1" strokeDasharray="2 2" />
        <path d="M32 2L35 11L44 14L35 17L32 26L29 17L20 14L29 11Z" stroke="#5b1a1a" strokeWidth="1" />
        <circle cx="12" cy="14" r="2" fill="#e8590c" />
        <circle cx="52" cy="14" r="2" fill="#e8590c" />
        <path d="M4 14H10M54 14H60" stroke="#f2a900" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
      <div className="h-px flex-1 max-w-xs bg-gradient-to-l from-transparent via-[#5b1a1a]/25 to-[#f2a900]/60" />
    </div>
  );
};
