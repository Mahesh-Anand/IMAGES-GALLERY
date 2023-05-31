import React from "react";
import { Navbar, Container } from "react-bootstrap";
import { ReactComponent as Logo } from "../images/logo.svg";
const navbarStyle = {
  backgroundColor: "#eeeeee",
};
const Header = ({title}) => {
  return (
    //
    <Navbar style={navbarStyle} variant="light">
      {/* <Navbar.Brand href="#home">Navbar</Navbar.Brand> */}
      <Container>
        {/* <Navbar.Brand href="/">{props.title}</Navbar.Brand> */}
        <Logo alt  = {title} style={{maxWidth:"12rem",maxHeight:"2rem"}}/>  
        {/* object in js format in jsx */}
      </Container>
    </Navbar>
  );
};

export default Header;
