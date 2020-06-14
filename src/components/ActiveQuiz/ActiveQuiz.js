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
            <small>1 of 34</small>
        </p>
        
        <AnswersList
        answers={props.answers}
        />
    </div>
)

export default ActiveQuiz