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

const Card = styled(Col)`
  border-radius: 5px;
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
const StyledImg = styled.img`
  width: 75vw;
`
const AffiliationImg = styled.img`
  width: 25vw;
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
            <Title style={{ color: 'white' }}>
              <ReactTypingEffect text="About Me." />
            </Title>
          </Col>
        </Row>
        <Row>
          <Card>
            <Header>Career Pathway</Header>
            <hr />
            <StyledImg src="https://i.imgur.com/rhHlaGj.gif" />
          </Card>
        </Row>
        <Row>
          <Card>
            <Header>Affiliations</Header>
            <hr />
            <div>
              <Body>
                <Row>
                  <Col>
                    <AffiliationImg src="https://www.gracehopper.com/images/gh-logo-sm-w-h_1.svg" />
                  </Col>
                  <Col>
                    The Grace Hopper Program at Fullstack Academy is an
                    immersive software engineering course for women+ students.
                    It is a 17-week immersive course. The experience starts with
                    a 4-week, part-time portion, Foundations, that's followed by
                    the full-time, 13-week immersive.
                  </Col>
                </Row>
                <br /> <br />
                <Row>
                  <Col>
                    <img src="https://www.mathforamerica.org/sites/all/themes/mfa_custom/logo.png" />
                  </Col>
                  <Col>
                    The MFA Master Teacher fellowship is awared to mathematics
                    and science teachers who are experts in their fields,
                    dedicated to their students, and seek to hone their craft.
                  </Col>
                </Row>
                <br /> <br />
                <Row>
                  <Col>
                    <AffiliationImg src="https://www.teachforamerica.org/themes/custom/polaris/assets/img/logo.svg" />
                  </Col>
                  <Col>
                    Teach For America works toward the day when every child will
                    receive an excellent and equitable education. We find and
                    nurture leaders who commit to expanding opportunity for
                    low-income students, beginning with at least two years
                    teaching in a public school.
                  </Col>
                </Row>
                <br /> <br />
                <Row>
                  <Col>
                    <AffiliationImg src="http://static1.squarespace.com/static/54dd24d8e4b050a4841f8584/t/555ae919e4b01a7ed720b2ba/1564166042272/?format=1500w" />
                  </Col>
                  <Col>
                    Nap Girls Int'l is a collaborative organization whose
                    mission is to connect and empower women and nonbinary people
                    by nurturing creative and professional growth.
                  </Col>
                </Row>
              </Body>
            </div>
          </Card>
        </Row>
      </Container>
    </StyledAbout>
  )
}
