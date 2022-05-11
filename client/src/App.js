
import './App.css';
import Login from './components/Login';
import MainPage from './components/MainPage';
import React, { useState } from 'react'
import { Context } from './components/context/Context';
import 'bootstrap/dist/css/bootstrap.css'


function App() {
  const [loggedIn, setLoggedIn] = useState('')

  function loggedInFunc(user) {
    setLoggedIn(user)
  }

  return (
    <Context.Provider value={loggedIn}>
    {
      !loggedIn
        ?
        <Login loggedIn={loggedInFunc}/>
        :
        <MainPage loggedIn={loggedInFunc} user={loggedIn}/>
    }
    </Context.Provider>
    
  );
}

export default App;
