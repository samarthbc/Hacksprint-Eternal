// src/App.js

import React, { useState, useEffect } from 'react';
import './App.css';
import Alarm from './components/Alarm';
import Stopwatch from './components/Stopwatch';
import Timer from './components/Timer';
import Pomodoro from './components/Pomodoro';

// Array of background image URLs
const backgroundImages = [
  'https://images.unsplash.com/photo-1519359644002-9c7b307b4d0b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDE3fHxjaGVlcmZ1bHxlbnwwfHx8fDE2NzQyNjI3MjQ&ixlib=rb-4.0.3&q=80&w=1080',
  'https://images.unsplash.com/photo-1593642632720-4b943b88b4f2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDR8fGNoZWVyZnVsJTIwYmFja2dyb3VuZHN8ZW58MHx8fHwxNjc0MjYyNzM3&ixlib=rb-4.0.3&q=80&w=1080',
  'https://images.unsplash.com/photo-1498663987872-b16bc2ec7282?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDJ8fGNoZWVyZnVsJTIwYmFja2dyb3VuZHN8ZW58MHx8fHwxNjc0MjYyNzQ0&ixlib=rb-4.0.3&q=80&w=1080',
  'https://images.unsplash.com/photo-1593642632745-e4dd034e165e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDZ8fGNoZWVyZnVsJTIwYmFja2dyb3VuZHN8ZW58MHx8fHwxNjc0MjYyNzY3&ixlib=rb-4.0.3&q=80&w=1080',
  'https://images.unsplash.com/photo-1534541941776-08f4ab4a1c4b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDI4fHxjaGVlcmZ1bHxlbnwwfHx8fDE2NzQyNjI3OTU&ixlib=rb-4.0.3&q=80&w=1080',
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
