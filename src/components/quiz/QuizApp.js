import React from 'react';
import { Panel, Form, Button } from 'react-bootstrap';
import axios from 'axios';
import Config from '../../config';
import TextQuestion from './TextQuestion';
import NumberQuestion from './NumberQuestion';
import MultipleChoiceQuestion from './MultipleChoiceQuestion';
import QuizSrc from './QuizSrc';
import toastr from '../toastr/toastr';

class QuizApp extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      quiz: {}
    };
    this.onChange = this.onChange.bind(this);
  }

  async componentDidMount() {
    try {
      const response = await axios.get(`${Config.basename}/sample-quiz1.json`);
      const quiz = response.data;
      // set initial values for all questions to the empty string
      quiz.questions = quiz.questions.map( q => ({...q, value: ''}) );
      this.setState({ quiz });
    }
    catch(err) {
      alert(`ERROR: ${err}`);
      console.log('ERROR:', err);
    }
  }

  onChange(id, value) {
    const questions = this.state.quiz.questions;
    const index = questions.findIndex( q => q.id == id);
    const questionToUpdate = questions[index];
    const updatedQuestion = { ...questionToUpdate, value };
    const updatedQuiz = Object.assign(
      {},
      this.state.quiz,
      { questions: [
        ...questions.slice(0, index),
        updatedQuestion,
        ...questions.slice(index + 1)
      ]}
    );
    this.setState({quiz: updatedQuiz});
  }

  onSubmit() {
    const answers = this.state.quiz.questions.map( q => {
      return `<li>Question ${q.id} : ${q.value}</li>`;
    });
    const message = `
      <div>
        <h3>You submitted the following answers:</h3>
        <ul>${answers.join('')}</ul>
      </div>
    `;
    toastr.success(message);
    const resetQuiz = {
      ...this.state.quiz,
      questions: this.state.quiz.questions.map( q => ({...q, value: ''}) )
    };
    this.setState({
      quiz: resetQuiz
    });
  }

  render() {
    const questions = this.state.quiz.questions;
    const numQuestions = questions ? questions.length : 0;
    const questionsList = questions ? questions.map( (q, index) => {
      switch(q.type) {
        case "text"           : return <TextQuestion           key={index} question={q} onChange={this.onChange} />;
        case "number"         : return <NumberQuestion         key={index} question={q} onChange={this.onChange} />;
        case "multiple-choice": return <MultipleChoiceQuestion key={index} question={q} onChange={this.onChange} />;
        default: throw new Error(`Invalid question type: ${q.type}`);
      }
    }) : null;
    return (
      <Panel header='Quiz App' className="example">
        <h2>{this.state.quiz.name}</h2>
        There are {numQuestions} questions in this quiz.
        <Form onSubmit={(e) => {
          e.preventDefault();
          this.onSubmit();
        }}>
          {questionsList}
          <Button type="submit" bsStyle="primary">Submit</Button>
        </Form>
        <hr/>
        <QuizSrc quiz={this.state.quiz} />
      </Panel>
    );
  }
}

export default QuizApp;
