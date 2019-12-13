import React from "react";
import { useHistory, Link } from "react-router-dom";
import { MainHeader, Nav, H1 } from './styles';

const Header = () => {
  return (
    <MainHeader>
      <H1>{"GA-ReactRedux-Beginner"}</H1>
      <Nav>
        <Link to="/">Home</Link>
        <Link to="/products">All Products</Link>
        <Link to="/products/4">Product 4</Link>
      </Nav>
    </MainHeader>
  );
};

export default Header;
