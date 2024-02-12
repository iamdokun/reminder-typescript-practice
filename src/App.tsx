import React, { useEffect, useState } from 'react';
import './App.css';
import ReminderList from './component/reminder';
import Reminder from './models/reminder';
import ReminderInstance from './services/reminder';



function App() {
  const [reminder, setReminder] = useState<Reminder[]>([{id: 1,
    title: "Test"}])

    useEffect(() => {
      loadReminderCall()
    },[])

    const loadReminderCall = async() => {
      const allReminder = await ReminderInstance.getReminder()
      setReminder(allReminder);
    } 

    const removeReminder = (id: number) => {
      console.log(id);
      const updatedReminder= reminder.filter((item) => item.id !== id)
      setReminder(updatedReminder)
      ReminderInstance.removeReminder(id)
    }

   

  return (
    <div className="App">
      <ReminderList items={reminder} onRemoveReminder={removeReminder} />
    </div>
  );
}

export default App;
