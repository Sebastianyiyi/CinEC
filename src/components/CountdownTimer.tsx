import { useEffect, useState, useCallback } from "react";

interface CountdownTimerProps {
  targetDate: string;
}

const CountdownTimer = ({ targetDate }: CountdownTimerProps) => {
  const calculateTimeLeft = useCallback(() => {
    const diff = new Date(targetDate).getTime() - Date.now();
    
    if (diff <= 0) {
      return { days: 0, hours: 0, minutes: 0, seconds: 0, isExpired: true };
    }

    return {
      days: Math.floor(diff / (1000 * 60 * 60 * 24)),
      hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((diff / (1000 * 60)) % 60),
      seconds: Math.floor((diff / 1000) % 60),
      isExpired: false,
    };
  }, [targetDate]);

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      const updatedTime = calculateTimeLeft();
      setTimeLeft(updatedTime);
      
      if (updatedTime.isExpired) {
        clearInterval(timer);
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [calculateTimeLeft]);

  if (timeLeft.isExpired) {
    return (
      <div className="inline-flex items-center px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold uppercase tracking-wider animate-pulse">
        ¡Ya disponible!
      </div>
    );
  }

  const formatNumber = (num: number) => num.toString().padStart(2, '0');

  const timeBlocks = [
    { label: "días", value: timeLeft.days },
    { label: "hrs", value: formatNumber(timeLeft.hours) },
    { label: "min", value: formatNumber(timeLeft.minutes) },
    { label: "seg", value: formatNumber(timeLeft.seconds) },
  ];

  return (
    <div className="flex gap-2">
      {timeBlocks.map((block) => (
        <div 
          key={block.label} 
          className="flex flex-col items-center min-w-[3rem] p-1.5 rounded-lg bg-muted/50 border border-border/50 shadow-sm"
        >
          <span className="text-lg font-mono font-bold text-primary tabular-nums leading-none">
            {block.value}
          </span>
          <span className="text-[10px] font-medium text-muted-foreground uppercase tracking-tight mt-1">
            {block.label}
          </span>
        </div>
      ))}
    </div>
  );
};

export default CountdownTimer;
