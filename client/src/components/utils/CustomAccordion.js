import React from 'react'
import { Accordion } from 'react-bootstrap'

export default function CustomAccordion({likes, dislikes}) {
  return (
    <Accordion>
            <Accordion.Item eventKey="0" className='border rounded'>
              <Accordion.Header><span className='text-success'>Likes </span> {likes.length}</Accordion.Header>
              <Accordion.Body>
                <p>{likes.toString()}</p>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
              <Accordion.Header><span className='text-danger'>Dislikes </span> {dislikes.length}</Accordion.Header>
              <Accordion.Body>
                <p>{dislikes.toString()}</p>
              </Accordion.Body>
            </Accordion.Item>
    </Accordion>
  )
}
