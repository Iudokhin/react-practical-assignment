import React, { useState } from 'react'
import {useEffect} from 'react';

export default function Test() {
const [img, setImg] = useState('')
    
  useEffect(() => {

    // fetch('http://localhost:8080/post', {
    //     method: "POST",
    //     headers : {
    //         'Content-Type' : ' application/json'
    //     },
    //     body:
    //     JSON.stringify({
    //         title: 'mytesttitle',
    //         username: 'Peter'
    //     })
       
     // fetch('http://localhost:8080/post', {
    //     method: "POST",
    //     headers : {
    //         'Content-Type' : ' application/json'
    //     },
    //     body:
    //     JSON.stringify({
    //         title: 'mytesttitle',
    //         username: 'Peter'
    //     })
    // })
    // .then(data => console.log(data))
    // // fetch('http://localhost:8080/post')
    // //     .then(res => res.json())
    // //     .then(data => {
    // //         console.log(data);
    // //     })
    // //     .catch((e) => console.error('API CONNECTION FAILED, PLEASE CHECK SERVER APP AND TRY AGAIN'))

  }, []);


  const handleChangeFile = (event) => {
      const file = event.target.files[0]
      
      let formData = new FormData()
      console.log(formData);
      formData.append('picture', file)
      console.log(formData);
      setImg(formData)
  }


  return (
    <div>
        <input onChange={handleChangeFile} type='file' />
        <button onClick={() => {
            fetch(`http://localhost:8080/post/1/picture`, {
                method: "POST",
                body: img 
            }
            )
        }}>
        Push</button>
    </div>
  )
}
