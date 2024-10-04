// src/App.js

import React, { useState, useEffect } from 'react';
import './App.css';
import Alarm from './components/Alarm';
import Stopwatch from './components/Stopwatch';
import Timer from './components/Timer';
import Pomodoro from './components/Pomodoro';

const App = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="app">
      <h1>Digital Clock</h1>
      <h2>{time.toLocaleTimeString()}</h2>

      <div className="flex-container">
        <Alarm currentTime={time} />
        <Stopwatch />
        <Timer />
        <Pomodoro />
      </div>
    </div>
  );
};

export default App;
