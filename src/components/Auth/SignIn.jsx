import React from 'react'
import classes from './SignIn.module.css'

const SignIn = () => {
    return (
        <div className={classes.signIn__Card}>
            <div className={classes.headline}>
                <h3>Sign in</h3>
                <p>Stay updated on your professional world</p>
            </div>
            <form className={classes.signIn__inner}>
            <div className={classes.error}>
                    <p>Invalid Credentials</p>
                </div>
                <div className={classes.emailInput}>
                    <input type="email"/>
                    <label>Email</label>
                </div>

                <div className={classes.passwordInput}>
                    <input type="password" />
                    <label>Password</label>
                </div>
                <button>Sign In</button>
            </form>
        </div>
    )
}

export default SignIn
