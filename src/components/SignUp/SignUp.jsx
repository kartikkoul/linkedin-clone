import React from 'react'
import classes from './SignUp.module.css'

const SignUp = () => {
    return (
        <div className={classes.signUp__Card}>
            <form className={classes.signUp__inner}>
                <p>Email</p>
                <input type="email" />
                <p>Password</p>
                <input type="email" />
                <p>Full Name</p>
                <input type="email" />
                <p>Headline</p>
                <input type="email" />
                <p>Photo</p>
                <input type="email" />
                <p className={classes.agreement}>
                    By clicking Agree & Join, you agree to the LinkedIn <span>User Agreement</span>,<span> Privacy Policy</span> and <span>Cookie Policy</span>.
                </p>
                <button>Agree & Join</button>
            </form>
        </div>
    )
}

export default SignUp
