import { Button, Modal } from "react-bootstrap";
import { useEffect, useState } from "react";
import AddPost from "../post/AddPost";
import AddComment from "../comments/AddComment";
import AllComments from "../comments/AllComments";
import EditPost from "../post/EditPost";
import { useCallback } from "react";
import { ADD_COMMENT, ADD_POST, ALL_COMMENTS, EDIT } from "./constants";


export default function MyModal({type:typeToRender, disabled, postId}) {
    const [show, setShow] = useState(false);
    const [type,setType] = useState('')

    useEffect(() => {
      switch (typeToRender) {
        case ADD_POST:
          setType(ADD_POST);
          break;
        case ADD_COMMENT:
          setType(ADD_COMMENT);
          break;
        case EDIT:
          setType(EDIT);
          break;
        case ALL_COMMENTS:
          setType(ALL_COMMENTS);
          break;
        default:
          break;
      }
    },[typeToRender])
  
    const handleClose = useCallback(() => setShow(false),[])
    const handleShow = useCallback(() => setShow(true),[])
  
    return (
      <>
        <button 
          className={disabled ?'disabled-button' : 'custom-button'}
          onClick={handleShow} 
          disabled={disabled} 
        >
        {type}</button>
        <Modal
          show={show}
          onHide={handleClose}
          keyboard={false}
        >
          <Modal.Body>
                    <div >
                        {type === ADD_POST && <AddPost closeModal={setShow} />}
                        {type === ADD_COMMENT && <AddComment postId={postId} closeModal={setShow}/>}
                        {type === EDIT && <EditPost postId={postId} closeModal={setShow}/>}
                        {type === ALL_COMMENTS && <AllComments postId={postId}/>}
                    </div>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }