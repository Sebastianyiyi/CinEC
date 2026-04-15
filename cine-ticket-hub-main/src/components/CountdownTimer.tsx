import { useState, useEffect } from "react";

interface CountdownTimerProps {
  targetDate: string;
}

const CountdownTimer = ({ targetDate }: CountdownTimerProps) => {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const update = () => {
      const diff = new Date(targetDate).getTime() - Date.now();
      if (diff <= 0) return setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      setTimeLeft({
        days: Math.floor(diff / 86400000),
        hours: Math.floor((diff % 86400000) / 3600000),
        minutes: Math.floor((diff % 3600000) / 60000),
        seconds: Math.floor((diff % 60000) / 1000),
      });
    };
    update();
    const id = setInterval(update, 1000);
    return () => clearInterval(id);
  }, [targetDate]);

  const units = [
    { label: "Días", value: timeLeft.days },
    { label: "Hrs", value: timeLeft.hours },
    { label: "Min", value: timeLeft.minutes },
    { label: "Seg", value: timeLeft.seconds },
  ];

  return (
    <div className="flex gap-2">
      {units.map(u => (
        <div key={u.label} className="flex flex-col items-center rounded-md bg-primary px-3 py-2 min-w-[48px]">
          <span className="font-display text-lg font-bold text-primary-foreground">{String(u.value).padStart(2, "0")}</span>
          <span className="text-[10px] uppercase tracking-wider text-primary-foreground/60">{u.label}</span>
        </div>
      ))}
    </div>
  );
};

export default CountdownTimer;
