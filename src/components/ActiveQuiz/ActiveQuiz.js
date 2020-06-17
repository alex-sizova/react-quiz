import React, {Component} from 'react'
import classes from './ActiveQuiz.module.css'
import AnswersList from './AnswersList/AnsersList'

const ActiveQuiz = props => (
    <div className={classes.ActiveQuiz}>
        <p className={classes.Question}>
            <span>
                <strong>2.</strong>
                WTF
            </span>
            <small>{props.answerNumber} of {props.quizLength}</small>
        </p>
        
        <AnswersList
        state={props.state}
        answers={props.answers}
        onAnswerClick={props.onAnswerClick}
        />
    </div>
)

export default ActiveQuiz