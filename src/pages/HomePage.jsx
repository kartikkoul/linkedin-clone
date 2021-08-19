import React from 'react'
import Layout from '../components/Layout/Layout'
import Sidebar from '../components/Layout/Sidebar/Sidebar'
import Feed from '../components/Layout/Feed/Feed'


const HomePage = () => {
    return (
        <Layout>
              <div className="App">
                <div className="AppInner">
                  <Sidebar/>
                  <Feed/>
                </div>
              </div>
        </Layout>
    )
}

export default HomePage
