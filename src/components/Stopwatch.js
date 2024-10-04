// src/components/Stopwatch.js

import React, { useState, useEffect } from 'react';

const Stopwatch = () => {
  const [stopwatchTime, setStopwatchTime] = useState(0);
  const [stopwatchRunning, setStopwatchRunning] = useState(false);

  const startStopwatch = () => {
    setStopwatchRunning(true);
  };

  const stopStopwatch = () => {
    setStopwatchRunning(false);
  };

  const resetStopwatch = () => {
    setStopwatchTime(0);
    setStopwatchRunning(false);
  };

  useEffect(() => {
    let intervalId;
    if (stopwatchRunning) {
      intervalId = setInterval(() => {
        setStopwatchTime((prev) => prev + 1);
      }, 1000);
    }
    return () => clearInterval(intervalId);
  }, [stopwatchRunning]);

  return (
    <div className="stopwatch">
      <h3>Stopwatch</h3>
      <p>{Math.floor(stopwatchTime / 60)}:{String(stopwatchTime % 60).padStart(2, '0')}</p>
      <button onClick={startStopwatch}>Start</button>
      <button onClick={stopStopwatch}>Stop</button>
      <button onClick={resetStopwatch}>Reset</button>
    </div>
  );
};

export default Stopwatch;
