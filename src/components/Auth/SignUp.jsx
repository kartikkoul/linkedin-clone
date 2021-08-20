import { AddToPhotos } from '@material-ui/icons'
import React, { useRef } from 'react'
import classes from './SignUp.module.css'

const SignUp = (props) => {
    const emailInputRef = useRef()
    const passInputRef = useRef()
    const fullNameInputRef = useRef()
    const headlineInputRef = useRef()
    const photoInputRef = useRef()

    const submitHandler = (e) =>{
        e.preventDefault();
        props.signUp(emailInputRef.current.value, passInputRef.current.value, fullNameInputRef.current.value,headlineInputRef.current.value, photoInputRef.current.value)
    }

    return (
        <div className={classes.signUp__Card}>
            <form className={classes.signUp__inner} onSubmit={submitHandler}>
                <p>Email</p>
                <input type="email" ref={emailInputRef}/>
                <p>Password</p>
                <input type="password" ref={passInputRef}/>
                <p>Full Name</p>
                <input type="text" ref={fullNameInputRef}/>
                <p>Headline</p>
                <input type="text" ref={headlineInputRef}/>
                <p>Profile Picture</p>
                <div className={classes.photoInputArea}>
                    <label><AddToPhotos/></label>
                    <input type="file" className={classes.inputPhoto} ref={photoInputRef}/>
                </div>
                <p className={classes.agreement}>
                    By clicking Agree & Join, you agree to the LinkedIn <span>User Agreement</span>,<span> Privacy Policy</span> and <span>Cookie Policy</span>.
                </p>
                <button type="submit">Agree & Join</button>
            </form>
            <p>Already on LinkedIn Clone? <a href="">Sign In</a></p>
        </div>
    )
}

export default SignUp
