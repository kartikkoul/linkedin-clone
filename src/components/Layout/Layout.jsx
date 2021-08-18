import React from 'react'
import Header from './Header'
import classes from './Layout.module.css'

const Layout = () => {
    return (
        <React.Fragment>
            <Header/>
            <div className={classes.appBody}>

            </div>
        </React.Fragment>
    )
}

export default Layout
