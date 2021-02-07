import logo from '../logo.svg';
import React, {Component} from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import MainContent from './MainContent';

class Header extends Component {

  render() {
    return (
      <div>
        <Navbar collapseOnSelect expand="sm" bg="dark" variant="dark">
          <Navbar.Brand href="/"><img src={logo} className="App-logo" alt="logo" />Главная страница</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link href="/">Старница с разделами</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
        <MainContent />
      </div>
    );
  }
}
export default Header
