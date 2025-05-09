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
import phone from './assets/phone.png';
import email from './assets/email.png';
import linkedin from './assets/linkedin.png';
import github from './assets/github.png';
import whatsapp from './assets/whatsapp.png';
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
            {/* <Nav.Link as={Link} to="/home" target="_blank" rel="noopener noreferrer">Profile</Nav.Link> */}

            <div className="contact-info">
              <a href="tel:+16476370831" target="_blank" rel="noopener noreferrer" title="Contact Yoyo via Phone Call">
                <img src={phone} alt="Phone" className="contact-icon" />
              </a>

              <a href="https://wa.me/+16476370831" target="_blank" rel="noopener noreferrer" title="Contact Yoyo via WhatsApp">
                <img src={whatsapp} alt="WhatsApp" className="contact-icon" />
              </a>

              <a href="mailto:yobisaboy@gmail.com" target="_blank" rel="noopener noreferrer" title="Contact Yoyo via Email">
                <img src={email} alt="Email" className="contact-icon" />
              </a>

              <a href="https://www.linkedin.com/in/yoyoho" target="" rel="noopener noreferrer" title="Yoyo's LinkedIn">
                <img src={linkedin} alt="LinkedIn" className="contact-icon" />
              </a>

              <a href="https://github.com/yobisaboy" target="" rel="noopener noreferrer" title="Yoyo's GitHub">
                <img src={github} alt="GitHub" className="contact-icon" />
              </a>

            </div>
          </Nav>

        </Container>
      </Navbar>

    </Router>
  );
}

export default App;
