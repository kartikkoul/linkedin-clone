import React from 'react';
import './App.css';
import Header from './components/Layout/Header';
import Layout from './components/Layout/Layout';
import Sidebar from './components/Layout/Sidebar'

function App() {
  return (
    <Layout>
      <div className="App">
        <div className="AppInner">
          <Sidebar/>
        </div>
      </div>
    </Layout>
  );
}

export default App;
