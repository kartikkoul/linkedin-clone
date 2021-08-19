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
                <InputOption Icon={Image} text="Photo" color="rgba(51, 172, 219, 0.671)"/>
                <InputOption Icon={VideoLibrary} text="Video" color="rgba(44, 185, 44, 0.671)"/>
                <InputOption Icon={Event} text="Video" color="rgba(223, 162, 8, 0.664)"/>
                <InputOption Icon={ArtTrack} text="Write Article" color="rgba(248, 85, 112, 0.671)"/>
            </div>
        </div>
    )
}

export default FeedInputContainer
