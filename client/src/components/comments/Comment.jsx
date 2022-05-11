import React, { useContext } from 'react'
import { Context } from '../context/Context'
import { Rerender } from '../post/Posts'
import { deleteComment, updateComment } from '../utils/updatePost'

export default function Comment(props) {
  const user = useContext(Context)
  const rerender = useContext(Rerender)


  return (
    <li className='d-flex flex-column border rounded fs-5 font-monospace py-3 px-3'>
        <div className='d-flex'>
            <p className='fw-bold pe-3'>{props.comment.username}: </p>
            <p>{props.comment.text}</p>
        </div>
        
        {props.comment.username === user && 
            <div className='d-flex justify-content-between px-5'>
                <button className='btn bg-warning' onClick={() => updateComment(props.comment.id, {text:prompt("New text") }, () => rerender)}>EDIT</button>
                <button className='btn bg-danger' onClick={() => deleteComment(props.comment.id, () => rerender)}>DELETE</button>
            </div>
        }
    </li>
    )
}