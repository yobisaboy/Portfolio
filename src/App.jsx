import React, { useState } from 'react';
import {
  HashRouter as Router,
  Route,
  Link,
  Routes
} from "react-router-dom";

import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';

import Home from './components/Profile.jsx';
import Games from './components/Games.jsx';

import logo from './assets/logo.png';
import './App.css';

function App() {
  const [expanded, setExpanded] = useState(false); // control navbar expand/collapse

  const closeNavbar = () => setExpanded(false); // function to close menu

  return (
    <Router>
      <Navbar
        bg="bright"
        variant="bright"
        expand="lg"
        fixed="top"
        className="nav-bar"
        expanded={expanded}
      >
        <Container>
          <Navbar.Brand as={Link} to="" className="logo-container" onClick={closeNavbar}>
            <img
              src={logo}
              alt="Logo"
              style={{ height: '50px' }}
            />
            yobisaboy
          </Navbar.Brand>
          <Navbar.Toggle
            aria-controls="basic-navbar-nav"
            onClick={() => setExpanded(expanded ? false : "expanded")}
          />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <p></p>
              <Nav.Link as={Link} to="/home" onClick={closeNavbar}>Profile</Nav.Link>
              <Nav.Link as={Link} to="/games" onClick={closeNavbar}>Games</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <div className="page-container" onClick={closeNavbar}>
        <Routes>
          <Route index element={<Games />} />
          <Route path="" element={<Games />} />
          <Route path="home" element={<Home />} />
          <Route path="games" element={<Games />} />
        </Routes>
      </div>

      <Navbar
        bg=""
        variant="bright"
        fixed="bottom"
        className="nav-bar"
      >
      <Container className="justify-content-end">
            <Nav className="mr-auto">
              <Nav.Link href="mailto:hoyiuyiuyoyo@gmail.com">Contact</Nav.Link>
              <Nav.Link href="https://www.linkedin.com/in/yoyoho" target="_blank" rel="noopener noreferrer">LinkedIn</Nav.Link>
              <Nav.Link href="https://github.com/yobisaboy" target="_blank" rel="noopener noreferrer">GitHub</Nav.Link>
            </Nav>

        </Container>
      </Navbar>

    </Router>
  );
}

export default App;
