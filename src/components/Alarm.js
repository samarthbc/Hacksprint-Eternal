// src/components/Alarm.js

import React, { useState, useEffect } from 'react';

const Alarm = ({ currentTime }) => {
  const [hour, setHour] = useState(12);
  const [minute, setMinute] = useState(0);
  const [period, setPeriod] = useState('AM');
  const [isAlarmSet, setIsAlarmSet] = useState(false);
  const [alarmTime, setAlarmTime] = useState(null);
  // const alarmSound = new Audio('https://www.soundjay.com/button/sounds/beep-07.wav'); // Sound URL

  const handleSetAlarm = () => {
    const alarmTimeString = `${hour}:${minute < 10 ? `0${minute}` : minute} ${period}`;
    setAlarmTime(alarmTimeString);
    setIsAlarmSet(true);
    alert(`Alarm set for ${alarmTimeString}`);
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      const now = new Date();
      const formattedTime = `${now.getHours() % 12 || 12}:${now.getMinutes() < 10 ? `0${now.getMinutes()}` : now.getMinutes()} ${now.getHours() < 12 ? 'AM' : 'PM'}`;
      
      if (isAlarmSet && formattedTime === alarmTime) {
        // alarmSound.play(); // Play the alarm sound
        alert('Alarm ringing!'); // Optionally, show an alert
        setIsAlarmSet(false); // Reset the alarm
      }
    }, 1000); // Check every second

    return () => clearInterval(intervalId); // Cleanup on unmount
  }, [isAlarmSet, alarmTime]);

  return (
    <div className="component-container">
      {/* <img
        src="https://images.unsplash.com/photo-1616620373348-205a3b1f4e4f" // Replace with your analog clock image
        alt="Analog Clock"
        className="analog-clock"
      /> */}
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
