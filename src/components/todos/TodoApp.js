import React from 'react';
import axios from 'axios';
import toastr from '../toastr/toastr';

import TodoTitle from './TodoTitle';
import TodoForm from './TodoForm';
import TodoList from './TodoList';

import { Panel } from 'react-bootstrap';
import 'toastr/build/toastr.min.css';
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
    axios.get(this.apiUrl)
    .then((res) => {
      this.setState({todos:res.data});
    })
    .catch(function (error) {
      toastr.error(error);
    });
  }

  addTodo(val) {
    const todo = { text: val, completed: false };
    axios.post(this.apiUrl, todo)
    .then((res) => {
      this.setState({ todos: [...this.state.todos, res.data] });
    })
    .catch(function (error) {
      toastr.error(error);
    });
  }

  removeTodo(id) {
    // Filter all todos except the one to be removed
    const remaining = this.state.todos.filter(todo => todo.id !== id);
    axios.delete(this.apiUrl + '/' + id)
    .then((res) => {
      this.setState({todos: remaining});
    })
    .catch(function (error) {
      toastr.error(error);
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
    })
    .catch(function (error) {
      toastr.error(error);
    });
  }

  render() {
    const title = <TodoTitle todoCount={this.state.todos.length} />;
    return (
      <Panel header={title} className='example'>
        <TodoForm addTodo={this.addTodo.bind(this)} />
        <TodoList
          todos={this.state.todos}
          toggle={this.toggleCompleted.bind(this)}
          remove={this.removeTodo.bind(this)}
        />
      </Panel>
    );
  }
}

export default TodoApp;
