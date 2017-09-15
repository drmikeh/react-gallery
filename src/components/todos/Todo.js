import React from 'react';

const Todo = ({todo, toggle, remove}) => {
  return (
    <p className='todo'>
      <i
        onClick={() => {remove(todo.id)}}
        style={{marginRight: '5px'}}
        className="fa fa-times text-danger"
        aria-hidden="true">
        </i>
      <span className={todo.completed ? 'completed' : ''}
        onClick={() => {toggle(todo.id)}}>{todo.text}
      </span>
    </p>
  );
};

export default Todo;
