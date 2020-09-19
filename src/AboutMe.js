import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import styled from 'styled-components'
import { Transition, animated } from 'react-spring/renderprops'

const Card = styled(Col)`
  border-radius: 10px;
  box-shadow: 5px 5px 10px;
  margin: 20px;
  padding: 15px;
  background-color: ${({ theme }) => theme.white};
  text-align: justify;
`

const StyledAbout = styled.div`
  padding-left: 10vw;
  padding-right: 10vw;
  );
  height: 100vh;
  padding-top: 20vh;
`

export default function AboutMe(props) {
  const { Title, Header, Body } = props
  const items = [true]
  return (
    <StyledAbout>
      <Container fluid>
        <Row>
          <Transition
            native
            items={items}
            from={{ transform: 'translate3d(0,-40px,0)' }}
            enter={{ transform: 'translate3d(0,0px,0)' }}
            leave={{ transform: 'translate3d(0,-40px,0)' }}>
            {(item) => (props) => (
              <Col>
                <animated.div style={props}>
                  <Title>ABOUT ME</Title>
                </animated.div>
              </Col>
            )}
          </Transition>
        </Row>
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
    </StyledAbout>
  )
}
