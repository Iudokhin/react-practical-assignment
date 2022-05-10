import React, { useState } from 'react'
import Modal from './Modal'
import { updatePost,createPost } from './updatePost'

export default function Post(props) { //comments, dislikes, likes, title, username:author, imageSrc, date, id
    // const [like, setLike] = useState(likes.length)
    // const [like, setLike] = useState(likes.length)
    const [liked, setLiked] = useState(props.data.likes.some(el => el === 'Peter'))
    const [disliked, setDisliked] = useState(props.data.dislikes.some(el => el === 'Peter'))

  return (
    <div className='post'>
        <h2>Date: {new Date(+props.data.date).toString().slice(0,24)}</h2>
        <h2>TITLE: {props.data.title}</h2>
        <div className='image-post'>{props.data.imageSrc ? <img className='img' src={props.data.imageSrc} /> : <p>NO IMAGE</p>}</div>
        <div>{props.data.username}AUTHOR</div>

        <div className='like-form'>
            <button disabled={liked} onClick={() => updatePost(props.data.id, {...props.data, likes:props.data.likes.filter(el => el!== 'Peter')})}>LIKE</button>
                <p>{props.data.likes.length-props.data.dislikes.length}</p>
            <button disabled={disliked} onClick={() => updatePost(props.data.id, {title:props.data.title, likes:props.data.likes, dislikes:['Peter']})}>DISLIKE</button>
            
        </div>
        <Modal type='add_comment'/>
        <Modal type='edit_post' disabled={props.data.username !== 'Peter' && true}/>
        <Modal type='comments'/>
        <button disabled={props.data.username !== 'Peter'}>DELETE</button>
    </div>
  )
}
