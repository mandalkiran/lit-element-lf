/**
 * Fetches and returns list of todos.
 *
 * @returns {Promise<Array>}
 */
import * as Todo from '../entity/Todo';
const url = 'http://localhost:8080/api'
export const fetchTodo = async () => {
  const response = await fetch(`${url}/tasks`)
  const todos = await response.json()
  return todos.map(tag => Todo.fromJson(tag));
};

/**
 * Create new todo.
 *
 * @param {Object} todo
 */

export const addTodo = async (todo) => {
  const { data } = Todo.toJson(todo);
  await fetch(`${url}/tasks`,{
    method: "POST",
    body: JSON.stringify({ ...data }),
    headers:{
      "Content-Type": "application/json"
    }
  })
}

/**
 * Remove a todo
 *
 * @param {Number} id
 */

export const removeTodo = async (id) => {
  await fetch(`${url}/tasks/` + id, {
    method: 'DELETE',
  })
}