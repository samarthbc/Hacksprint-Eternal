// src/components/Timer.js

import React, { useState, useEffect } from 'react';

const Timer = () => {
  const [timerTime, setTimerTime] = useState(0);
  const [timerRunning, setTimerRunning] = useState(false);

  const startTimer = () => {
    setTimerRunning(true);
  };

  const stopTimer = () => {
    setTimerRunning(false);
  };

  const resetTimer = () => {
    setTimerTime(0);
    setTimerRunning(false);
  };

  useEffect(() => {
    let intervalId;
    if (timerRunning && timerTime > 0) {
      intervalId = setInterval(() => {
        setTimerTime((prev) => prev - 1);
      }, 1000);
    }
    return () => clearInterval(intervalId);
  }, [timerRunning, timerTime]);

  const handleTimerChange = (e) => {
    setTimerTime(Number(e.target.value));
  };

  return (
    <div className="timer">
      <h3>Timer</h3>
      <input
        type="number"
        value={timerTime}
        onChange={handleTimerChange}
        placeholder="Enter seconds"
      />
      <button onClick={startTimer}>Start Timer</button>
      <button onClick={stopTimer}>Stop Timer</button>
      <button onClick={resetTimer}>Reset Timer</button>
      <p>{timerTime > 0 ? `${Math.floor(timerTime / 60)}:${String(timerTime % 60).padStart(2, '0')}` : 'Time is up!'}</p>
    </div>
  );
};

export default Timer;
