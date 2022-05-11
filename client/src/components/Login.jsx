import React, { useState } from 'react'

export default function Login(props) {
    const [user, setUser] = useState('')

  return (
    <div className='position-absolute top-50 start-50 fs-4 translate-middle'>
        <input value={user} className='border rounded p-3' onChange={(e) => setUser(e.target.value)} placeholder='LOGIN'/>
        <button className='btn btn-primary ms-3 fs-4' onClick={() => props.loggedIn(user)}>LogIn</button>
    </div>
  )
}
