import React, { useState } from 'react'
import { useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { uiActions } from '../../store/slices/uiSlice';
import AuthLoader from '../Loaders';
import classes from './SignIn.module.css'

const SignIn = (props) => {
    const isLoading = useSelector(state=>state.ui.authLoader)
    const error = useSelector(state=>state.ui.error)

    const inputStyleAfter = {
        height: "50%",
        width: "90%",
        marginTop: "10px"
    }

    const labelStyleAfter = {
        fontSize: "14px",
        color: "black",
        marginBottom: "32px",
    }
    
    const [emailinputStyle, setemailInputStyle]= useState(null)
    const [emaillabelStyle, setemaillabelStyle] = useState(null)
    const [passinputStyle, setpassInputStyle]= useState(null)
    const [passlabelStyle, setpasslabelStyle] = useState(null)


    const emailInputRef = useRef();
    const passInputRef = useRef();
    const dispatch = useDispatch();

    const emailBlurHandler = () =>{
        if(emailInputRef.current.value.trim().length!==0){
            setemailInputStyle(inputStyleAfter)
            setemaillabelStyle(labelStyleAfter)
            return
        }
        setemailInputStyle(null)
        setemaillabelStyle(null)
    }

    const passBlurHandler = () =>{
        if(passInputRef.current.value.trim().length!==0){
            setpassInputStyle(inputStyleAfter)
            setpasslabelStyle(labelStyleAfter)
            return
        }
        setpassInputStyle(null)
        setpasslabelStyle(null)
    }

    const submitHandler = (e) =>{
        e.preventDefault()
        dispatch(uiActions.loadingAuth(true))
        const emailInput = emailInputRef.current.value
        const passInput = passInputRef.current.value

        props.signInHandler(emailInput, passInput);
    }

    return (
        <div className={classes.signIn__Card} onSubmit={submitHandler}>
            {isLoading && <AuthLoader/>}
            <div className={classes.headline}>
                <h3>Sign in</h3>
                <p>Stay updated on your professional world</p>
            </div>
            <form className={classes.signIn__inner}>
            <div className={`${classes.error} ${error?classes.showError:""}`}>
                    <p>{error}</p>
            </div>
                <div className={classes.emailInput} >
                    <input type="email" ref={emailInputRef} onBlur={emailBlurHandler} style={emailinputStyle && emailinputStyle}/>
                    <label style={emaillabelStyle && emaillabelStyle}>Email</label>
                </div>

                <div className={classes.passwordInput}>
                    <input type="password" ref={passInputRef} onBlur={passBlurHandler} style={passinputStyle && passinputStyle}/>
                    <label style={passlabelStyle && passlabelStyle}>Password</label>
                </div>
                <button type="submit">Sign In</button>
            </form>
        </div>
    )
}

export default SignIn
