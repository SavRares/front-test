import {React, useState} from 'react';
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form';
import '../App.css';


export default function CreatePost() {
    const [show, setShow] = useState(false);
  
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


    const handleChange = (e) => {
        var name = e.target.name;
        var value = e.target.value;
        console.log('Name: ', name);
        console.log("Value: ", value);
    }
  

    return (
      <>
        <Button variant="success" onClick={handleShow}>
          Add Post
        </Button>
  
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Post your announcement</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form.Group>
            <Form.Control size="lg" type="text" placeholder="Insert the title of the announcement here " name="title" onChange={handleChange}/>
            <br />
            <Form.Control size="lg" type="text" placeholder="Write a description" name="content" name="content" onChange={handleChange}/>
            <br />
            <Form.Control size="md" type="text" placeholder="Reward(e.g. 25$)" />
            <br />
            <Form>
                <Form.Group>
                    <Form.File id="exampleFormControlFile1" label="Upload a photo of your lost pet" name="image" onChange={handleChange}/>
                </Form.Group>
            </Form>
        </Form.Group>
          
          </Modal.Body>
          <Modal.Footer>
            <Button variant="danger" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={handleClose}>
              Create
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }
