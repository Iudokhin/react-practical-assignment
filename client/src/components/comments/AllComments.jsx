import React from 'react'
import Comment from './Comment'
import useFetch from '../utils/customHooks/useFetch'

export default function AllComments(props) {
  const {data,loading} = useFetch(`http://localhost:8080/post/${props.postId}`)

  return (
    <div>
        {
            loading
                ?
                <div>Loading...</div>
                :
                data.result.comments.length === 0 
                    ? 
                    <div>NO COMMENTS</div>
                    :
                    <ul>
                        <p>Total comments: {data.result.comments.length}</p>
                        {data.result.comments.map((el,index) => <Comment key={index} comment={el}/>)}
                    </ul>
        }

    </div>
    
  )
}
