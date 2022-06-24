import React from 'react'
import Comment from './Comment'
import { useSelector } from 'react-redux'

export default function AllComments({postId}) {
  const post = useSelector(store => store.post.posts.find(el => el.id === postId))

  return (
    <>
        {
          post.comments.length === 0 
          ? 
          <div>NO COMMENTS</div>
          :
          <ul className='comment__list'>
              <p>Total comments: {post.comments.length}</p>
              {post.comments.map((el,index) => <Comment key={index} {...el}/>)}
          </ul>
        }

    </>
    
  )
}
