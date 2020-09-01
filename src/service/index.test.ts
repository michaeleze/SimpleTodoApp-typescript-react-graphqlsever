import { todo } from './index';

describe('ToDoService', () => {
  it('calls mock', () => {
    const spy = jest.spyOn(todo, 'getTaskList');

    return todo.getTaskList().then((d) => d.json()).then((d) => {

      expect(d).toEqual({
        id: 'id',
        text: 'text'
      })
    })
  });

  it('calls mock', () => {
    const spy = jest.spyOn(todo, 'createNewTask');

    todo.createNewTask('hello world');

    expect(spy).toBeCalledWith('hello world')
  });
});