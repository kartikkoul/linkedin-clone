import classes from './HeaderOption.module.css'
import avatar from '../../assets/images/dummyAvatar.jpg'
import React from 'react'
import { Avatar } from '@material-ui/core'

const HeaderOption = (props) => {
    return (
            <div className={classes.headerOption}>
                {props.Icon && <props.Icon className={classes.headerOption__icon}/>}
                {props.Avatar && <Avatar src={avatar} alt="Kartik Koul" className={classes.headerOption__avatar}/>}
                <p>{props.title}</p>
            </div>
        
    )
}

export default HeaderOption
