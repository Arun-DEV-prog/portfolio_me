import React, { useEffect, useState } from "react";

const LocalTime = () => {
  const [time, setTime] = useState(new Date());
  useEffect(() => {
    const timr = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => clearInterval(timr);
  }, []);
  return (
    <div className="text-white font-mono">{time.toLocaleTimeString()}</div>
  );
};

export default LocalTime;
