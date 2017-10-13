import React from 'react';

const NumberQuestion = ({question, onChange}) => {
  return (
    <div className="question">
      <h4>Question #{question.id} {question.prompt}</h4>
      <input type='number' value={question.value} onChange={(e) => onChange(question.id, e.target.value)} />
    </div>
  );
};

export default NumberQuestion;
