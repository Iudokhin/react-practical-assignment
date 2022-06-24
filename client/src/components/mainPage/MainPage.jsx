import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import Posts from '../post/Posts'
import MyModal from '../utils/MyModal';
import Login from '../login/Login';
import { logOut } from '../../features/reducers/accountSlice';
import { ADD_POST } from '../utils/constants';
import './MainPage.css'

export default function MainPage() {
  const {isLogged, user} = useSelector(store => store.account)
  const dispatch = useDispatch()
 
  return (
    <>
      {!isLogged
        ?
        <div className='mainPage__login'>
          <Login />
        </div>
        :
        (
          <div className='container'>
              <header className='mainPage__header'>
                  <h1 className='font-monospace'>Hello, {user}</h1>
                  <button 
                    className='custom-button btn-danger h-50 ' 
                    onClick={() => dispatch(logOut())}
                  >LogOut</button> 
              </header>
              <div className='mainPage__modal'>
                <MyModal type={ADD_POST}/>
              </div>
              <Posts />
          </div>
        )
      }
    </>
  )
}
