import React from 'react';
import { useSelector } from 'react-redux';
import { Redirect, Route, Switch } from 'react-router-dom';
import './App.css';
import HomePage from './pages/HomePage';
import SignInPage from './pages/SignInPage';
import SignUpPage from './pages/SignUpPage';

function App() {
  const isAuthenticated = useSelector(state=>state.user.isAuthenticated)

  return (
    <Switch>
      <Route path="/" exact>
        {isAuthenticated && <Redirect to="/home"/>}
        {!isAuthenticated && <Redirect to="/signup"/>}
      </Route>
      <Route path="/signup" exact>
        {!isAuthenticated && <SignUpPage/>}
        {isAuthenticated && <Redirect to="/home"/>}
      </Route>
      <Route path="/signin">
        {!isAuthenticated && <SignInPage/>}
        {isAuthenticated && <Redirect to="/home"/>}
      </Route>
      <Route path="/home" exact>
        {isAuthenticated && <HomePage/>}
        {!isAuthenticated && <Redirect to="/signup"/>}
      </Route>
    </Switch>
    
  );
}

export default App;
