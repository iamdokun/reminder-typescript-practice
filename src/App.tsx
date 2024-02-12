import React, { useState } from 'react';
import './App.css';
import ReminderList from './component/reminder';
import Reminder from './models/reminder';



function App() {
  const [reminder, setReminder] = useState<Reminder[]>([{id: 1,
    title: "Test"}])
  return (
    <div className="App">
      <ReminderList items={reminder} />
    </div>
  );
}

export default App;
