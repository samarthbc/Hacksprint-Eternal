// src/components/Alarm.js

import React, { useState, useEffect } from 'react';

const Alarm = ({ currentTime }) => {
  const [alarmTime, setAlarmTime] = useState('');
  const [alarmSet, setAlarmSet] = useState(false);

  useEffect(() => {
    if (alarmSet && alarmTime === currentTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })) {
      alert('Alarm ringing!');
      setAlarmSet(false);
    }
  }, [currentTime, alarmSet, alarmTime]);

  return (
    <div className="alarm">
      <h3>Set Alarm</h3>
      <input
        type="time"
        value={alarmTime}
        onChange={(e) => setAlarmTime(e.target.value)}
      />
      <button onClick={() => setAlarmSet(true)}>Set Alarm</button>
    </div>
  );
};

export default Alarm;
