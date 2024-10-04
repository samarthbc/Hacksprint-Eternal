// src/components/Alarm.js

import React, { useState } from 'react';

const Alarm = ({ currentTime }) => {
  const [hour, setHour] = useState(12);
  const [minute, setMinute] = useState(0);
  const [period, setPeriod] = useState('AM');

  const handleSetAlarm = () => {
    const alarmTime = `${hour}:${minute < 10 ? `0${minute}` : minute} ${period}`;
    alert(`Alarm set for ${alarmTime}`);
    // Here you can implement additional logic to handle the alarm sound
  };

  return (
    <div className="component-container">
      <img
        src="https://images.unsplash.com/photo-1616620373348-205a3b1f4e4f" // Replace with your analog clock image
        alt="Analog Clock"
        className="analog-clock"
      />
      <h2>Alarm</h2>
      <div className="alarm-setting">
        <select value={hour} onChange={(e) => setHour(Number(e.target.value))}>
          {[...Array(12).keys()].map((h) => (
            <option key={h} value={h + 1}>{h + 1}</option>
          ))}
        </select>
        <span>:</span>
        <select value={minute} onChange={(e) => setMinute(Number(e.target.value))}>
          {[...Array(60).keys()].map((m) => (
            <option key={m} value={m}>{m < 10 ? `0${m}` : m}</option>
          ))}
        </select>
        <select value={period} onChange={(e) => setPeriod(e.target.value)}>
          <option value="AM">AM</option>
          <option value="PM">PM</option>
        </select>
        <button onClick={handleSetAlarm}>Set Alarm</button>
      </div>
    </div>
  );
};

export default Alarm;
