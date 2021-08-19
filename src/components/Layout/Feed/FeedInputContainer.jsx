import { Avatar } from '@material-ui/core'
import React from 'react'
import classes from './FeedInputContainer.module.css'
import avatar from '../../../assets/images/dummyAvatar.jpg'
import InputOption from './InputOption'
import { VideoLibrary, Image, Event, ArtTrack } from '@material-ui/icons'

const FeedInputContainer = () => {
    return (
        <div className={classes.feed__InputContainer}>
            <div className={classes.inputArea}>
                <Avatar className={classes.avatar} src={avatar}/>
                <form>
                    <input type="text" placeholder="Start a post"/>
                </form>
            </div>
            <div className={classes.inputWidgets}>
                <InputOption Icon={Image} text="Photo"/>
                <InputOption Icon={VideoLibrary} text="Video"/>
                <InputOption Icon={Event} text="Video"/>
                <InputOption Icon={ArtTrack} text="Write Article"/>
            </div>
        </div>
    )
}

export default FeedInputContainer
