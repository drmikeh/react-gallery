import React from 'react';

import Todo from './Todo';

const TodoList = ({todos, toggle, remove}) => {
  const todoList = todos.map((todo) => {
    return (<Todo todo={todo} key={todo.id} toggle={toggle} remove={remove}/>)
  });
  return (<div style={{marginTop:'30px'}}>{todoList}</div>);
};

export default TodoList;
