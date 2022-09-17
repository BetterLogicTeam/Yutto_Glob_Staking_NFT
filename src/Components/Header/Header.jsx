// import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';
import './Header.css';
import React, { useEffect, useState } from "react";
import { loadWeb3 } from "../../Api/Api";
import { wirecontractadress, wirecontractabi } from "../../contracts/contract";

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
        acc?.substring(0, 8) + "..." + acc?.substring(acc?.length - 8);
      setBtTxt(myAcc);
      const web3 = window.web3;
      let wire_contract_instance = new web3.eth.Contract(
        wirecontractabi,
        wirecontractadress
      );
    }
  }
    

    let bnb_mint = async () => {
      let acc = await loadWeb3();
      // console.log("ACC=",acc)
      if (acc == "No Wallet") {
        alert("No Wallet");
      } else if (acc == "Wrong Network") {
        alert("Wrong Network");
      } else {
        const web3 = window.web3;
        let wire_contract_instance = new web3.eth.Contract(
          wirecontractabi,
          wirecontractadress
        );
        const maxlimit = await wire_contract_instance.methods
          .BuyCoin()
          .send({ from: acc, value: "1" });
      }
    };

    // let myObj = [
    //   { name: "Hassaan", age: "25", language: "JS" },

    //   { name: "Faraz", age: "29", language: "React" },

    //   { name: "Tayyab", age: "35", language: "React.js" },
    // ];

    // var values = myObj.map((items, index) => {
    //   return items.name;
    // });
    // console.log("what is values", values);

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
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>


    </div>
  )
}

export default Header