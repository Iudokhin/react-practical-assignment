import React from 'react'
import { updatePost, deletePost } from '../../features/funcs/mainPostFuncs'
import MyModal from '../utils/MyModal'
import { useDispatch, useSelector } from 'react-redux'
import { useState } from 'react'
import { ADD_COMMENT, ALL_COMMENTS, EDIT } from '../utils/constants'
import { rerender } from '../../features/reducers/postSlice'
import { NoPhoto } from '../utils/icons'
import CustomAccordion from '../utils/CustomAccordion'


export default function Post({title, date,username,imageSrc, likes, dislikes, id}) { 
    const {user} = useSelector(store => store.account)
    const dispatch = useDispatch()
    const [feedback, setFeedback] = useState({
      isDisabledLikes:likes.some(el => el === user),
      isDisabledDislikes:dislikes.some(el => el === user),
      likes,
      dislikes
    })

    const handleLike = () => {
      let updatedDislikesArr = feedback.dislikes.filter(el => el!== user)
      let updatedLikesArr = [...feedback.likes, user]
      updatePost(id, {dislikes: updatedDislikesArr, likes:updatedLikesArr})
      setFeedback({isDisabledDislikes:false, isDisabledLikes:true, likes:updatedLikesArr, dislikes:updatedDislikesArr})
    }

    const handleDislike = () => {
      let updatedDislikesArr = [...feedback.dislikes, user]
      let updatedLikesArr = feedback.likes.filter(el => el!== user)
      updatePost(id, {dislikes: updatedDislikesArr, likes:updatedLikesArr})
      setFeedback({isDisabledLikes:false, isDisabledDislikes:true, likes:updatedLikesArr, dislikes:updatedDislikesArr})
    }

  return (
      <div className='col posts__post'>
          <h2 className='post_title'>{title}</h2>
          <h2 className='post_date'>Date: {new Date(+date).toString().slice(0,24)}</h2>
          <div >Created by: {username}</div>
          <div className='post-imagebox'>
            {imageSrc 
              ? 
              <img className='imagebox-img' alt="post_photo" src={imageSrc} /> 
              : 
              <NoPhoto />
            }
          </div>
          <div className='d-flex px-5 my-4 gap-3'>
              <button 
                className={feedback.isDisabledLikes?'col-6 disabled-button':`col-6 custom-button bg-success`}
                disabled={feedback.isDisabledLikes} 
                onClick={handleLike}
              >LIKE</button>  
              <button 
                className={feedback.isDisabledDislikes?'col-6 disabled-button':`col-6 custom-button bg-danger`} 
                disabled={feedback.isDisabledDislikes} 
                onClick={handleDislike}
              >DISLIKE</button>    
          </div>
         <CustomAccordion {...feedback}/>
          <div className='post_comments'>
            <MyModal type={ADD_COMMENT} postId={id}/>
            <MyModal type={ALL_COMMENTS} postId={id}/>
          </div>
          <div className='post_comments'>
            <MyModal type={EDIT} disabled={username !== user && true} postId={id}/>
            <button 
              className={username!==user?'disabled-button':'bg-danger custom-button'}
              onClick={() => {
                dispatch(deletePost(id))
                dispatch(rerender())
              }} 
              disabled={username !== user}
            >DELETE</button>
          </div>
          
      </div>
  )
}
