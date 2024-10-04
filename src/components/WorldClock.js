// src/components/WorldClock.js

import React from 'react';

// List of time zones for various countries
const timeZones = [
  { name: "New York, USA", timeZone: "America/New_York" },
  { name: "London, UK", timeZone: "Europe/London" },
  { name: "Tokyo, Japan", timeZone: "Asia/Tokyo" },
  { name: "Sydney, Australia", timeZone: "Australia/Sydney" },
  { name: "Paris, France", timeZone: "Europe/Paris" },
  { name: "Berlin, Germany", timeZone: "Europe/Berlin" },
  { name: "Mumbai, India", timeZone: "Asia/Kolkata" },
];

const WorldClock = () => {
  const getCurrentTime = (timeZone) => {
    const date = new Date();
    return new Intl.DateTimeFormat("en-US", {
      timeZone,
      hour: "numeric",
      minute: "numeric",
      second: "numeric",
      hour12: true,
    }).format(date);
  };

  return (
    <div className="component-container">
      {/* <img
        src="https://images.unsplash.com/photo-1616620373348-205a3b1f4e4f" // Replace with your analog clock image
        alt="Analog Clock"
        className="analog-clock"
      /> */}
      <h2>World Clock</h2>
      <ul className="world-clock-list">
        {timeZones.map((zone) => (
          <li key={zone.timeZone}>
            {zone.name}: {getCurrentTime(zone.timeZone)}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default WorldClock;
