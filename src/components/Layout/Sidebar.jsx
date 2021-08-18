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
                    <div className={classes.sidebarTop_SecTwo}>
                        <div className={classes.profileViews}>
                            <span className={classes.label}>Who viewed your profile</span>
                            <span className={classes.amount}>1142</span>
                        </div>
                        <div className={classes.postViews}>
                            <span className={classes.label}>Views of your posts</span>
                            <span className={classes.amount}>4200</span>
                        </div>
                    </div>
                </div>
            </Card>
        </div>
    )
}

export default Sidebar
