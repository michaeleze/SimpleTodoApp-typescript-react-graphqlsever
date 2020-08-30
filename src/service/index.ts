import { Observable } from './observable';

class ToDoService extends Observable {
    private static instance: ToDoService;

    private getInstance() {
        if (!ToDoService.instance) {
            ToDoService.instance = new ToDoService();
        }
    }

    public async getTaskList() {
        this.getInstance();

        const response = await fetch('http://localhost:3000/api/tasks', {
            method: 'GET'
        });

        if(!response) {
            Promise.reject('No response');
        }

        return Promise.resolve(response);
    }

    public async createNewTask(task: string) {
        this.getInstance();

        const uniqueId = Math.floor(Math.random() * 20);

        const response = await fetch('http://localhost:3000/api/tasks', {
            body: `{\"id\":\"${uniqueId}\",\"text\":\"${task}\"}`,
            headers: {
                "Content-Type": "application/json"
            },
            method: 'POST'
        });

        if(!response) {
            Promise.reject('No response');
        }

        this.notify(this.getTaskList)

        return Promise.resolve(response);
    }

    public async updateTask(id: string, text: string) {
        this.getInstance();

        const task = {id: {id, text}};

        const response = await fetch(`http://localhost:3000/api/tasks/${id}`, {
            body: `{\"id\":\"${id}\",\"text\":\"${task}\"}`,
            headers: {
                "Content-Type": "application/json"
            },
            method: 'PUT'
        });

        if(!response) {
            Promise.reject('No response');
        }

        return Promise.resolve(response);
    }

    public async deleteTask(id: string, text: string) {
        this.getInstance();

        const task = {id: {id: id, text: text}};

        const response = await fetch(`http://localhost:3000/api/tasks/${id}`, {
            body: `{"id": ${id}, "text": ${task}`,
            headers: {
                "Content-Type": "application/json"
            },
            method: 'DELETE'
        });

        if(!response) {
            Promise.reject('No response');
        }

        return Promise.resolve(response);
    }
}

export const todo = new ToDoService();