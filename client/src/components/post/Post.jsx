import React, { useContext, useState } from 'react'
import { updatePost, deletePost } from '../utils/updatePost'
import { Context } from '../context/Context'
import { Rerender } from './Posts'
import { Accordion } from 'react-bootstrap'
import MyModal from '../utils/MyModal'



export default function Post(props) { 
    const user = useContext(Context)
    const rerender = useContext(Rerender)
    const [liked, setLiked] = useState(props.data.likes.some(el => el === user))
    const [disliked, setDisliked] = useState(props.data.dislikes.some(el => el === user))


  return (
      <div className='col border rounded p-3'>
          <h2 className='fs-3 bg-info  rounded py-3 text-center'>{props.data.title}</h2>
          <h2 className='fs-6 text-start'>Date: {new Date(+props.data.date).toString().slice(0,24)}</h2>
          <div >Created by: {props.data.username}</div>
          <div className='post-imagebox'>{props.data.imageSrc ? <img className='imagebox-img' src={props.data.imageSrc} /> : <p className='fs-1 p-5'>NO IMAGE</p>}</div>
          <div className='row px-5 mb-4'>
              <button className='col-6 py-2 fs-4 fw-bold rounded border bg-success' disabled={liked} onClick={() => updatePost(props.data.id, {dislikes:props.data.dislikes.filter(el => el!== user), likes:[...props.data.likes, user]},  () => rerender)}>LIKE</button>  
              <button className='col-6 fs-4 fw-bold rounded border bg-danger' disabled={disliked} onClick={() => updatePost(props.data.id, {likes:props.data.likes.filter(el => el!== user), dislikes:[...props.data.dislikes, user]}, () => rerender)}>DISLIKE</button>    
          </div>
          <Accordion>
            <Accordion.Item eventKey="0" className='border rounded'>
              <Accordion.Header><span className='text-success'>Likes </span> {props.data.likes.length}</Accordion.Header>
              <Accordion.Body>
                <p>{props.data.likes.toString()}</p>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
              <Accordion.Header><span className='text-danger'>Dislikes </span> {props.data.dislikes.length}</Accordion.Header>
              <Accordion.Body>
                <p>{props.data.dislikes.toString()}</p>
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
         
          <div className='d-flex justify-content-between my-3'>
            <MyModal type='add_comment' postId={props.data.id}/>
            <MyModal type='comments' postId={props.data.id}/>
          </div>
          <div className='d-flex justify-content-between my-3'>
            <MyModal type='edit_post' disabled={props.data.username !== user && true} postId={props.data.id}/>
            <button className='bg-danger btn' onClick={() => deletePost(props.data.id, () => rerender)} disabled={props.data.username !== user}>DELETE</button>
          </div>
          
      </div>
  )
}
