import React from 'react';

const TodoForm = ({addTodo}) => {
  // Input Tracker
  let input;
  return (
    <form onSubmit={(e) => {
        e.preventDefault();
        addTodo(input.value);
        input.value = '';
      }}>
      <input ref={node => {
        input = node;
      }} />
      <br />
    </form>
  );
};

export default TodoForm;
