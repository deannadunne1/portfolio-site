import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import styled from 'styled-components'

let Card = styled(Col)`
  border-radius: 10px;
  box-shadow: 5px 5px 10px;
  margin: 20px;
  padding: 15px;
`
export default function AboutMe(props) {
  const { Title, Header, Body } = props
  return (
    <Container fluid>
      <Row>
        <Card>
          <Header>Education</Header>
          <hr />
          <Body>Full Stack, Johns Hopkins, Binghamton</Body>
        </Card>
        <Card>
          <Header>Career Pathway</Header>
          <hr />
          <Body>7 years teaching, Upperline Code, Beyond Dope</Body>
        </Card>
        <Card>
          <Header>Affiliations</Header>
          <hr />
          <Body>MFA, TFA, Nap Girls, Grace Hopper</Body>
        </Card>
      </Row>
    </Container>
  )
}
