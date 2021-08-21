import React from 'react'
import classes from './SidebarTop.module.css'
import avatar from '../../../assets/images/dummyAvatar.png'
import banner from '../../../assets/images/dummyBanner.jpg'
import { Avatar } from '@material-ui/core'
import { Bookmark } from '@material-ui/icons'
import { useSelector } from 'react-redux'

const SidebarTop = () => {

    const userDetails = useSelector(state=>state.user.userDetails)

    return (
                <div className={classes.sidebarTop}>
                    <div className={classes.sidebarTop__SecOne}>
                        <div className={classes.banner}>
                            <img src={banner} alt="" srcset="" />
                        </div>
                        <img src={userDetails.avatar} className={classes.avatar} alt={avatar}/>
                        <h4 className={classes.name}>{userDetails.fullName}</h4>
                        <p className={classes.headline}>
                            {userDetails.headline}
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
