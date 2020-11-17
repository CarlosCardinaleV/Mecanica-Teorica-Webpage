import React from 'react';
import * as ReactBootstrap from "react-bootstrap";
import {Link} from 'react-router-dom';

function Nav(){

  const navStyle = {
    color: 'white'
  };
	return (
		<ReactBootstrap.Navbar collapseOnSelect expand="lg" bg="danger" variant="dark">
      		<Link style={navStyle} to='/'>
            <ReactBootstrap.Navbar.Brand href="#Inicio">Inicio</ReactBootstrap.Navbar.Brand>
      		</Link>
          <ReactBootstrap.Navbar.Toggle aria-controls="responsive-navbar-nav" />
      		<ReactBootstrap.Navbar.Collapse id="responsive-navbar-nav">
        		<ReactBootstrap.Nav className="auto">
          		<ReactBootstrap.NavDropdown title="Lagrangiano" id="collasible-nav-dropdown">
            		<Link style={navStyle} to='/Problema_1_Lagrangiano'>
                  <ReactBootstrap.NavDropdown.Item href="#problema1">Problema 1</ReactBootstrap.NavDropdown.Item>
            		</Link>
                <Link style={navStyle} to='/Problema_2_Lagrangiano'> 
                  <ReactBootstrap.NavDropdown.Item href="#problema2">Problema 2</ReactBootstrap.NavDropdown.Item>
                </Link>
          		</ReactBootstrap.NavDropdown>
          		<ReactBootstrap.NavDropdown title="Hamiltoniano" id="collasible-nav-dropdown">
                <Link style={navStyle} to='/Problema_1_Hamilton'>
                <ReactBootstrap.NavDropdown.Item href="#problema1">Problema 1</ReactBootstrap.NavDropdown.Item>
            		</Link>

                <Link style={navStyle} to='/Problema_2_Hamilton'>
                <ReactBootstrap.NavDropdown.Item href="#problema2">Problema 2</ReactBootstrap.NavDropdown.Item>
          		  </Link>
              </ReactBootstrap.NavDropdown>
        		</ReactBootstrap.Nav>
      		</ReactBootstrap.Navbar.Collapse>
    	</ReactBootstrap.Navbar>
		);
}
export default Nav;