import React, { useState } from "react";

interface AddReminderProp {
	onAddReminder: (title: string) => void
}

const AddReminder = ({ onAddReminder}: AddReminderProp) => {
	const [title, setTitle] = useState("")

	const submitForm = (e: React.FormEvent) => {
		e.preventDefault()
		if (!title) return
		onAddReminder(title)
		setTitle("")
	  }
  return (
    <form onSubmit={submitForm}>
      <label htmlFor="title"> Enter Reminder Title</label>
      <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} id="title" className="form-control" />
      <button type="submit" className="btn btn-primary rounded-pill my-3">Add Reminder</button>
    </form>
  );
};

export default AddReminder;
