import React, { useState } from 'react'
import Test from './Test'

export default function Login(props) {
    const [user, setUser] = useState('')

  return (
    <div>
        <input value={user} onChange={(e) => setUser(e.target.value)} placeholder='INPUT LOGIN'/>
        <button onClick={() => props.loggedIn(user)}>LogIn</button>
        {/* <Test /> */}
    </div>
  )
}
