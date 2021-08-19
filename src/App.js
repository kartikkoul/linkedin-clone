import React from 'react';
import './App.css';
import Feed from './components/Layout/Feed/Feed';
import Layout from './components/Layout/Layout';
import Sidebar from './components/Layout/Sidebar/Sidebar'

function App() {
  return (
    <Layout>
      <div className="App">
        <div className="AppInner">
          <Sidebar/>
          <Feed/>
        </div>
      </div>
    </Layout>
  );
}

export default App;
