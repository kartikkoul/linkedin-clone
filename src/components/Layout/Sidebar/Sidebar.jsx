import { Avatar, Card } from '@material-ui/core'
import React from 'react'
import classes from './Sidebar.module.css'
import SidebarBottom from './SidebarBottom'
import SidebarTop from './SidebarTop'


const Sidebar = () => {
    return (
        <div className={classes.sidebar}>
            <Card className={classes.sidebarCard}>
                <SidebarTop/>
            </Card>
            <Card className={`${classes.sidebarCard} ${classes.sidebarBottom}`}>
                <SidebarBottom/>
            </Card>
        </div>
    )
}

export default Sidebar
