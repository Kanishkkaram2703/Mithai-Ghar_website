import React, { useState, useEffect } from 'react';
import { Play, Pause, RotateCcw, CheckCircle2, Clock } from 'lucide-react';

interface StepTimerProps {
  initialMinutes: number;
  label?: string;
  stepNumber: number;
}

export const StepTimer: React.FC<StepTimerProps> = ({
  initialMinutes,
  label = 'Step Timer',
  stepNumber
}) => {
  const totalSeconds = initialMinutes * 60;
  const [secondsRemaining, setSecondsRemaining] = useState(totalSeconds);
  const [isActive, setIsActive] = useState(false);
  const [isCompleted, setIsCompleted] = useState(false);

  useEffect(() => {
    let interval: any = null;
    if (isActive && secondsRemaining > 0) {
      interval = setInterval(() => {
        setSecondsRemaining((prev) => prev - 1);
      }, 1000);
    } else if (secondsRemaining === 0 && isActive) {
      setIsActive(false);
      setIsCompleted(true);
      // Play a soft synthetic beep via Web Audio API if permitted
      try {
        const audioCtx = new (window.AudioContext || (window as any).webkitAudioContext)();
        const osc = audioCtx.createOscillator();
        const gain = audioCtx.createGain();
        osc.connect(gain);
        gain.connect(audioCtx.destination);
        osc.frequency.value = 587.33; // D5 tone
        gain.gain.setValueAtTime(0.1, audioCtx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + 0.8);
        osc.start();
        osc.stop(audioCtx.currentTime + 0.8);
      } catch {
        // AudioContext silent fallback
      }
    }
    return () => clearInterval(interval);
  }, [isActive, secondsRemaining]);

  const toggleTimer = () => {
    if (isCompleted) {
      setSecondsRemaining(totalSeconds);
      setIsCompleted(false);
      setIsActive(true);
    } else {
      setIsActive(!isActive);
    }
  };

  const resetTimer = () => {
    setIsActive(false);
    setIsCompleted(false);
    setSecondsRemaining(totalSeconds);
  };

  const minutes = Math.floor(secondsRemaining / 60);
  const seconds = secondsRemaining % 60;
  const formattedTime = `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
  const progressPercent = ((totalSeconds - secondsRemaining) / totalSeconds) * 100;

  return (
    <div
      className={`mt-3 p-3.5 rounded-lg border transition-all duration-200 ${
        isCompleted
          ? 'bg-[#15803d]/10 border-[#15803d]/30 text-[#15803d]'
          : isActive
          ? 'bg-[#f2a900]/10 border-[#f2a900]/40 text-[#5b1a1a]'
          : 'bg-[#fff8ec] border-[#5b1a1a]/15 text-[#231815]'
      }`}
    >
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div className="flex items-center gap-2">
          <Clock size={16} className={isCompleted ? 'text-[#15803d]' : 'text-[#e8590c]'} />
          <span className="text-xs font-semibold uppercase tracking-wider text-[#5b1a1a]">
            {label} ({initialMinutes} min)
          </span>
        </div>

        {/* Digital Time & Controls */}
        <div className="flex items-center gap-3">
          <div className="text-sm font-mono font-bold tabular-nums tracking-wider px-2.5 py-1 bg-white rounded border border-[#5b1a1a]/15 shadow-2xs">
            {isCompleted ? (
              <span className="flex items-center gap-1 text-[#15803d]">
                <CheckCircle2 size={15} /> Done!
              </span>
            ) : (
              formattedTime
            )}
          </div>

          <div className="flex items-center gap-1">
            <button
              onClick={toggleTimer}
              className={`p-1.5 rounded transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#f2a900] ${
                isActive
                  ? 'bg-[#e8590c] text-white hover:bg-[#c2410c]'
                  : 'bg-[#5b1a1a] text-[#fff8ec] hover:bg-[#3a1010]'
              }`}
              aria-label={isActive ? `Pause step ${stepNumber} timer` : `Start step ${stepNumber} timer`}
              title={isActive ? 'Pause' : 'Start'}
            >
              {isActive ? <Pause size={13} /> : <Play size={13} />}
            </button>

            <button
              onClick={resetTimer}
              className="p-1.5 rounded text-[#5b1a1a] hover:bg-[#5b1a1a]/10 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#5b1a1a]"
              aria-label={`Reset step ${stepNumber} timer`}
              title="Reset"
            >
              <RotateCcw size={13} />
            </button>
          </div>
        </div>
      </div>

      {/* Progress Track */}
      {(isActive || secondsRemaining < totalSeconds) && (
        <div className="mt-2.5 w-full bg-[#5b1a1a]/10 h-1.5 rounded-full overflow-hidden">
          <div
            className={`h-full transition-all duration-300 ${
              isCompleted ? 'bg-[#15803d]' : 'bg-[#e8590c]'
            }`}
            style={{ width: `${progressPercent}%` }}
          />
        </div>
      )}
    </div>
  );
};
