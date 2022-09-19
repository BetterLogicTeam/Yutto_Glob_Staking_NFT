// import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';
import React, { useEffect, useState } from "react";
import { loadWeb3 } from "../../Api/Api";
import { wirecontractadress, wirecontractabi } from "../../contracts/contract";
import './Header.css';

function Header() {

  let [btnTxt, setBtTxt] = useState("Connect");
  const [value, setValue] = useState("");
  const [price_bnb, setprice_bnb] = useState();
  const [collection, setCollection] = useState([]);

  const handleChange = (event) => {
    setValue(event.target.value);

    // console.log("value is:", event.target.value);
  };
  const Connect = async () => {
    let acc = await loadWeb3();
    // console.log("ACC=",acc)
    if (acc == "No Wallet") {
      setBtTxt("No Wallet");
    } else if (acc == "Wrong Network") {
      setBtTxt("Wrong Network");
    } else {
      let myAcc =
        acc?.substring(0, 4) + "..." + acc?.substring(acc?.length - 4);
      setBtTxt(myAcc);
      const web3 = window.web3;
      let wire_contract_instance = new web3.eth.Contract(
        wirecontractabi,
        wirecontractadress
      );
    }
  }
    

    useEffect(() => {
      Connect();
    }, []);

  
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

            <Nav.Link className='hxn' href="#Mint">
            <Link to="/Mint_main" className="link_text" ><button className="btn btna_navbar_here">{btnTxt}</button></Link>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>


    </div>
  )
}

export default Header