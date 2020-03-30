import React from "react";
import { Navbar, NavItem, Row, Icon } from 'react-materialize';
import styled from 'styled-components';
import logo from './../../images/logo.png';


const NavbarBlue = styled(Navbar)`
  background-color: #5a0ce9;`
;
const Logo = styled.img`
  margin-top: 2px;`;

const IconUser = styled(Icon)`
  font-size: 40px !important;`;

const Header = (props) => (
  <Row>
    <NavbarBlue brand={
      <a href="/timeline" className="col s12 m10 l10 offset-s2 offset-m3" style={{marginTop: '3px'}}>
        <Logo src={logo}
          alt="OneBitTwitter"
          className="responsive-img col s8 l3 offset-s6 offset-l2 center"
        />
      </a>
      }
      alignLinks="right"
      className="navbar"
      >
      <NavItem onClick={() => props.logOut()} >
        Logout
      </NavItem>
      <NavItem href={`/user/${props.id}/edit`}>
      { ( props.photo != null ?
          <img src={`${props.photo.profile.url}`}
            style={{'marginTop': '10px'}}
            className="circle responsive-img col s6 l7 offset-l1" alt="Profile User"
          /> :
          <IconUser class="icon_user">account_circle</IconUser>
        )}
      </NavItem>
    </NavbarBlue>
  </Row>
);

export default Header;
