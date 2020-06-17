import React, {Component} from 'react'
import classes from './Quiz.module.css'
import ActiveQuiz from '../../components/ActiveQuiz/ActiveQuiz'

class Quiz extends Component {
    state = {
        activeQuestion: 0,
        answerState: null,
        quiz: [
            {
                id: 1,
                question: 'vopros1',
                rightAnswerId: 2,
                answers: [
                    {text: 'Vopros 1', id: 1},
                    {text: 'Vopros 2', id: 2},
                    {text: 'Vopros 3', id: 3},
                    {text: 'Vopros 4', id: 4}
                ]
            },
            {
                id: 2,
                question: 'vopros2',
                rightAnswerId: 4,
                answers: [
                    {text: 'Vopros 1...', id: 1},
                    {text: 'Vopros 2...', id: 2},
                    {text: 'Vopros 3...', id: 3},
                    {text: 'Vopros 4...', id: 4}
                ]
            }
        ]
    }

    onAnswerClickHandler = (answerId) => {
        if(this.state.answerState) {
            const key = Object.keys(this.state.answerState)[0];
            if(this.state.answerState[key] === 'success') {
                return;
            }
        }

        const question = this.state.quiz[this.state.activeQuestion];

        if(question.rightAnswerId === answerId) {

            this.setState({
                answerState: {[answerId]: 'success'}
            });

            const timeout = window.setTimeout(() => {
                if(this.isQuizFinished()) {
                    console.log("finished");
                } else {
                    this.setState({
                        activeQuestion: this.state.activeQuestion + 1,
                        answerState: null
                    })
                }
                window.clearTimeout(timeout);
            },1000);
            
        } else {
            this.setState({
                answerState: {[answerId]: 'error'}
            });
        }
    }

    isQuizFinished () {
        return this.state.activeQuestion + 1 === this.state.quiz.length
    }

    render () {
        return (
            <div className={classes.Quiz}>
                <div className={classes.QuizWrapper}>
                    <h1>Quiz</h1>
                    <ActiveQuiz 
                    answers={this.state.quiz[this.state.activeQuestion].answers}
                    question={this.state.quiz[this.state.activeQuestion].question}
                    onAnswerClick={this.onAnswerClickHandler}
                    quizLength={this.state.quiz.length}
                    answerNumber={this.state.activeQuestion + 1}
                    state={this.state.answerState}
                    />
                </div>
            </div>
        )
    }
}

export default Quiz