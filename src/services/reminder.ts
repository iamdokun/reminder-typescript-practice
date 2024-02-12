import axios from "axios";
import Reminder from "../models/reminder";

class ReminderService {
	http = axios.create({baseURL: "https://jsonplaceholder.typicode.com/"})

	async getReminder() {
		const res = await this.http.get<Reminder[]>("/todos");
		return res?.data;
	}

	async addReminder(title: string) {
		const res = await this.http.post<Reminder>("/todos", {title});
		return res?.data
	}

	async removeReminder(id: number) {
		const res = await this.http.delete(`/todos/${id}`)
		return res?.data
	}
}

const ReminderInstance = new ReminderService()

export default ReminderInstance;