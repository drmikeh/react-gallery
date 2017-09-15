import React from 'react';
import axios from 'axios';

import TodoTitle from './TodoTitle';
import TodoForm from './TodoForm';
import TodoList from './TodoList';

import './Todo.css';

class TodoApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: []
    };
    this.apiUrl = 'https://59b3446095ddb9001143e95f.mockapi.io/api/todos'
  }

  componentDidMount() {
    // Make HTTP request with Axios
    axios.get(this.apiUrl)
    .then((res) => {
      this.setState({todos:res.data});
    });
  }

  addTodo(val) {
    const todo = { text: val, completed: false };
    axios.post(this.apiUrl, todo)
    .then((res) => {
      this.setState({ todos: [...this.state.todos, res.data] });
    });
  }

  removeTodo(id) {
    // Filter all todos except the one to be removed
    const remaining = this.state.todos.filter(todo => todo.id !== id);
    axios.delete(this.apiUrl + '/' + id)
    .then((res) => {
      this.setState({todos: remaining});
    });
  }

  toggleCompleted(id) {
    const foundTodo = this.state.todos.filter(todo => todo.id === id)[0];
    const updatedTodo = {
      ...foundTodo,
      completed: !foundTodo.completed
    };
    axios.put(this.apiUrl + '/' + id, updatedTodo)
    .then((res) => {
      console.log('put returned:', res.data);
      const updatedTodoFromServer = res.data;
      const index = this.state.todos.indexOf(foundTodo);
      this.setState({ todos: [
          ...this.state.todos.slice(0, index),
          updatedTodoFromServer,
         ...this.state.todos.slice(index + 1)
       ] });
    });
  }

  render() {
    return (
      <div>
        <TodoTitle todoCount={this.state.todos.length} />
        <TodoForm addTodo={this.addTodo.bind(this)} />
        <TodoList
          todos={this.state.todos}
          toggle={this.toggleCompleted.bind(this)}
          remove={this.removeTodo.bind(this)}
        />
      </div>
    );
  }
}

export default TodoApp;
