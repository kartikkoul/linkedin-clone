import classes from './HeaderOption.module.css'
import avatar from '../../assets/images/dummyAvatar.jpg'
import React from 'react'

const HeaderOption = (props) => {
    return (
        <div className={classes.headerOption}>
            {props.Icon && <props.Icon className={classes.headerOption__icon}/>}
            {props.Avatar && <props.Avatar alt="Kartik Koul" src={avatar} className={classes.headerOption__avatar}/>}
            <p>{props.title}</p>
        </div>
    )
}

export default HeaderOption
