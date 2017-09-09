import React, { Component } from 'react';
import './Todos.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [
        { id: 1, title: 'Learn React', completed: true },
        { id: 2, title: 'Build something fun with React', completed: false }
      ]
    };
  }
  render() {
    const todos = this.state.todos.map((todo) => {
      // const icon = todo.completed ?
      //   <i className="fa fa-check-square-o" aria-hidden="true"></i> :
      //   <i className="fa fa-square-o" aria-hidden="true"></i>;
      const icon = todo.completed ? 'X' : 'O';
      return (
        <li key={todo.id}>
          {icon} {todo.title}
        </li>
      );
    });
    return (
      <div className="Todo">
        <h1>Todos</h1>
        <ul>
          {todos}
        </ul>
      </div>
    );
  }
}

export default App;
