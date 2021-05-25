import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import LoginModal from './LoginModal';
import Register from "./RegisterModal";
import {Navbar, Nav, Button, Image, Carousel} from 'react-bootstrap';

import infoimage from "./img/info.jpg";
import background from "./img/bckg.jpg";

ReactDOM.render(
  <React.StrictMode>
    <div>
      <Navbar bg="warning" variant="light">
      <Navbar.Brand href="#home">LOGO</Navbar.Brand>
      <Nav className="mr-auto">
        <Nav.Link href="#home">Home</Nav.Link>
        <Nav.Link href="#contact">Contact</Nav.Link>
      </Nav>
      <Nav>
          <LoginModal />
      </Nav>
      
    </Navbar>
    <Container className="maininfo" fluid>
      <Row className="mainrow">
        <Col className='text-center regdiv' xs={12} sm={4}>
          <Register />
        </Col>
        <Col xs={12} sm={8}>
        <Image src={infoimage} style={{minHeight: '450px', paddingRight: '0', paddingLeft: '0'}} fluid/>
         <div className="imgtext">We are a community of people who love animals and are looking to reunite them with their owners</div>
        </Col>
      </Row>
    </Container>
        <Carousel>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={background}
      alt="First slide"
    />
    <Carousel.Caption>
      <h1>Where's my Fluffymon?</h1>
      <h3>Your favorite pet went missing?</h3>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={background}
      alt="Second slide"
    />

    <Carousel.Caption>
      <h1>Where's my Fluffymon?</h1>
      <h3>Or maybe you found someone else's pet?</h3>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={background}
      alt="Third slide"
    />

    <Carousel.Caption>
      <h1>Where's my Fluffymon?</h1>
      <h3>Join Where's my Fluffymon today!</h3>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>

        </div>
       


  </React.StrictMode>,
  document.getElementById('root')
);


