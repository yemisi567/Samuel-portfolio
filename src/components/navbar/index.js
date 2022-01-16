import React from 'react';
import * as ReactBootStrap from "react-bootstrap";
import { Link } from "react-router-dom";
import { ReactComponent as Logo } from '../home/assets/logo.svg';


const NavBar = () => {

    return (
           <div className="App" >
                <ReactBootStrap.Navbar collapseOnSelect expand="lg"  variant="dark">
                <Link to="/home">
                <ReactBootStrap.Navbar.Brand href="/home"><Logo /></ReactBootStrap.Navbar.Brand>
                </Link>
                <ReactBootStrap.Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <ReactBootStrap.Navbar.Collapse id="responsive-navbar-nav">
                    <ReactBootStrap.Nav className="mr-auto" > 
                    <Link to="/about" style={{textDecoration: 'none'}}>
                    <ReactBootStrap.Nav.Link href="#about" className='navbar' style={{color: 'rgba(255, 255, 255, 0.7)'}}>About</ReactBootStrap.Nav.Link>
                    </Link>
                    <Link to="/projects" style={{textDecoration: 'none'}}>
                    <ReactBootStrap.Nav.Link href="#projects" className='navbar' style={{color: 'rgba(255, 255, 255, 0.7)'}}>Projects</ReactBootStrap.Nav.Link>
                    </Link>
                    <Link to="/contact" style={{textDecoration: 'none'}}>
                    <ReactBootStrap.Nav.Link href="#contact" className='navbar' style={{color: 'rgba(255, 255, 255, 0.7)'}}>Contact</ReactBootStrap.Nav.Link>
                    </Link>
                    <a href="/resume/resume.pdf" className='navbar' style={{textDecoration: 'none', color: 'rgba(255, 255, 255, 0.7)'}} download><strong>Download Cv</strong></a>
                    </ReactBootStrap.Nav>
                </ReactBootStrap.Navbar.Collapse>
                </ReactBootStrap.Navbar>
        </div>
    );
}

export default NavBar;