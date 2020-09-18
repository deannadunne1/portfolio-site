import React from 'react'
import styled from 'styled-components'
import Navbar from 'react-bootstrap/Navbar'
import NavDropdown from 'react-bootstrap/NavDropdown'
import Nav from 'react-bootstrap/Nav'
import Resume from './Resume.pdf'

const StyledNav = styled(Navbar)``

export default function Navigation() {
  return (
    <StyledNav bg="light" expand="lg">
      <Navbar.Brand href="/">Deanna L Dunne</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="#aboutMe">About Me</Nav.Link>
          <Nav.Link href="#selectWorks">Select Works</Nav.Link>
          <Nav.Link href="#beyonddope">Beyond Dope</Nav.Link>
          <Nav.Link href="#education">Teaching</Nav.Link>
          <Nav.Link href={Resume} target="_blank">
            Resume
          </Nav.Link>
          <Nav.Link href="#Contact">Contact</Nav.Link>
          <NavDropdown title="Selected Works" id="basic-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">
              Another action
            </NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.4">
              Separated link
            </NavDropdown.Item>
          </NavDropdown>
        </Nav>
      </Navbar.Collapse>
    </StyledNav>
  )
}
