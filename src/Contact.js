import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import styled from 'styled-components'

const Footer = styled.div`
  background-color: ${({ theme }) => theme.tan};
  position: absolute;
  width: 100vw;
  margin-top: 98vh;
  padding: 15px;
`
const ContactLink = styled.a`
  color: white;
  text-decoration: none;
  :hover {
    color: black;
  }
`

export default function Contact(props) {
  const { Title, Header, Body } = props
  return (
    <Footer>
      <Container>
        <Row>
          <Col>
            <Title style={{ fontSize: '3vw', color: 'white' }}>
              Contact Me
            </Title>
          </Col>
        </Row>
        <Row>
          <Col>deanna.dunne@gmail.com</Col>
        </Row>
        <Row>
          <Col>
            <ContactLink href="https://github.com/deannadunne1">
              GITHUB
            </ContactLink>
            ||
            <ContactLink href="https://www.linkedin.com/in/deanna-dunne/">
              LINKEDIN
            </ContactLink>
          </Col>
        </Row>
      </Container>
    </Footer>
  )
}
