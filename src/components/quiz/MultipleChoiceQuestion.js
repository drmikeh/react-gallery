import React from 'react';
import {ToggleButtonGroup, ToggleButton} from 'react-bootstrap';

const MultipleChoiceQuestion = ({question, onChange}) => {
  const optionsList = question.options.map( (option, index) =>
    <ToggleButton
      bsStyle={question.value == option ? "primary" : "default"}
      key={index}
      value={option}
      onChange={(e) => onChange(question.id, e.target.value)}>{option}
    </ToggleButton>
  );
  return (
    <div className="question">
      <h4>Question #{question.id} {question.prompt}</h4>
      <ul>
        <ToggleButtonGroup type="radio" name="options">
          {optionsList}
        </ToggleButtonGroup>
      </ul>
    </div>
  );
};

export default MultipleChoiceQuestion;
