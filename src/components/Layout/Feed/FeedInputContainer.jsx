import { Avatar } from '@material-ui/core'
import React from 'react'
import classes from './FeedInputContainer.module.css'
import avatar from '../../../assets/images/dummyAvatar.jpg'

const FeedInputContainer = () => {
    return (
        <div className={classes.feed__InputContainer}>
            <div className={classes.inputArea}>
                <Avatar className={classes.avatar} src={avatar}/>
                <input type="text" placeholder="Start a post"/>
            </div>
            <div className={classes.inputWidgets}>
                <div className={classes.photoIcon}>
                    
                </div>
                <div className={classes.videoIcon}>
                    
                </div>
                <div className={classes.eventIcon}>
                    
                </div>
                <div className={classes.writeIcon}>
                    
                </div>
            </div>
        </div>
    )
}

export default FeedInputContainer
