// src/components/Pomodoro.js

import React, { useState, useEffect } from 'react';

const Pomodoro = () => {
  const [isActive, setIsActive] = useState(false);
  const [timeLeft, setTimeLeft] = useState(1500); // 25 minutes in seconds
  const [isBreak, setIsBreak] = useState(false);

  useEffect(() => {
    let intervalId;

    if (isActive && timeLeft > 0) {
      intervalId = setInterval(() => {
        setTimeLeft((prev) => prev - 1);
      }, 1000);
    } else if (timeLeft === 0) {
      const audio = new Audio('/path/to/alarm-sound.mp3'); // Replace with your sound file
      audio.play();
      setIsBreak(!isBreak);
      setIsActive(false);
      setTimeLeft(isBreak ? 1500 : 300); // 5 minutes break
    }

    return () => clearInterval(intervalId);
  }, [isActive, timeLeft, isBreak]);

  const toggleTimer = () => {
    setIsActive(!isActive);
  };

  const resetTimer = () => {
    setIsActive(false);
    setTimeLeft(1500);
    setIsBreak(false);
  };

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${String(minutes).padStart(2, '0')}:${String(remainingSeconds).padStart(2, '0')}`;
  };

  return (
    <div className="pomodoro">
      <h3>Pomodoro Timer</h3>
      <p>{isBreak ? "Break Time!" : "Focus Time!"}</p>
      <p>{formatTime(timeLeft)}</p>
      <button onClick={toggleTimer}>{isActive ? 'Pause' : 'Start'}</button>
      <button onClick={resetTimer}>Reset</button>
    </div>
  );
};

export default Pomodoro;
