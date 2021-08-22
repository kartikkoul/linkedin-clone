import { AddToPhotos } from '@material-ui/icons'
import React, { useRef, useState } from 'react'
import addProfilePictureImage from "../../assets/images/addProfilePicture.png"
import classes from './SignUp.module.css'

const SignUp = (props) => {
    const [image, setImage] = useState("")
    const [overlayOpacity, setOverlayOpacity] = useState(0)
    const emailInputRef = useRef()
    const passInputRef = useRef()
    const fullNameInputRef = useRef()
    const headlineInputRef = useRef()
    const imageChangeHandler = (e) =>{
        const imageInput = e.target.files[0]
        if(imageInput===''||image===null||image===undefined){
            alert("Not supported")
            return
        }
        setImage(imageInput)
    }

    const submitHandler = (e) =>{
        e.preventDefault();
        const photoURL=image!==""&&image?URL.createObjectURL(image):""
        props.signUp(emailInputRef.current.value, passInputRef.current.value, fullNameInputRef.current.value,headlineInputRef.current.value, photoURL)
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
                <div className={classes.photoInputArea} >
                    <div className={classes.photo} onMouseEnter={()=>setOverlayOpacity(1)} onMouseLeave={()=>setOverlayOpacity(0)}>
                        <label htmlFor="file">{image!==""&&image?<img src={URL.createObjectURL(image)}/>:<img src={addProfilePictureImage}/>}</label>
                        <input type="file" name="image" id="file" accept="image/jpeg, image/png" className={classes.inputPhoto} onChange={imageChangeHandler}/>
                        <div className={classes.overlay} style={{opacity:overlayOpacity}}></div>
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
