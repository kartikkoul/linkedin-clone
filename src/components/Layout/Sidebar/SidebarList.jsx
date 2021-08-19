import React from 'react'
import classes from './SidebarList.module.css'


const SidebarList = (props) => {
    return (
        <ul className={classes.sidebarList__list}>
            {props.data.map(item=>{
                return <li>
                    <p className={classes.hashtag}>#</p>
                    <p>{item}</p>
                </li>
            })}
        </ul>
    )
}

export default SidebarList
