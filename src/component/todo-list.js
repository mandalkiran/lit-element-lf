
import '@vaadin/vaadin-grid';
import '@vaadin/vaadin-item';
import '@vaadin/vaadin-icons';
import '@vaadin/vaadin-button';
import '@vaadin/vaadin-text-field';

import {LitElement, html, css} from 'lit';
import {addTodo, fetchTodo, removeTodo} from '../service/TodoService';

/**
 * An example element.
 *
 */
export class TodoList extends LitElement {
  static get styles() {
    return css`
      .list-edits {
        font-size: 6px;
      }
      .list-item {
        background: #eee;
        display: flex;
        justify-content: space-between;
      }
    `;
  }

  static get properties() {
    return {
      /**
       * The name to say "Hello" to.
       */
      todos: {type: Array},
      task: { type: String }
    };
  }

  /**
   * Constructor.
   */
  constructor() {
    super();
    this.todos = [];
  }

  /**
   * Called before component is first rendered.
   */
  async firstUpdated() {
    await this.fetchTodoList()
  }

  render() {
    return html`
      <h1>To Do List</h1>
       <div>
        <vaadin-text-field
          placeholder="Task"
          value="${this.task}"
          @change="${this.updateTask}"
        ></vaadin-text-field>
        <vaadin-button theme="primary" @click="${this.addTodo}">
          Add Todo
        </vaadin-button>
      </div>
      ${this.todos.map( (todo, key) => html`
        <vaadin-item>
            ${key + 1}. ${todo.title}
            <vaadin-button theme="error small icon" @click="${ e => this.deleteTodo(key)}">
                <iron-icon icon="vaadin:trash" slot="prefix"></iron-icon>
            </vaadin-button>
        </vaadin-item>
      `)}
    `;
  }

  /**
   * Fetches list of todos from Service.
   *
   * @returns {Promise<Array>}
   */
  async fetchTodoList(){
    this.todos = await fetchTodo()
  }

  /**
   * Add Todo.
   *
   * @returns {Promise<Array>}
   */
  async addTodo() {
    if (this.task) {
      await addTodo({ title: this.task})
      await this.fetchTodoList()
      this.task = '';
    }
  }
  /**
   * Remove Todo.
   *
   * @returns {Promise<Array>}
   */
  async deleteTodo(key) {
    await removeTodo(key)
    await this.fetchTodoList()
  }
  /**
   * Bind the state (task) with value entered in textfield.
   */
  updateTask(e) {
    this.task = e.target.value;
  }
}

window.customElements.define('todo-list', TodoList);
