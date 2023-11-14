import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import { Add_user, Update_user } from "./redux/Action";
import { useDispatch } from "react-redux";
import axios from "axios";

function UpdateUser({data}) {
  const [show, setShow] = useState(false);
  const [name, setName] = useState(data.name);
  const [email, setEmail] = useState(data.email);
  const [password, setPassword] = useState(data.password);
  const [image, setImage] = useState(data.image );
  const [gender, setGender] = useState(data.gender );
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
console.log(data)
  const dispatch = useDispatch();
  const Update =async () => {
    const formaData=new FormData()
    formaData.append('file',image)
    formaData.append('upload_preset','ml_default')
    if(image.length===undefined){
        await axios
        .post('https://api.cloudinary.com/v1_1/dm5ktvety/upload',formaData)
        .then((res)=>
          {dispatch(Update_user(data._id,{name,email,password,image:res.data.url,gender}));  })
    }
    
    handleClose();
  };
  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Update user
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="Name"
                placeholder="Name"
                autoFocus
                defaultValue={data.name}
                onChange={(e) => setName(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="Email"
                placeholder="Email"
                autoFocus
                defaultValue={data.email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Image</Form.Label>
              <Form.Control
                type="file"
                accept="image/*"
                placeholder="Image"
                autoFocus
                
                onChange={(e) => setImage(e.target.files[0])}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="Password"
                placeholder="Password"
                autoFocus
                defaultValue={data.password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>gender</Form.Label>
              <Form.Control
                type="text"
                placeholder="gender"
                autoFocus
                defaultValue={data.gender}
                onChange={(e) => setGender(e.target.value)}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={Update}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default UpdateUser;
