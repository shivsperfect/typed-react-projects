import React, { useEffect, useState } from 'react';
import ReminderList from './ReminderList';
import Reminder from './models/reminder'
import reminderService from './services/reminder';
import NewReminder from './NewReminder';

function App() {
  const [reminders, setReminders] = useState<Reminder[]>([]);

  useEffect(() => {
    (async function () {
      const reminders = await reminderService.getReminders();
      setReminders(reminders)
    })()
  }, [])

  const removeReminder = (id: number) => {
    setReminders(reminders.filter(reminder => reminder.id !== id))
  }

  const addReminder = async (title: string) => {
    const newReminder = await reminderService.addReminder(title)
    setReminders([newReminder, ...reminders])
  }

  return (
    <div className='App'>
      <NewReminder onAddReminder={addReminder} />
      <ReminderList items={reminders} onRemoveReminder={removeReminder} />
    </div>
  );
}

export default App;
