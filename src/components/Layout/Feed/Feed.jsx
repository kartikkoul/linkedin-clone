import React from 'react'
import FeedInputContainer from './FeedInputContainer'
import classes from './Feed.module.css'
import PostList from './PostList'

const Feed = () => {
    return (
        <div className={classes.feed}>
            <FeedInputContainer/>
            <PostList/>
        </div>
    )
}

export default Feed
