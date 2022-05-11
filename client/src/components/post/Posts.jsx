import React, { createContext, useEffect, useRef, useState } from 'react'
import useFetch from '../utils/customHooks/useFetch'
import Post from './Post'

export const Rerender = createContext()

export default function Posts() {
    const [page, setPage] = useState(1)
    const [rerender, setRerender] = useState(true)
    let {data, loading, error} = useFetch(`http://localhost:8080/post/page/${page}`, rerender)

    function createPagination(pages) {
        let arr = []
        for(let i = 0; i<pages; i++) {
            arr.push(<li  key={i} onClick={(e) => setPage(e.target.innerHTML)} className='page-item'><a className="page-link" href="#">{i+1}</a></li>)
        }
        return arr
    }

    if(error) {
        return <h1>Oops, looks kile smth went wrong</h1>
    }

  return (
    <Rerender.Provider value={setRerender}>
        { 
            loading
                ?
                <div>Loading...</div>
                :
                <pre className='row row-cols-3'>
                    {data.result.map((el, index) => <Post key={index} data={el} />)}
                </pre>
        }
        <ul className='pagination pagination-lg d-flex justify-content-center'>{createPagination(data.totalPages)}</ul>

    </Rerender.Provider>
  )
}
