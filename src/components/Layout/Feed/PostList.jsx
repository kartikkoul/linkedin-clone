import React from 'react'
import Post from './Post'
import classes from './PostList.module.css'

const DUMMY_DATA = [
    {
        id:1001,
        author:"Kartik Koul",
        role:"Software Developer",
        content:"React is super fun!!",
    },
    {
        id:1002,
        author:"Kartik Koul",
        role:"Software Developer",
        content:"JavaScript is future!!"
    }
]

const PostList = () => {
    return (
        <ul className={classes.postList}>
            {DUMMY_DATA.map(post=><Post id={post.id} author={post.author} role={post.role} content={post.content}/>)}
        </ul>
    )
}

export default PostList
