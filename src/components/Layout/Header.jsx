import React from 'react'
import classes from './Header.module.css'
import { BusinessCenter, Home, Notifications, Search, SupervisorAccount, Textsms } from '@material-ui/icons'
import logo from '../../assets/images/LinkedIn-Logo.png'
import HeaderOption from './HeaderOption'

const Header = () => {
    return (
        <div className={classes.header}>
            <div className={classes.header__left}>
                <img src={logo} className={classes.logo} />
                <div className={classes.header__search}>
                    <Search/>
                    <input type="text" placeholder="Search for jobs, skills and companies..."/>
                </div>
            </div>

            <div className={classes.header__right}>
                <HeaderOption Icon={Home} title="Home"/>
                <HeaderOption Icon={SupervisorAccount} title="My Network"/>
                <HeaderOption Icon={BusinessCenter} title="Jobs"/>
                <HeaderOption Icon={Textsms} title="Messaging"/>
                <HeaderOption Icon={Notifications} title="Notifications"/>
                
            </div>
        </div>
    )
}

export default Header
