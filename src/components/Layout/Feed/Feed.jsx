import React from 'react'
import FeedInputContainer from './FeedInputContainer'
import classes from './Feed.module.css'

const Feed = () => {
    return (
        <div className={classes.feed}>
            <FeedInputContainer/>
        </div>
    )
}

export default Feed
