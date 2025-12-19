import { useState, useEffect } from "react";

const useCurrentDate = () => {
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    const refreshClock = () => {
      setDate(new Date());
    };

    const timerId = setInterval(refreshClock, 1000);

    return () => {
      clearInterval(timerId);
    };
  }, []);

  return date;
};

export default useCurrentDate;