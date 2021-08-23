import React from 'react'
import classes from './News.module.css'

const createNews = (headline, time, readers) =>{
    return(
        <div className={classes.newsItem}>
            <div className={classes.headline}>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-dot" viewBox="0 0 16 16">
                    <path d="M8 9.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z"/>
                </svg>
                <h3>{headline}</h3>
            </div>
            <div className={classes.stats}>
                <p>{time}h ago •</p>
                <p>{readers} readers</p>
            </div>
        </div>
    )
}

const News = () => {
    return (
        <div className={classes.newsArea}>
            <div className={classes.newsCard}>
                <div className={classes.title}>
                    <p>LinkedIn News</p>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-info-square-fill" viewBox="0 0 16 16">
                        <path d="M0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2zm8.93 4.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533L8.93 6.588zM8 5.5a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"/>
                    </svg>
                </div>
                {createNews("Elon Musk announces humanoid 'Tesla Bot'", "16", "2,600")}
                {createNews("PayPal launches crypto buying and selling in the UK", "15", "1402")}
                {createNews("Season 5 of La Casa de Papel/Money Heist Will Be Its Last", "4", "1600")}
                {createNews("'Do you have other job offers?'", "12", "3300")}
                {createNews("Why everyone must know how to code?", "9", "1221")}
                {createNews("React 18 to arrive soon : React Team", "18", "402")}


            </div>
        </div>
    )
}

export default News
