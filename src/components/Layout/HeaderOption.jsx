import { Icon } from '@material-ui/core'
import React from 'react'

const HeaderOption = (props) => {
    return (
        <div className={classes.headerOption}>
            {props.Icon && <Icon className="headerOption__icon"/>}
            <h3>{props.title}</h3>
        </div>
    )
}

export default HeaderOption
