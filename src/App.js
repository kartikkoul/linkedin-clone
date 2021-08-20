import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import HomePage from './pages/HomePage';
import SignInPage from './pages/SignInPage';
import SignUpPage from './pages/SignUpPage';

function App() {
  return (
    <Switch>
      <Route path="/" exact>
        <HomePage/>
      </Route>
      <Route path="/signup" exact>
        <SignUpPage/>
      </Route>
      <Route path="/signin">
        <SignInPage/>
      </Route>
      <Route path="/home" exact>
          <HomePage/>
      </Route>
    </Switch>
    
  );
}

export default App;
