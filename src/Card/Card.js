import React, { useState, useRef } from "react";
import useTimer from "./useTimer";
import "./Card.css";

const Card = () => {
 const { time, Start, Reset, Pause }= useTimer()

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
