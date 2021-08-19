import React, { useState, useEffect } from 'react'
import { db } from '../../../firebase'
import Post from './Post'
import classes from './PostList.module.css'


const PostList = () => {
    const [posts, setPosts] = useState([])


    useEffect(() => {
        db.collection('posts').orderBy("timestamp", "desc").onSnapshot((snapshot)=> setPosts(
            snapshot.docs.map(doc=>({
                id:doc.id,
                data:doc.data()
            }))
        ))
    }, [])

    return (
        <ul className={classes.postList}>
            {posts.map(({id, data:{ name, content, role, photoUrl}})=><Post id={id} author={name} role={role} content={content}/>)}
        </ul>
    )
}

export default PostList
