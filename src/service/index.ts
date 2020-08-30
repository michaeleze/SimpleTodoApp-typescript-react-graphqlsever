import {Observable} from './observable';

class ToDoService extends Observable {
    private static instance: ToDoService;

    public async getTaskList() {
        this.getInstance();

        const response = await fetch('http://localhost:3000/api/tasks', {
            method: 'GET'
        });

        if (!response) {
            Promise.reject('No response');
        }

        return Promise.resolve(response);
    };

    public async createNewTask(task: string) {
        this.getInstance();

        const uniqueId = Math.floor(Math.random() * 20);

        fetch('http://localhost:3000/api/tasks', {
            body: `{\"id\":\"${uniqueId}\",\"text\":\"${task}\"}`,
            headers: {
                "Content-Type": "application/json"
            },
            method: 'POST'
        });
    };

    public updateTask(id: string, text: string) {
        this.getInstance();

        fetch(`http://localhost:3000/api/tasks/${id}`, {
            body: `{\"id\":\"${id}\",\"text\":\"${text}\"}`,
            headers: {
                "Content-Type": "application/json"
            },
            method: 'PUT'
        });
    };

    public deleteTask(id: string, text: string) {
        this.getInstance();

        fetch(`http://localhost:3000/api/tasks/${id}`, {
            body: `{\"id\":\"${id}\",\"text\":\"${text}\"}`,
            headers: {
                "Content-Type": "application/json"
            },
            method: 'DELETE'
        });
    };

    private getInstance() {
        if (!ToDoService.instance) {
            ToDoService.instance = new ToDoService();
        }
    }
}

export const todo = new ToDoService();