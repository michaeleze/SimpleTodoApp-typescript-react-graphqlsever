import { Observable } from "./observable";
import {formatList} from "../index.utility";

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
}

export const todo = new ToDoService();