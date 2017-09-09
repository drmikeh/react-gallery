import React from 'react';

const TodoTitle = ({todoCount}) => {
  return (
    <div>
       <div>
          <h1>TODOs ({todoCount})</h1>
       </div>
    </div>
  );
}

export default TodoTitle;
