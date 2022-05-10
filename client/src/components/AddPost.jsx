import React from 'react'
import { createPost } from './updatePost'

export default function AddPost() {
  return (
    <div onClick={() => createPost({title:":NEW TEST POST", username:'PETER'})}>AddPost</div>
  )
}
