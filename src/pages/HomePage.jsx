import React from 'react'
import Layout from '../components/Layout/Layout'
import Sidebar from '../components/Layout/Sidebar/Sidebar'
import Feed from '../components/Layout/Feed/Feed'
import News from '../components/Layout/News/News'


const HomePage = () => {
    return (
        <Layout>
              <div className="App">
                <div className="AppInner">
                  <Sidebar/>
                  <Feed/>
                  <News/>
                </div>
              </div>
        </Layout>
    )
}

export default HomePage
