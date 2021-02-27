import React from "react";
//this is our skeleton of our components
import { Container, Logo, Menu, MenuItem } from "./styles";
const Navbar: React.FC = () => {
  return (
    <>
      <Container>
        <Logo>darcyio</Logo> 
        <Menu>
          <MenuItem>About</MenuItem>
          <MenuItem>Contact</MenuItem>
        </Menu>
      </Container>
    </>
  );
};

export default Navbar;
