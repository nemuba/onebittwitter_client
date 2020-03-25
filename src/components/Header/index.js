import React from "react";
import { Navbar, NavItem, Row, Icon } from 'react-materialize';
import styled from 'styled-components';
import logo from './../../images/logo.png';


const NavbarBlue = styled(Navbar)`
  background-color: #05d3f4;`
;
const Logo = styled.img`
  margin-top: 2px;`
;
const IconUser = styled(Icon)`
  font-size: 40px !important;`
;

const Header = () => (
  <Row>
    <NavbarBlue brand={
      <Logo src={logo}
        alt="OneBitTwitter"
        className="responsive-img col s6 l3 offset-s6 offset-l2 center"
      />
      }
      alignLinks="right"
      className="navbar"
      >
      <NavItem href='/logout'>
        Logout
      </NavItem>
      <NavItem href='/user/x/edit'>
          <IconUser class="icon_user">account_circle</IconUser>
      </NavItem>
    </NavbarBlue>
  </Row>
);

export default Header;
