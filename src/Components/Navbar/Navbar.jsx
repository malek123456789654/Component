import React from "react";
import { Container, Nav, Navbar as N } from "react-bootstrap";
import "./Navbar.css"
import log01 from "../../assets/Shopping.png"
import log02 from "../../assets/Shopping-Nom.png"
import log03 from "../../assets/shop.png"
const NavbarC = () => {
  return (
    <N bg="dark" variant="dark" >
      <Container>
        <N.Brand href="#home" className="navpic">
          <img src={log01} alt="Logo" height={70} />
        </N.Brand>
        <Nav className="me-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#features">Features</Nav.Link>
          <Nav.Link href="#pricing">Pricing</Nav.Link>
        </Nav>
        <div className="img-droit">

          <img src={log02} alt="Logo2" height={50} hspace="20" />
          <img src={log03} alt="Logo3" height={50} />
        </div>

      </Container>
    </N>
  );
};

export default NavbarC;
