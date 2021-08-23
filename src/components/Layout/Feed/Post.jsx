import { ChatBubbleOutline, Favorite, Share, Telegram, ThumbUpAlt } from '@material-ui/icons'
import React from 'react'
import PostStatsIcon from './PostStatsIcon'
import classes from './Post.module.css'
import { Avatar } from '@material-ui/core'
import avatar from '../../../assets/images/dummyAvatar.png'
import { useSelector } from 'react-redux'

const Post = (props) => {
    const userDetails = useSelector(state=>state.user.userDetails)
    return (
        <li key={props.id} className={classes.post__Card}>
            <div className={classes.post__Header}>
                <div className={classes.post__Avatar}>
                    <img className={classes.postAvatarPic} src={avatar} alt={userDetails.fullName}/>
                </div>
                <div className={classes.post__AuthorInfo}>
                    <p className={classes.post__Author}>{props.author}<span>• 3rd</span></p>
                    <p className={classes.post__Role}>{props.role}</p>
                </div>
            </div>
            <div className={classes.post__Body}>
                <p className={classes.post__Content}>{props.content}</p>
            </div>
            <div className={classes.post__Stats}>
                <PostStatsIcon Icon={ThumbUpAlt} background="rgb(94, 141, 228)" color="#fff" height="12px" width="12px"/>
                <PostStatsIcon Icon={Favorite} background="rgb(245, 81, 81)" color="#fff" height="12px" width="12px"/>
                <div className={classes.post__StatNumbers}>
                    <p>1,4100</p>
                    <p>• 330 Comments</p>
                </div>
            </div>
            <hr/>
            <div className={classes.post__Actions}>
                <button>
                    <PostStatsIcon Icon={ThumbUpAlt}/>
                    <p>Like</p>
                </button>
                <button>
                    <PostStatsIcon Icon={ChatBubbleOutline}/>
                    <p>Comment</p>
                </button>
                <button>
                    <PostStatsIcon Icon={Share}/>
                    <p>Share</p>
                </button>
                <button>
                    <PostStatsIcon Icon={Telegram}/>
                    <p>Send</p>
                </button>
            </div>
        </li>
    )
}

export default Post
