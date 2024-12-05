import React, { useState, useRef, useEffect } from "react";

const useTimer = () => {
  const [time, setTime] = useState({ hour: 0, min: 0, sec: 0, ms: 0 });
  const intervalRef = useRef(null);

  const Start = () => {
    if (intervalRef.current !== null) return;

    intervalRef.current = setInterval(() => {
      setTime((prevTime) => {
        let { hour, min, sec, ms } = prevTime;

        ms += 10;
        if (ms === 1000) {
          ms = 0;
          sec += 1;
        }
        if (sec === 60) {
          sec = 0;
          min += 1;
        }
        if (min === 60) {
          min = 0;
          hour += 1;
        }

        return { hour, min, sec, ms };
      });
    }, 10);
  };

  const Reset = () => {
    if (intervalRef.current !== null) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }

    setTime({ hour: 0, min: 0, sec: 0, ms: 0 });
  };

  const Pause = () => {
    if (intervalRef.current !== null) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  };

  useEffect(() => {
    return () => {
      console.log("Timer Unmounting...");
      if (intervalRef.current !== null) {
        clearInterval(intervalRef.current);
      }
    };
  }, []);

  return { time, Start, Reset, Pause };
};

export default useTimer;
