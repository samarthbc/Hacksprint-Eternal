// src/components/Stopwatch.js

import React, { useState, useEffect } from 'react';
import '../App.css'; // Make sure to import your CSS file for styles

const Stopwatch = () => {
  const [isActive, setIsActive] = useState(false); // Stopwatch state
  const [time, setTime] = useState(0); // Total time in milliseconds

  useEffect(() => {
    let interval = null;

    if (isActive) {
      interval = setInterval(() => {
        setTime((prevTime) => prevTime + 10); // Increment time by 10 ms
      }, 10); // Update every 10 ms
    } else if (!isActive && time !== 0) {
      clearInterval(interval); // Stop the timer if inactive
    }

    return () => clearInterval(interval); // Cleanup interval on unmount
  }, [isActive, time]);

  const handleStart = () => {
    setIsActive(true); // Start the stopwatch
  };

  const handleStop = () => {
    setIsActive(false); // Stop the stopwatch
  };

  const handleReset = () => {
    setIsActive(false); // Stop the stopwatch
    setTime(0); // Reset time
  };

  // Format the time to display minutes, seconds, and milliseconds
  const formatTime = (time) => {
    const getMilliseconds = `0${((time % 1000) / 10).toFixed(0)}`.slice(-2); // Calculate milliseconds
    const getSeconds = Math.floor((time / 1000) % 60); // Calculate seconds
    const getMinutes = Math.floor((time / (1000 * 60)) % 60); // Calculate minutes

    return `${getMinutes}:${getSeconds < 10 ? '0' : ''}${getSeconds}.${getMilliseconds}`; // Format string
  };

  return (
    <div className="stopwatch">
      <h2>Stopwatch</h2>
      <div className="time-display">{formatTime(time)}</div> {/* Display formatted time */}
      <div className="buttons">
        {!isActive && time === 0 && (
          <button onClick={handleStart}>Start</button> // Start button
        )}
        {isActive && <button onClick={handleStop}>Stop</button>} {/* Stop button */}
        {!isActive && time > 0 && <button onClick={handleReset}>Reset</button>} {/* Reset button */}
        {!isActive && time === 0 && <button onClick={handleStart}>Resume</button>} {/* Resume button */}
      </div>
    </div>
  );
};

export default Stopwatch;
