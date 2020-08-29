import { Observable } from "./observable";
import { formatList } from "../index.utility";

class ToDoService extends Observable {
    private static instance: ToDoService;

    private getInstance() {
        if (!ToDoService.instance) {
            ToDoService.instance = new ToDoService();
        }
    }

    public getTaskList() {
        this.getInstance();

        fetch("http://localhost:3000/api/tasks", {
            method: 'GET'
        })
            .then(response => response.json() )
            .then(response => {
                const formattedList = formatList(response);

                this.notify(formattedList)
            })
            .catch(error => { throw new Error(error) })
    }

    public createNewTask(task: string) {
        this.getInstance();

        const uniqueId = Math.random().toString(36).substr(2, 9);

        fetch("http://localhost:3000/api/tasks", {
            body: "{\"id\":\"2e\",\"text\":\"chade\"}",
            headers: {
                "Content-Type": "application/json"
            },
            method: "POST"
        })
            .then(response => response.json() )
            .then(response => {
                const formattedList = formatList(response);

                this.notify(formattedList)
            })
            .catch(error => { throw new Error(error) })
    }

    public updateTask(id: string, text: string) {
        this.getInstance();
        fetch("http://localhost:3000/api/tasks/001", {
            body: "{\"id\":\"001\",\"text\":\"my great new task\"}",
            headers: {
                "Content-Type": "application/json"
            },
            method: "PUT"
        })
            .then(response => response.json() )
            .then(response => {
                const formattedList = formatList(response);

                this.notify(formattedList)
            })
            .catch(error => { throw new Error(error) })
    }

    public deleteTask(id: string) {
        this.getInstance();

        fetch("http://localhost:3000/api/tasks/001", {
            body: "{\"id\":\"001\",\"text\":\"my great new task\"}",
            method: "POST",
            mode: 'no-cors'
        })
            .then(response => response.json() )
            .then(response => {
                const formattedList = formatList(response);

                this.notify(formattedList)
            })
            .catch(error => { throw new Error(error) })
    }
}

export const todo = new ToDoService();