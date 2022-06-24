import React, {  useRef, useState } from 'react'
import { useDispatch } from 'react-redux'
import { rerender } from '../../features/reducers/postSlice'
import { updatePost, uploadPhoto } from '../../features/funcs/mainPostFuncs'

export default function EditPost({postId}) {
  const [title, setTitle] = useState('')
  const photo = useRef(null)
  const dispatch = useDispatch()

  const handleUpdatePost = async () => {
    await updatePost(postId, {title:title})
    await uploadPhoto(postId, photo.current.files[0])
    await dispatch(rerender())
  }

  return (
    <div className='posts__edit-post'>
         <div>
            <input  ref={photo} type='file' />
         </div>
        <input 
          className='p-4 border border-1 m-1' 
          value={title} 
          onChange={(e) => setTitle(e.target.value)} 
          type='text' 
          placeholder='Change Title' 
        />
        <button 
          className='custom-button btn-success' 
          onClick={() => {handleUpdatePost()}}
        >Update post</button>
    </div>
  )
}
