import classes from './HeaderOption.module.css'
import React from 'react'

const HeaderOption = (props) => {
    return (
        <div className={classes.headerOption}>
            {props.Icon && <props.Icon className="headerOption__icon"/>}
            <p>{props.title}</p>
        </div>
    )
}

export default HeaderOption
