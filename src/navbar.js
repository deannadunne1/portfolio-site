import React from 'react'
import styled from 'styled-components'
import Navbar from 'react-bootstrap/Navbar'
import NavDropdown from 'react-bootstrap/NavDropdown'
import Nav from 'react-bootstrap/Nav'
import Resume from './Resume.pdf'

const StyledNav = styled(Navbar)`
  box-shadow: 1px 1px 2px black;
  background-color: ${({ theme }) => theme.gray};
  text-align: center;
  @import url('https://fonts.googleapis.com/css2?family=Josefin+Sans&family=Lustria&family=Maitree&display=swap');
  font-family: ${({ theme }) => theme.title};
  font-size: 1.5vw;
  color: ${({ theme }) => theme.white};
`

const NavTitle = styled(NavDropdown)`
  .nav-color {
    @import url('https://fonts.googleapis.com/css2?family=Josefin+Sans&family=Lustria&family=Maitree&display=swap');
    font-size: 1.5vw;
    color: ${({ theme }) => theme.white};
  }
`

export default function Navigation() {
  return (
    <StyledNav bg="light" expand="lg">
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <NavTitle title="Deanna L Dunne" id="basic-nav-dropdown" bg="color">
            <NavDropdown.Item href="#aboutme">About Me</NavDropdown.Item>
            <NavDropdown.Item href="#selectworks">
              Select Works
            </NavDropdown.Item>
            <NavDropdown.Item href={Resume}>Resume</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#contact">Contact</NavDropdown.Item>
          </NavTitle>
        </Nav>
      </Navbar.Collapse>
    </StyledNav>
  )
}
