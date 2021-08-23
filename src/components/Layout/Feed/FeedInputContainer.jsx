import { Avatar } from '@material-ui/core'
import React, { useRef } from 'react'
import classes from './FeedInputContainer.module.css'
import avatar from '../../../assets/images/dummyAvatar.png'
import InputOption from './InputOption'
import { VideoLibrary, Image, Event, ArtTrack } from '@material-ui/icons'
import { db } from '../../../firebase'
import firebase from 'firebase'
import { useSelector } from 'react-redux'

const FeedInputContainer = () => {
    const postInputRef = useRef()
    const userDetails = useSelector(state=>state.user.userDetails)


    const submitHandler = (e) => {
        e.preventDefault();
        const postInput = postInputRef.current.value;

        db.collection('posts').add({
            name:userDetails.fullName,
            role:userDetails.headline,
            content:postInput,
            photoUrl:userDetails.avatar,
            timestamp: firebase.firestore.FieldValue.serverTimestamp()
        })
        postInputRef.current.value=""
    }

    return (
        <div className={classes.feed__InputContainer}>
            <div className={classes.inputArea}>
                <img className={classes.avatar} src={userDetails.avatar!==""?userDetails.avatar:avatar} alt={userDetails.avatar}/>
                <form onSubmit={submitHandler}>
                    <input type="text" placeholder="Start a post" ref={postInputRef}/>
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
