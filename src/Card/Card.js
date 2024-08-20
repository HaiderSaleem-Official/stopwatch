import React, { useState, useRef } from "react";
import "./Card.css";

const Card = () => {
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
    }, 0);
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

  return (
    <div className="container">
      <h1 className="heading">STOPWATCH</h1>
      <div className="card">
        <div className="time-container">
          <div className="time">
            <p>{time.hour}</p>
          </div>
          <span className="separator">:</span>
          <div className="time">
            <p>{time.min}</p>
          </div>
          <span className="separator">:</span>
          <div className="time">
            <p>{time.sec}</p>
          </div>
          <span className="separator">:</span>
          <div className="time">
            <p>{time.ms}</p>
          </div>
        </div>
        <div className="buttons">
          <button className="btn" onClick={Start}>
            Start
          </button>
          <button className="btn" onClick={Pause}>
            Pause
          </button>
          <button className="btn" onClick={Reset}>
            Reset
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
