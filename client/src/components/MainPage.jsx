import React from 'react'
import Posts from './post/Posts'
import MyModal from './utils/MyModal';

export default function MainPage(props) {
 
  return (
    <div className='container'>
        <div className='d-flex justify-content-between px-4 bg-black text-white align-items-center'>
            <h1 className='font-monospace'>Hello, {props.user}</h1>
            <button className='btn btn-danger h-50 ' onClick={() => props.loggedIn('')}>LogOut</button> 
        </div>
        <div className='d-flex justify-content-center py-3'>
          <MyModal type='add_post'/>
        </div>
        <Posts />   
    </div>
  )
}
