import React from 'react'
import classes from './Header.module.css'
import { Search } from '@material-ui/icons'
import logo from '../../assets/images/LinkedIn-Logo.png'

const Header = () => {
    return (
        <div className={classes.header}>
            <div className={classes.header__left}>
                <img src={logo} className={classes.logo} />
                <div className={classes.header__search}>
                    <Search/>
                    <input type="text"/>
                </div>
            </div>

            <div className={classes.header__right}>

            </div>
        </div>
    )
}

export default Header
