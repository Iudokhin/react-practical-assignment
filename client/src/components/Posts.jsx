import React, { useRef, useState } from 'react'
import useFetch from './useFetch'
import Post from './Post'
import {Pagination} from 'react-bootstrap'

export default function Posts() {
    const [page, setPage] = useState(1)
    const number = useRef(1)

    const {data, loading, error} = useFetch(`http://localhost:8080/post/page/${page}`)
    console.log(data);

    function createPagination(pages) {
        let arr = []
        for(let i = 0; i<pages; i++) {
            arr.push(<div  onClick={(e) => setPage(e.target.innerHTML)} className='pagination-item'>{i+1}</div>)
        }
        return arr
    }

    if(error) {
        return <h1>Oops, looks kile smth went wrong</h1>
    }

  return (
    <div>
        
        {
            loading
                ?
                <div>Loading...</div>
                :
                <pre className='posts'>
                    {data.result.map((el, index) => <Post key={index} data={el} />)}
                </pre>
        }
        <div className='pagination'>{createPagination(data.totalPages)}</div>
        
        

    </div>
  )
}
