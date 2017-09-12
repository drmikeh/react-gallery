import React from 'react';
import { Badge, Label } from 'react-bootstrap';

const TodoTitle = ({todoCount}) => {
  return (
    <div>
      <h1>TODOs <Badge>{todoCount}</Badge></h1>
    </div>
  );
}

export default TodoTitle;
