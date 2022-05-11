import React, { useContext, useState } from 'react'
import { Context } from '../context/Context'
import { Rerender } from '../post/Posts'
import { createComment } from '../utils/updatePost'

export default function AddComment(props) {
  const user = useContext(Context)
  const [comment, setComment] = useState('')
  const rerender = useContext(Rerender)

  return (
    <div className='d-flex justify-content-between'>
      <input className='ps-4 border rounded w-100' value={comment} onChange={(e) => setComment(e.target.value)} type='text' placeholder='Input Comment'/>
      <button 
        className='btn btn-primary'
        onClick={() => {
        createComment({text:comment, postId:props.postId, username:user}, () => rerender)
        props.closeModal(false)
      }}
        >AddPost</button>
    </div>
    
  )
}
