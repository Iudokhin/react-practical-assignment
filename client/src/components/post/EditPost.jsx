import React, { useContext, useRef, useState } from 'react'
import { Rerender } from './Posts'
import { updatePost, uploadPhoto } from '../utils/updatePost'

export default function EditPost(props) {
const [title, setTitle] = useState('')
const photo = useRef(null)
const rerender = useContext(Rerender)

  return (
    <div className='d-flex flex-column'>
         <div>
            <input  ref={photo} type='file' />
            <button className='btn btn-primary' onClick={() => uploadPhoto(props.postId, photo.current.files[0])}>UploadImage</button>
         </div>
        <input className='p-4 border border-1 m-1' value={title} onChange={(e) => setTitle(e.target.value)} type='text' placeholder='Change Title' />
        <button className='btn btn-success' onClick={() => {
            updatePost(props.postId, {title:title}, () => rerender)
            props.closeModal(false)
        }}
        >Update post</button>
    </div>
  )
}
