/**
 *  All Service and logics here are originally created by
 *  Michael Eze<michaeleze3@gmail.com>
 *  Please do not reproduce
 */
import {Observable} from './observable';

class ToDoService extends Observable {
  private static instance: ToDoService;
  private url: string;

  constructor(url: string) {
    super();
    this.url = url;
    this.getInstance();
    return ToDoService.instance;
  }

  public getTaskList() {
    const body = JSON.stringify({query: "{getTaskList { \n id \n text \n }}"});

    this.useFetch(body, 'POST', 'getTaskList');
  };

  public addTask(task: string) {
    const uniqueId = Math.floor(Math.random() * 20);
    const body = JSON.stringify({
      query: "mutation ($id: ID!, $text: String!){ addTask (id: $id, text: $text){ \n id \n text \n }}",
      variables: {
        id: uniqueId,
        text: task
      }
    });

    this.useFetch(body, 'POST', 'addTask');
  };

  public updateTask(id: string, text: string) {
    const body = JSON.stringify({
      query: "mutation ($id: ID!, $text: String!){ updateTask (id: $id, text: $text){ \n id \n text \n }}",
      variables: {
        id: id,
        text: text
      }
    });

    this.useFetch(body, 'POST', 'updateTask');
   };

  public deleteTask(id: string, text: string) {
    const body = JSON.stringify({
      query: "mutation ($id: ID!){ deleteTask (id: $id){ \n id \n text \n }}",
      variables: {
        id: id,
      }
    });

    this.useFetch(body, 'POST', 'deleteTask');
  };

  private useFetch(body: string, method: string, name: string ) {
    fetch(this.url, {
      body: body,
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      method: method
    })
      .then(response => response?.json())
      .then(response => this.notify(response['data'][name]))
      .catch(err => {console.log(err)});
  }

  private getInstance() {
    if (!ToDoService.instance) {
      ToDoService.instance = this;
    }
  }
}

const url = 'https://todo-app-server-123.herokuapp.com';
export const todo = new ToDoService(url);