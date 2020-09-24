import React, { useState } from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import styled from 'styled-components'
import {
  Transition,
  animated,
  useTransition,
  useSpring,
} from 'react-spring/renderprops'
import ReactTypingEffect from 'react-typing-effect'

const StyledAbout = styled.div`
  padding-left: 10vw;
  padding-right: 10vw;
  );
  height: 100vh;
  padding-top: 20vh;
`
const StyledImg = styled.img`
  width: 65vw;
  margin-left: 20vw;
`

export default function AboutMe(props) {
  const { Title, Header, Body } = props
  // const [on, toggle] = useState(false)

  // const transition = useTransition(on, null, {
  //   from: { opacity: 0 },
  //   enter: { opacity: 1 },
  //   leave: { opacity: 0 },
  // })
  // const aniProps = useSpring({ opacity: 1, from: { opacity: 0 } })

  return (
    <StyledAbout>
      <Container fluid>
        <Row>
          <Col>
            <Title>
              <ReactTypingEffect text="Career Timeline" />
            </Title>
          </Col>
        </Row>
        <Row>
          <StyledImg src="./careerTimeline.gif" />
        </Row>
      </Container>
    </StyledAbout>
  )
}
