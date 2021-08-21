import classes from './HeaderOption.module.css'
import avatar from '../../assets/images/dummyAvatar.png'
import React from 'react'
import { Avatar } from '@material-ui/core'
import { useSelector } from 'react-redux'

const HeaderOption = (props) => {
    const userDetails = useSelector(state=>state.user.userDetails)
    
    return (
            <div className={classes.headerOption}>
                {props.Icon && <props.Icon className={classes.headerOption__icon}/>}
                {props.Avatar && <img src={avatar} alt={userDetails.fullName} className={classes.headerOption__avatar}/>}
                <p>{props.title}</p>
            </div>
        
    )
}

export default HeaderOption
