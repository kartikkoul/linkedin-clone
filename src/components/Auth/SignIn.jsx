import React from 'react'
import { useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { uiActions } from '../../store/slices/uiSlice';
import AuthLoader from '../Loaders';
import classes from './SignIn.module.css'

const SignIn = (props) => {
    const isLoading = useSelector(state=>state.ui.authLoader)
    const error = useSelector(state=>state.ui.error)
    const emailInputRef = useRef();
    const passInputRef = useRef();
    const dispatch = useDispatch();

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
                    <input type="email" ref={emailInputRef}/>
                    <label>Email</label>
                </div>

                <div className={classes.passwordInput}>
                    <input type="password" ref={passInputRef}/>
                    <label>Password</label>
                </div>
                <button type="submit">Sign In</button>
            </form>
        </div>
    )
}

export default SignIn
