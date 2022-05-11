import { Button, Modal } from "react-bootstrap";
import { useEffect, useState } from "react";
import AddPost from "../post/AddPost";
import AddComment from "../comments/AddComment";
import AllComments from "../comments/AllComments";
import EditPost from "../post/EditPost";


export default function MyModal(props) {
    const [show, setShow] = useState(false);
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
  
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  
    return (
      <>
        <Button variant="primary" onClick={handleShow} disabled={props.disabled} >
          {type}
        </Button>
        <Modal
          show={show}
          onHide={handleClose}
          keyboard={false}
        >
          <Modal.Body>

                    <div >
                        {type === 'Add post' && <AddPost closeModal={setShow} />}
                        {type === 'Add comment' && <AddComment postId={props.postId} closeModal={setShow}/>}
                        {type === 'EDIT' && <EditPost postId={props.postId} closeModal={setShow}/>}
                        {type === 'All Comments' && <AllComments postId={props.postId}/>}
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