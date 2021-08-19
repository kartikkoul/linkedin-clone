import React from 'react'
import classes from './SidebarBottom.module.css'
import SidebarList from './SidebarList'

const DUMMY_DATA = [
    "dsa", "cpp", "reactjs", "nextjs", "webgl"
]

const SidebarBottom = () => {
    return (
        <div className={classes.sidebarBottomInner}>
            <div className={classes.title}>
                <p>Recent</p>
            </div>
            <div className={classes.list}>
                <SidebarList data={DUMMY_DATA}/>
            </div>
        </div>
    )
}

export default SidebarBottom
