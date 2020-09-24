import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import styled from 'styled-components'

const Footer = styled.div`
  background-color: ${({ theme }) => theme.pink};
  position: absolute;
  width: 100vw;
  margin-top: 98vh;
  padding: 15px;
  border-top: 3px solid black;
`
const ContactLink = styled.a`
  color: black;
  text-decoration: none;
  :hover {
    color: ${({ theme }) => theme.lime};
    text-decoration: none;
  }
`

export default function Contact(props) {
  const { Title, Header, Body } = props
  return (
    <Footer>
      <Container>
        <Row>
          <Col>
            <Title style={{ fontSize: '3vw' }}>Contact Me</Title>
          </Col>
        </Row>
        <Row>
          <Col>
            <ContactLink href="mailto:deanna.dunne@gmail.com">
              deanna.dunne@gmail.com
            </ContactLink>
          </Col>
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
        <Row>
          <Col style={{ fontSize: '8px' }}>
            Copyright © 2020 deannadunne.com - All Rights Reserved.
          </Col>
        </Row>
      </Container>
    </Footer>
  )
}
