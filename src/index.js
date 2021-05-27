import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Posts from './dash/Posts.js';
import './App.css';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

import CreatePost from "./dash/CreatePost.js";
import axios from 'axios';

ReactDOM.render(
  <React.StrictMode>
    <Navbar variant="light" className="navbarClass">
          <Navbar.Brand href="#home">LOGO</Navbar.Brand>
          <Nav className="mr-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#post">Posts</Nav.Link>
              <Nav.Link href="#contact">Contact</Nav.Link>
          </Nav>
          <Nav>
              <FormControl type="text" placeholder="Search Post" className="mr-sm-1" />
              <Button variant="success" className="mr-sm-2">Search</Button>
              
          </Nav>
          <Nav>
            <CreatePost />
          </Nav>

      
    </Navbar>
    <Posts />
  </React.StrictMode>,
  document.getElementById('root')
);


