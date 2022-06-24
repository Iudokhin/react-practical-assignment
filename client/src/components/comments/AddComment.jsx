import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { rerender } from '../../features/reducers/postSlice'
import { createComment } from '../../features/funcs/mainPostFuncs'
import './styles/Comment.css'

export default function AddComment(props) {
  const [comment, setComment] = useState('')
  const {user} = useSelector(store => store.account)
  const dispatch = useDispatch()

  return (
    <div className='comment__add'>
      <input className='post_input' value={comment} onChange={(e) => setComment(e.target.value)} type='text' placeholder='Input Comment'/>
      <button 
        className='custom-button'
        onClick={() => {
          dispatch(createComment({text:comment, postId:props.postId, username:user}))
          dispatch(rerender())
      }}
        >AddPost</button>
    </div>
    
  )
}
