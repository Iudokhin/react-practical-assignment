import React from 'react'
import { useState } from 'react';
import Modal from './Modal';
import Posts from './Posts'

export default function MainPage(props) {

  return (
    <div>
        <div>
            <h1>Hello, {props.user}</h1>
            <button onClick={() => props.loggedIn('')}>LogOut</button> 
        </div>
        <Modal type='add_post'/>
        <Posts />  
        
    </div>
  )
}
