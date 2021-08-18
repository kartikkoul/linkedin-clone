import React from 'react'
import classes from './Header.module.css'
import { Search } from '@material-ui/icons'

const Header = () => {
    return (
        <div className={classes.header}>
            <div className={classes.header__left}>
                <img src="" alt="" srcset="" />
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
