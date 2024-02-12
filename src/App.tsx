import React from 'react';
import './App.css';
import ReminderList from './component/reminder';
import Reminder from './models/reminder';

const reminderList : Reminder[] = [
  {id: 1,
  title: "Test"}
]

function App() {
  return (
    <div className="App">
      <ReminderList items={reminderList} />
    </div>
  );
}

export default App;
