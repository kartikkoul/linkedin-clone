import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect, Route, Switch } from 'react-router-dom';
import './App.css';
import HomePage from './pages/HomePage';
import SignInPage from './pages/SignInPage';
import SignUpPage from './pages/SignUpPage';
import { userAuthActions } from './store/slices/userAuth';

function App() {
  const isAuthenticated = useSelector(state=>state.user.isAuthenticated)
  const dispatch = useDispatch()
  const token = localStorage.getItem("token")
  const fullName = localStorage.getItem("fullName")
  const headline=localStorage.getItem("headline")
  const avatar = localStorage.getItem("avatar")


  useEffect(()=>{
    if(token){
      console.log("token exists")
      const userDetails = {
        fullName:fullName,
        headline:headline,
        avatar:avatar
      };
      dispatch(userAuthActions.signIn({token, userDetails}))
    }
  },[])

  return (
    <Switch>
      <Route path="/" exact>
        {isAuthenticated && <Redirect to="/home"/>}
        {!isAuthenticated && <Redirect to="/signin"/>}
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
        {!isAuthenticated && <Redirect to="/signin"/>}
      </Route>
    </Switch>
    
  );
}

export default App;
