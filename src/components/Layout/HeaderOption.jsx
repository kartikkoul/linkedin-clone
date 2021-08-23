import classes from './HeaderOption.module.css'
import avatar from '../../assets/images/dummyAvatar.png'
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { userAuthActions } from '../../store/slices/userAuth'
import { uiActions } from '../../store/slices/uiSlice'

const HeaderOption = (props) => {
    const userDetails = useSelector(state=>state.user.userDetails)
    const dispatch = useDispatch();
    const [style, setStyle] = useState({
        optionsVisibility:"hidden",
        height:"24px",
        width:"24px"
    })
    return (
            <div className={classes.headerOption} onMouseOver={()=>setStyle({optionsVisibility:"visible", height:"20px", width:"20px"})} onMouseOut={()=>setStyle({optionsVisibility:"hidden", height:"24px", width:"24px"})}>
                {props.Icon && <props.Icon className={classes.headerOption__icon}/>}
                {props.Avatar && <div className={classes.headerOption__avatar}><img src={userDetails.avatar!==""&&userDetails.avatar?userDetails.avatar:avatar} alt={userDetails.fullName} style={{height:style.height, width:style.width}}/></div>}
                {props.Icon && <p>{props.title}</p>}
                {props.Avatar && <div className={classes.me}><p>{props.title}</p><svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor" class="bi bi-caret-down-fill" viewBox="0 0 16 16">
                                    <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z"/>
                                </svg></div>}
                {props.Avatar && <ul className={classes.meOptions} style={{visibility:style.optionsVisibility}}>
                    <li onClick={()=>{
                        dispatch(uiActions.loadingAuth(false))
                        dispatch(userAuthActions.signOut())
                        }}>Sign Out</li>
                </ul> }
            </div>
        
    )
}

export default HeaderOption
