import React from 'react';
import { motion, useReducedMotion } from 'motion/react';

interface DiyaProps {
  delay?: number;
  scale?: number;
  intensity?: number;
}

export const SingleDiya: React.FC<DiyaProps> = ({ delay = 0, scale = 1, intensity = 1 }) => {
  const prefersReducedMotion = useReducedMotion();

  return (
    <div
      className="relative flex flex-col items-center select-none"
      style={{ transform: `scale(${scale})` }}
      aria-hidden="true"
    >
      {/* Soft radial glow under flame */}
      <motion.div
        className="absolute -top-7 w-16 h-16 rounded-full pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(242,169,0,0.45) 0%, rgba(232,89,12,0.18) 45%, transparent 75%)',
          filter: 'blur(8px)'
        }}
        animate={
          prefersReducedMotion
            ? {}
            : {
                opacity: [0.7 * intensity, 1 * intensity, 0.65 * intensity, 0.95 * intensity, 0.7 * intensity],
                scale: [0.95, 1.08, 0.92, 1.04, 0.95]
              }
        }
        transition={{
          duration: 2.2 + (delay % 0.8),
          repeat: Infinity,
          ease: 'easeInOut',
          delay
        }}
      />

      {/* Flickering Flame */}
      <motion.div
        className="relative z-10 origin-bottom"
        animate={
          prefersReducedMotion
            ? {}
            : {
                scaleY: [1, 1.14, 0.92, 1.1, 0.97, 1],
                scaleX: [1, 0.93, 1.06, 0.95, 1.03, 1],
                rotate: [-0.8, 1.2, -1.8, 1.4, -0.6, 0],
                opacity: [0.94, 1, 0.88, 1, 0.92]
              }
        }
        transition={{
          duration: 1.6 + (delay % 0.6),
          repeat: Infinity,
          ease: 'easeInOut',
          delay
        }}
      >
        <svg width="22" height="34" viewBox="0 0 22 34" fill="none">
          {/* Outer orange flame */}
          <path
            d="M11 0C11 0 2 12 2 22C2 27.5 6 32 11 32C16 32 20 27.5 20 22C20 12 11 0 11 0Z"
            fill="url(#outerFlameGrad)"
          />
          {/* Inner intense yellow flame */}
          <path
            d="M11 7C11 7 5.5 15 5.5 23C5.5 26.5 8 29.5 11 29.5C14 29.5 16.5 26.5 16.5 23C16.5 15 11 7 11 7Z"
            fill="url(#innerFlameGrad)"
          />
          {/* Hot core point */}
          <ellipse cx="11" cy="25" rx="2.5" ry="4" fill="#ffffff" opacity="0.85" />

          <defs>
            <linearGradient id="outerFlameGrad" x1="11" y1="0" x2="11" y2="32" gradientUnits="userSpaceOnUse">
              <stop stopColor="#f2a900" />
              <stop offset="0.4" stopColor="#e8590c" />
              <stop offset="1" stopColor="#5b1a1a" stopOpacity="0.8" />
            </linearGradient>
            <linearGradient id="innerFlameGrad" x1="11" y1="7" x2="11" y2="29.5" gradientUnits="userSpaceOnUse">
              <stop stopColor="#ffffff" />
              <stop offset="0.3" stopColor="#fff8ec" />
              <stop offset="0.7" stopColor="#f2a900" />
              <stop offset="1" stopColor="#e8590c" />
            </linearGradient>
          </defs>
        </svg>
      </motion.div>

      {/* Cotton Wick tip */}
      <div className="w-0.5 h-1.5 bg-[#231815] -mt-1 z-10 rounded-full" />

      {/* Clay / Brass Lamp Body */}
      <svg width="48" height="24" viewBox="0 0 48 24" fill="none" className="z-10 -mt-0.5 drop-shadow-sm">
        {/* Lamp Base */}
        <path
          d="M2 7C4 16 12 22 24 22C36 22 44 16 46 7C42 10 33 11 24 11C15 11 6 10 2 7Z"
          fill="url(#clayGrad)"
          stroke="#78350f"
          strokeWidth="0.75"
        />
        {/* Rim detailing */}
        <path
          d="M2 7C8 9.5 16 11 24 11C32 11 40 9.5 46 7C40 4.5 32 3 24 3C16 3 8 4.5 2 7Z"
          fill="#b45309"
          stroke="#f2a900"
          strokeWidth="0.5"
        />
        {/* Center oil reservoir dip */}
        <ellipse cx="24" cy="7" rx="14" ry="2.5" fill="#78350f" />
        <ellipse cx="24" cy="6.8" rx="11" ry="1.6" fill="#f2a900" fillOpacity="0.4" />
        {/* Traditional base foot */}
        <path d="M18 21.5C21 23 27 23 30 21.5L28 23.5H20L18 21.5Z" fill="#78350f" />

        <defs>
          <linearGradient id="clayGrad" x1="2" y1="7" x2="46" y2="22" gradientUnits="userSpaceOnUse">
            <stop stopColor="#b45309" />
            <stop offset="0.5" stopColor="#9a3412" />
            <stop offset="1" stopColor="#5b1a1a" />
          </linearGradient>
        </defs>
      </svg>

      {/* Under-diya warm tabletop cast shadow */}
      <div className="w-12 h-1.5 bg-[#180a0a]/50 rounded-full blur-[2px] mt-0.5" />
    </div>
  );
};

export const DiyaRow: React.FC<{ count?: number; className?: string }> = ({ count = 5, className = '' }) => {
  const diyas = Array.from({ length: count }, (_, i) => ({
    id: i,
    delay: i * 0.28,
    scale: i === Math.floor(count / 2) ? 1.15 : i === 0 || i === count - 1 ? 0.9 : 1.02
  }));

  const prefersReducedMotion = useReducedMotion();

  // Floating golden sparks
  const sparks = [
    { id: 1, left: '15%', delay: 0, duration: 4.5, size: 3 },
    { id: 2, left: '28%', delay: 1.2, duration: 5.2, size: 2 },
    { id: 3, left: '42%', delay: 0.5, duration: 4.8, size: 2.5 },
    { id: 4, left: '55%', delay: 2.1, duration: 5.5, size: 3 },
    { id: 5, left: '70%', delay: 1.7, duration: 4.2, size: 2 },
    { id: 6, left: '84%', delay: 0.8, duration: 5.0, size: 2.5 }
  ];

  return (
    <div className={`relative flex items-center justify-center gap-6 sm:gap-10 md:gap-14 py-4 select-none ${className}`}>
      {/* Drifting Golden Sparks */}
      {!prefersReducedMotion && (
        <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
          {sparks.map((spark) => (
            <motion.div
              key={spark.id}
              className="absolute rounded-full bg-[#f2a900]"
              style={{
                left: spark.left,
                bottom: '20px',
                width: `${spark.size}px`,
                height: `${spark.size}px`,
                boxShadow: '0 0 6px #f2a900, 0 0 10px #e8590c'
              }}
              animate={{
                y: [-10, -70, -120],
                x: [0, (spark.id % 2 === 0 ? 12 : -12), (spark.id % 2 === 0 ? -8 : 8)],
                opacity: [0, 0.9, 0]
              }}
              transition={{
                duration: spark.duration,
                repeat: Infinity,
                delay: spark.delay,
                ease: 'easeOut'
              }}
            />
          ))}
        </div>
      )}

      {/* Row of Flickering Diyas */}
      {diyas.map((diya) => (
        <SingleDiya key={diya.id} delay={diya.delay} scale={diya.scale} />
      ))}
    </div>
  );
};
