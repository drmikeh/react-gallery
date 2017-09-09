import React from 'react';
import axios from 'axios';

import TodoTitle from './TodoTitle';
import TodoForm from './TodoForm';
import TodoList from './TodoList';

import './Todo.css';

class TodoApp extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      data: []
    };
    this.apiUrl = 'https://59b3446095ddb9001143e95f.mockapi.io/api/todos'
  }

  componentDidMount() {
    // Make HTTP request with Axios
    axios.get(this.apiUrl)
    .then((res) => {
      this.setState({data:res.data});
    });
  }

  addTodo(val){
    const todo = { text: val };
    axios.post(this.apiUrl, todo)
    .then((res) => {
      this.state.data.push(res.data);
      this.setState({ data: this.state.data });
    });
  }

  handleRemove(id) {
    // Filter all todos except the one to be removed
    const remaining = this.state.data.filter(todo => todo.id !== id);
    axios.delete(this.apiUrl+'/'+id)
    .then((res) => {
      this.setState({data: remaining});
    });
  }

  render() {
    return (
      <div>
        <TodoTitle todoCount={this.state.data.length}/>
        <TodoForm addTodo={this.addTodo.bind(this)}/>
        <TodoList
          todos={this.state.data}
          remove={this.handleRemove.bind(this)}
        />
      </div>
    );
  }
}

export default TodoApp;
