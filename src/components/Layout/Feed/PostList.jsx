import { CircularProgress } from '@material-ui/core'
import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { db } from '../../../firebase'
import { uiActions } from '../../../store/slices/uiSlice'
import Post from './Post'
import classes from './PostList.module.css'


const PostList = () => {
    const [posts, setPosts] = useState([])
    const isLoading = useSelector(state=>state.ui.postLoader)
    const dispatch = useDispatch()


    useEffect(() => {
        dispatch(uiActions.loadingPost(true))
        db.collection('posts').orderBy("timestamp", "desc").onSnapshot((snapshot)=> {setPosts(
            snapshot.docs.map(doc=>({
                id:doc.id,
                data:doc.data()
            }))
        )
        dispatch(uiActions.loadingPost(false))
    })
        
    }, [])

    return (
        <ul className={classes.postList}>
            {isLoading?<CircularProgress style={{color:"rgb(29, 52, 250)"}}/>:posts.map(({id, data:{ name, content, role, photoUrl}})=><Post id={id} author={name} role={role} content={content} photoUrl={photoUrl}/>)}
        </ul>
    )
}

export default PostList
