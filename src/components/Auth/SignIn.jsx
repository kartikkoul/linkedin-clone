import React from 'react'
import { useRef } from 'react'
import classes from './SignIn.module.css'

const SignIn = (props) => {
    const emailInputRef = useRef();
    const passInputRef = useRef();

    const submitHandler = (e) =>{
        e.preventDefault()
        const emailInput = emailInputRef.current.value
        const passInput = passInputRef.current.value

        props.signInHandler(emailInput, passInput);
    }

    return (
        <div className={classes.signIn__Card} onSubmit={submitHandler}>
            <div className={classes.headline}>
                <h3>Sign in</h3>
                <p>Stay updated on your professional world</p>
            </div>
            <form className={classes.signIn__inner}>
            <div className={classes.error}>
                    <p>Invalid Credentials</p>
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
