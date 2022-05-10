
import './App.css';
import Login from './components/Login';
import MainPage from './components/MainPage';
import Test from './components/Test';
import React, { useState } from 'react'

function App() {
  const [loggedIn, setLoggedIn] = useState('')

  function loggedInFunc(user) {
    setLoggedIn(user)
  }

  return (
    <>
    {
      !loggedIn
        ?
        <Login loggedIn={loggedInFunc}/>
        :
        <MainPage loggedIn={loggedInFunc} user={loggedIn}/>
    }
    </>
    
  );
}

export default App;
