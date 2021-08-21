import { AddToPhotos } from '@material-ui/icons'
import React, { useRef, useState } from 'react'
import addProfilePictureImage from "../../assets/images/addProfilePicture.png"
import classes from './SignUp.module.css'

const SignUp = (props) => {
    const [image, setImage] = useState(null)
    const emailInputRef = useRef()
    const passInputRef = useRef()
    const fullNameInputRef = useRef()
    const headlineInputRef = useRef()
    const imageChangeHandler = (e) =>{
        const imageInput = e.target.file
        if(image===''||image===null||image===undefined){
            alert("Not supported")
            return
        }
        setImage(imageInput)
    }

    const submitHandler = (e) =>{
        e.preventDefault();
        props.signUp(emailInputRef.current.value, passInputRef.current.value, fullNameInputRef.current.value,headlineInputRef.current.value, image)
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
                <p>Profile Picture*</p>
                {image && <img src={URL.createObjectURL(image)} />}
                <div className={classes.photoInputArea}>
                    <div className={classes.photo}>
                        <label htmlFor="file"><img src={addProfilePictureImage}/></label>
                        <input type="file" id="file" accept="image/jpeg, image/png" className={classes.inputPhoto} onChange={imageChangeHandler}/>
                    </div>
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
