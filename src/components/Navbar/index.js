//import * as ReactBootStrap from "react-bootstrap";
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import  NavDropdown  from 'react-bootstrap/NavDropdown';
//import { Container, Navbar } from "react-bootstrap";

const MyNav  =() => {
    
    return <>
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
  <Container>
  <Navbar.Brand href="#home">🤖</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="me-auto">
      <Nav.Link href="#About">About</Nav.Link>
      <Nav.Link href="#Contact">Contact</Nav.Link>
      <Nav.Link href="#Skills">Skills</Nav.Link>
      <NavDropdown title="Projects" id="collasible-nav-dropdown">
        <NavDropdown.Item href="#Project1">Project1</NavDropdown.Item>
        <NavDropdown.Item href="#Project2">Project2</NavDropdown.Item>
        <NavDropdown.Item href="#WorkingApps">Working App</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
      </NavDropdown>
    </Nav>
    <Nav>
      
    </Nav>
  </Navbar.Collapse>
  </Container>
</Navbar>


</>
}

export default MyNav;