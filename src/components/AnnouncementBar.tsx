import { useState, useEffect } from "react";

const AnnouncementBar = () => {
  const [time, setTime] = useState({ days: 5, hours: 18, mins: 30, secs: 0 });

  useEffect(() => {
    const timer = setInterval(() => {
      setTime((prev) => {
        let { days, hours, mins, secs } = prev;
        secs--;
        if (secs < 0) { secs = 59; mins--; }
        if (mins < 0) { mins = 59; hours--; }
        if (hours < 0) { hours = 23; days--; }
        if (days < 0) { days = 0; hours = 0; mins = 0; secs = 0; }
        return { days, hours, mins, secs };
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const pad = (n: number) => String(n).padStart(2, "0");

  return (
    <div className="bg-primary/10 backdrop-blur-sm py-2 px-4 flex items-center justify-center gap-4 text-sm border-b border-border">
      <span className="text-foreground font-medium">
        🚀 Early Bird Pre-Order — Limited Spots Available — Ends In
      </span>
      <div className="flex gap-2">
        {[
          { val: time.days, label: "Day" },
          { val: time.hours, label: "Hours" },
          { val: time.mins, label: "Min" },
          { val: time.secs, label: "Sec" },
        ].map((item) => (
          <div key={item.label} className="countdown-box">
            <div className="text-foreground font-bold text-base leading-none">{pad(item.val)}</div>
            <div className="text-muted-foreground text-[10px] mt-0.5">{item.label}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AnnouncementBar;
