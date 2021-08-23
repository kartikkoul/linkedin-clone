import React from 'react'
import classes from './Sidebar.module.css'
import SidebarBottom from './SidebarBottom'
import SidebarTop from './SidebarTop'


const Sidebar = () => {
    return (
        <div className={classes.sidebar}>
            <div className={classes.sidebarCard}>
                <SidebarTop/>
            </div>
            <div className={classes.sidebarCard}>
                <SidebarBottom/>
            </div>
        </div>
    )
}

export default Sidebar
