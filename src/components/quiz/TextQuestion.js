import React from 'react';

const TextQuestion = ({question, onChange}) => {
  return (
    <div className="question">
      <h4>Question #{question.id} {question.prompt}</h4>
      <input type="text" value={question.value} onChange={(e) => onChange(question.id, e.target.value)} />
    </div>
  );
};

export default TextQuestion;
