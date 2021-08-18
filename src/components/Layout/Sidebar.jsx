import { Avatar, Card } from '@material-ui/core'
import React from 'react'
import classes from './Sidebar.module.css'
import avatar from '../../assets/images/dummyAvatar.jpg'
import banner from '../../assets/images/dummyBanner.jpg'


const Sidebar = () => {
    return (
        <div className={classes.sidebar}>
            <Card className={classes.sidebarCard}>
                <div className={classes.sidebarTop}>
                    <div className={classes.sidebarTop__SecOne}>
                        <div className={classes.banner}>
                            <img src={banner} alt="" srcset="" />
                        </div>
                        <Avatar src={avatar} className={classes.avatar}/>
                        <h4 className={classes.name}>Kartik Koul</h4>
                        <p className={classes.headline}>
                            Software Developer
                        </p>
                    </div>
                    <hr/>
                    <div className={classes.sidebarTop__SecTwo}>
                        <div className={classes.stat}>
                            <p>Who viewed your profile</p>
                            <p className={classes.amount}>1142</p>
                        </div>
                        <div className={classes.stat}>
                            <p>Views of your posts</p>
                            <p className={classes.amount}>4200</p>
                        </div>
                    </div>
                    <hr/>
                </div>
            </Card>
        </div>
    )
}

export default Sidebar
