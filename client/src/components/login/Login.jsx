import React from 'react'
import { useRef } from 'react'
import { useDispatch } from 'react-redux'
import { setUser } from '../../features/reducers/accountSlice'
import './Login.css'

export default function Login() {
    const dispatch = useDispatch()
    const name = useRef(null)

    const handleSetUser = () => {
      if(name.current.value.trim().length !== 0)
        dispatch(setUser(name.current.value))
    }

  return (
    <div className='login'>
        <input ref={name} className='login__input' placeholder='LOGIN'/>
        <button className='custom-button ms-3' onClick={handleSetUser}>LogIn</button>
    </div>
  )
}
