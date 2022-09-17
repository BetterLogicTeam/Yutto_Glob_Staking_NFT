// import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';
import './Header.css';

function Header() {

  
  return (
    <div>
        <Navbar className='nav_main' collapseOnSelect expand="lg" >
      <Container>
        <Navbar.Brand href="#home"><Link to="/"><img className='nev' src='logo.png'></img></Link></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
        
          <Nav className='alna'>
            <Nav.Link className='hxn' href="#Home">
             <Link to="/">Home</Link> 
              </Nav.Link>
              <Nav.Link className='hxn' href="#Mint">
            <Link to="/About_main">About Us</Link>
            </Nav.Link>
            <Nav.Link className='hxn' href="#Collection">
              <Link to="/Collection_main">Collection</Link>
            </Nav.Link>
            <Nav.Link className='hxn' href="#Mint">
            <Link to="/Benifits_main">Benifits</Link>
            </Nav.Link>
            <Nav.Link className='hxn' href="#Mint">
            <Link to="/Attributes_main">Attributes</Link>
            </Nav.Link>
            <Nav.Link className='hxn' href="#Mint">
            <Link to="/Roadmap_main">Roadmap</Link>
            </Nav.Link>
            
            <Nav.Link className='hxn' href="#Mint">
            <Link to="/Mint_main">Mint</Link>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>


    </div>
  )
}

export default Header