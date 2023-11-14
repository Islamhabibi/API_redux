import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { useDispatch, useSelector } from "react-redux";
import { GET } from "./redux/ActionType";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import { Delete_user, Get } from "./redux/Action";
import AddUser from "./AddUser";
import UpdateUser from "./UpdateUser";
function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(Get());
  }, []);
  const users = useSelector((state) => state.users);
  console.log(users);

  return (
    <>
      <AddUser />
      <div style={{ display: "flex", gap: "20px", flexWrap: "wrap" }}>
        {users.map((e) => (
          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src={e.image} />
            
            <Card.Body>
              <Card.Title>{e.name}</Card.Title>
            </Card.Body>
            <ListGroup className="list-group-flush">
              <ListGroup.Item>Email:{e.email}</ListGroup.Item>
              <ListGroup.Item>gender: {e.gender}</ListGroup.Item>
              <ListGroup.Item>Password: {e.password}</ListGroup.Item>
            </ListGroup>

            <Card.Body>
              <UpdateUser data={e} />

              <Card.Link href="#" 
                onClick={()=>dispatch(Delete_user(e._id))}>Delete</Card.Link>
            </Card.Body>
          </Card>
        ))}
      </div>
    </>
  );
}

export default App;
