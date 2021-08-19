import React from 'react'
import classes from './InputOption.module.css'

const InputOption = (props) => {
    return (
        <div className={classes.InputOption}>
            {props.Icon && <props.Icon className={classes.InputOption__icon}/>}
            <p className={classes.InputOption__label}>{props.text}</p>
        </div>
    )
}

export default InputOption
