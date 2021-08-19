import React from 'react'
import classes from './PostStatsIcon.module.css'

const PostStatsIcon = (props) => {
    return (
        <div className={classes.post__StatsIconOuter} style={{background:props.background}}>
           { props.Icon && <props.Icon className={classes.post__StatsIcon} style={{color:props.color, height:props.height, width:props.width}}/>}
        </div>
    )
}

export default PostStatsIcon
