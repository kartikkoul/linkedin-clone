import React from 'react'
import classes from './SidebarTop.module.css'
import avatar from '../../../assets/images/dummyAvatar.jpg'
import banner from '../../../assets/images/dummyBanner.jpg'
import { Avatar } from '@material-ui/core'
import { Bookmark } from '@material-ui/icons'

const SidebarTop = () => {
    return (
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
                    <div className={classes.sidebarTop__SecThree}>
                        <div className={classes.myItems}>
                            <Bookmark className={classes.myItemsIcon}/>
                            <p>My Items</p>
                        </div>
                    </div>
                </div>
    )
}

export default SidebarTop
