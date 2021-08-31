/**
 * Fetches and returns list of todos.
 *
 * @returns {Promise<Array>}
 */
import * as Todo from '../entity/Todo';

export const fetchTodo = async () => {
  const todos = await getFromStorage()
  return todos.map(tag => Todo.fromJson(tag));
};

/**
 * Create new todo.
 *
 * @param {Object} todo
 */

export const addTodo = async (todo) => {
  const { data } = Todo.toJson(todo);
  const existingTodos = await getFromStorage()
  if (data) {
    const saveTodo = [
        ...existingTodos,
      {
        ...data
      }
    ];
    localStorage.setItem('todos',JSON.stringify(saveTodo))
  }
}

/**
 * Remove a todo
 *
 * @param {Number} idx
 */

export const removeTodo = async (idx) => {
  let todos = await getFromStorage()
  todos = todos.filter((v, k) => idx !== k)
  localStorage.setItem('todos',JSON.stringify(todos))
}

/**
 * fetch data from datasource
 *
 * @returns {Promise<Array>}
 */

const getFromStorage = async () =>{
  const storedTodo = await localStorage.getItem('todos');
  if(!storedTodo) return []
  return JSON.parse(storedTodo)
}