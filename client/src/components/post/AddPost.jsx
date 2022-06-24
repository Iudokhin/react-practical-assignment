import React, {  useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { rerender } from '../../features/reducers/postSlice'
import { createPost } from '../../features/funcs/mainPostFuncs'
import './styles/Posts.css'

export default function AddPost({closeModal}) {
  const [title, setTitle] = useState('')
  const dispatch = useDispatch()
  const {user} = useSelector(store => store.account)

  return (
    <div className='posts__add-post'>
      <input className='post_input' value={title} onChange={(e) => setTitle(e.target.value)} type='text' placeholder='Input Title'/>
      <button className='custom-button' onClick={() => {
        dispatch(createPost({title:title, username:user} ))
        dispatch(rerender())
        closeModal(false)
      }}
        >AddPost</button>
    </div>
    
  )
}
