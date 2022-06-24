import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { filterPosts, loadPosts } from '../../features/funcs/mainPostFuncs'
import Post from './Post'
import Filter from './filter/Filter'
import './styles/Posts.css'

export default function Posts() {
    const [page, setPage] = useState(1)
    const {isLoading, toFilter, posts, totalPages, rerender} = useSelector(store => store.post)
    const dispatch = useDispatch()

    useEffect(() => {
        if(toFilter) {
            dispatch(filterPosts(toFilter))
        }else{
            dispatch(loadPosts(page))
        }    
    },[page, rerender, toFilter, dispatch])

    function createPagination() {
        if(toFilter)
            return null

        let arr = []
        for(let i = 0; i<totalPages; i++) {
            arr.push(<li  key={i} onClick={e => setPage(e.target.innerHTML)} className='page-item'><button className="page-link" href="#">{i+1}</button></li>)
        }
        return arr
    }

  return (
    <>
        { 
            isLoading
                ?
                <div>Loading...</div>
                :
                <>
                    <Filter />
                    <pre className='row row-cols-xl-3  row-cols-md-2 row-cols-1'>
                        {posts.length === 0
                            ?
                            <div className='posts__not-found'>No posts found</div>
                            :
                            posts.map((el) => <Post key={el.id} {...el} />)}
                    </pre>
                </>
        }
        <ul className='pagination pagination-lg d-flex justify-content-center'>{createPagination()}</ul>

    </>
  )
}
