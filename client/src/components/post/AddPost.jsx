import React, { useContext, useState } from 'react'
import { Context } from '../context/Context'
import { Rerender } from './Posts'
import { createPost } from '../utils/updatePost'

export default function AddPost(props) {
  const user = useContext(Context)
  const [title, setTitle] = useState('')
  const rerender = useContext(Rerender)

  return (
    <div className='d-flex justify-content-between px-4'>
      <input className='border rounded w-100 ps-4 fs-5' value={title} onChange={(e) => setTitle(e.target.value)} type='text' placeholder='Input Title'/>
      <button className='btn btn-primary' onClick={() => {
        createPost({title:title, username:user}, () => rerender)
        props.closeModal(false)
      }}
        >AddPost</button>
    </div>
    
  )
}
