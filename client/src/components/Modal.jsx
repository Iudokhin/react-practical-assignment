import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'

export default function Modal(props) {
    const [show, setShow] = useState(false)
    const [type,setType] = useState('')

    useEffect(() => {
      switch (props.type) {
        case 'add_post':
          setType('Add post');
          break;
        case 'add_comment':
          setType('Add comment');
          break;
        case 'edit_post':
          setType('EDIT');
          break;
        case 'comments':
          setType('All Comments');
          break;
        default:
          break;
      }
    },[props.type])

    

  return (
    <div>
        <button disabled={props.disabled} onClick={() => setShow(true)}>{type}</button>
        {show && (
            <div className='modal-window'>
                <div onClick={() => setShow(false)} className='premodal'></div>
                <div className='modal'>MODAL WINDOW</div>
            </div>
        )}
    </div>
  )
}
