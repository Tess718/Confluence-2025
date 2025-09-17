'use client';

import { useState, useEffect } from 'react';

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

interface TimeUnit {
  label: string;
  value: number;
}

const CountdownTimer: React.FC = () => {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });
  
  // Set your target date and time here
  const targetDate: string = '2025-11-07T00:00:00';
  const [title, setTitle] = useState<string>('Upcoming Event');

  useEffect(() => {
    const interval: NodeJS.Timeout = setInterval(() => {
      const now: number = new Date().getTime();
      const target: number = new Date(targetDate).getTime();
      const difference: number = target - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000)
        });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [targetDate]);

  const timeUnits: TimeUnit[] = [
    { label: 'Days', value: timeLeft.days },
    { label: 'Hours', value: timeLeft.hours },
    { label: 'Minutes', value: timeLeft.minutes },
    { label: 'Seconds', value: timeLeft.seconds }
  ];

  return (
    <div className="max-sm:-mt-20 relative z-30 flex items-center justify-center p-4">
      <div className="bg-conblue rounded-3xl p-8 shadow-2xl border border-white/20 max-w-4xl w-full">

        {/* Countdown Display */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {timeUnits.map((unit: TimeUnit, index: number) => (
            <div key={index} className="text-center">
              <div className="bg-white/15 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-white/20 hover:bg-white/20 transition-all duration-300">
                <div className="text-4xl md:text-5xl font-bold text-white mb-2 font-mono">
                  {unit.value.toString().padStart(2, '0')}
                </div>
                <div className="text-white/80 text-sm md:text-base font-medium uppercase tracking-wide">
                  {unit.label}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CountdownTimer;