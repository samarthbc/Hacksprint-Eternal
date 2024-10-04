// src/App.js

import React, { useState, useEffect } from 'react';
import './App.css';
import Alarm from './components/Alarm';
import Stopwatch from './components/Stopwatch';
import Timer from './components/Timer';
import Pomodoro from './components/Pomodoro';

// Array of background image URLs
const backgroundImages = [
  'https://www.freepik.com/free-photos-vectors/night-wallpaper',
  'https://www.wallpaperflare.com/green-grass-field-under-blue-and-white-sky-during-daytime-wallpaper-40858'
];

const App = () => {
  const [time, setTime] = useState(new Date());
  const [activeTab, setActiveTab] = useState('clock'); // State to manage active tab
  const [backgroundImage, setBackgroundImage] = useState('');

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(new Date());
    }, 1000);

    // Randomly select a background image
    setBackgroundImage(backgroundImages[Math.floor(Math.random() * backgroundImages.length)]);

    return () => clearInterval(intervalId);
  }, []);

  const renderContent = () => {
    switch (activeTab) {
      case 'clock':
        return <h2 className="neon-text">{time.toLocaleTimeString()}</h2>; // Apply neon effect here
      case 'alarm':
        return <Alarm currentTime={time} />;
      case 'stopwatch':
        return <Stopwatch />;
      case 'timer':
        return <Timer />;
      case 'pomodoro':
        return <Pomodoro />;
      default:
        return null;
    }
  };

  return (
    <div className="app" style={{ backgroundImage: `url(${backgroundImage})` }}>
      <h1 className="neon-title">Digital Clock</h1> {/* Apply neon effect here as well */}

      {/* Tab Navigation */}
      <div className="tab-container">
        <button onClick={() => setActiveTab('clock')}>Clock</button>
        <button onClick={() => setActiveTab('alarm')}>Alarm</button>
        <button onClick={() => setActiveTab('stopwatch')}>Stopwatch</button>
        <button onClick={() => setActiveTab('timer')}>Timer</button>
        <button onClick={() => setActiveTab('pomodoro')}>Pomodoro</button>
      </div>

      {/* Render the active tab's content */}
      <div className="tab-content">
        {renderContent()}
      </div>
    </div>
  );
};

export default App;
