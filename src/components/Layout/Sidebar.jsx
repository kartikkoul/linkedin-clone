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
                    </div>
                </div>
            </Card>
        </div>
    )
}

export default Sidebar
