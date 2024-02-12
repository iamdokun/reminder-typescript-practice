import axios from "axios";
import Reminder from "../models/reminder";

class ReminderService {
	http = axios.create({baseURL: "https://jsonplaceholder.typicode.com/"})

	async getReminder() {
		const res = await this.http.get<Reminder[]>("/todo");
		return res?.data;
	}

	async addReminder(title: string) {
		const res = await axios.post<Reminder>("/todo", {title});
		return res?.data
	}

	async removeReminder(id: number) {
		const res = await axios.delete(`/todo/${id}`)
		return res?.data
	}
}

const ReminderInstance = new ReminderService()

export default ReminderInstance;