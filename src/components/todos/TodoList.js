import React from 'react';

import Todo from './Todo';

const TodoList = ({todos, remove}) => {
  const todoNode = todos.map((todo) => {
    return (<Todo todo={todo} key={todo.id} remove={remove}/>)
  });
  return (<div style={{marginTop:'30px'}}>{todoNode}</div>);
};

export default TodoList;
