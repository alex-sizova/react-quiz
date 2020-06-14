import React, {Component} from 'react'
import classes from './Quiz.module.css'
import ActiveQuiz from '../../components/ActiveQuiz/ActiveQuiz'

class Quiz extends Component {
    state = {
        quiz: [
            {
                answers: [
                    {text: 'Vopros 1'},
                    {text: 'Vopros 2'},
                    {text: 'Vopros 3'},
                    {text: 'Vopros 4'}
                ]
            }
        ]
    }

    render () {
        return (
            <div className={classes.Quiz}>
                <div className={classes.QuizWrapper}>
                    <h1>Quiz</h1>
                    <ActiveQuiz answers={this.state.quiz[0].answers} />
                </div>
            </div>
        )
    }
}

export default Quiz