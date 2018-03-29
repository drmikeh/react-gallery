import React from 'react';

const Todo = ({todo, toggle, remove}) => {
  const checkMarkOrNone = todo.completed ?
    <span style={{ color: 'blue', marginLeft: '10px' }}>&#x2714;</span> :
    '';

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
      {checkMarkOrNone}
    </p>
  );
};

export default Todo;
