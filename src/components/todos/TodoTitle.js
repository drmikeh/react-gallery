import React from 'react';
import { Badge } from 'react-bootstrap';

const TodoTitle = ({todoCount}) => (
  <h1>TODOs <Badge>{todoCount}</Badge></h1>
);

export default TodoTitle;
