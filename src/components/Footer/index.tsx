import React from "react";
//this is our skeleton of our components
import { Container, FooterNavItem, FooterNav } from "./styles";
const Footer: React.FC = () => {
  return (
    <>
      <Container>
        <FooterNav>
          <FooterNavItem>Terms and Conditions</FooterNavItem>
          <FooterNavItem>Privacy Notice</FooterNavItem>
        </FooterNav>
      </Container>
    </>
  );
};

export default Footer;
