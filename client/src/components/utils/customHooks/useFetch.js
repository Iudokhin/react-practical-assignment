import  { useEffect, useRef, useState } from 'react'

export default function useFetch(url, rerender) {
    const isCurrent = useRef(true)
    const [fetchedData, setFetchedData] = useState({data:'', loading: true, error:null})



    
    useEffect(() => {
        setFetchedData(prevData => ({data:prevData.data, loading:true, error:null}))
        fetch(url)
        .then(resp => resp.json())
        .then(data => {
            if(isCurrent)
                setFetchedData({data, loading:false, error:null})
        })
        .catch(error => {
            if(isCurrent)
            setFetchedData({data:'', loading:false, error})
        })
        
    }, [url, rerender])
    
  return fetchedData
}
