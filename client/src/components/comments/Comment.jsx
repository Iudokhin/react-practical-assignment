import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { rerender } from '../../features/reducers/postSlice'
import { deleteComment, updateComment } from '../../features/funcs/mainPostFuncs'

export default function Comment({text, username, id}) {
    const {user} = useSelector(store => store.account)
    const dispatch = useDispatch()

  return (
    <li className='comment__item'>
        <div className='d-flex'>
            <p className='fw-bold pe-3'>{username}: </p>
            <p>{text}</p>
        </div>
        
        {username === user 
            && 
            <div className='comment__item_edit'>
                <button className='custom-button bg-warning' onClick={() => {
                    updateComment(id, {text:prompt("New text"), likes:[], dislikes:[] })
                    dispatch(rerender())
                }}>EDIT</button>
                <button className='custom-button bg-danger' onClick={() => {
                    dispatch(deleteComment(id))
                    dispatch(rerender())
                }}>DELETE</button>
            </div>
        }
    </li>
    )
}