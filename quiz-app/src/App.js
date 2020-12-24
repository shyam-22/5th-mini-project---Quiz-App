import React, { Component } from "react"
import "./Style Folder/App.css";
import quizdata from "./QuizData"

class App extends Component{
  state={
    questionBank : []
  };

  getQuestions = () => {
    quizdata().then(question =>{
      this.setState({questionBank:question})
    })
  }
  componentDidMount(){
    this.getQuestions()
  }
  
  render(){
    return (
      <div className="App">
        <div className="title">Quiz App</div>
        {
      this.state.questionBank.length > 0 && this.state.questionBank.map(({
        question,answers,correct,questionId})=> (<h4>{question}</h4>) 
        )}
      </div>
    ); 
  }
}

export default App;
