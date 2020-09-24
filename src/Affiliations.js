import React, { useState } from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import styled from 'styled-components'
import ReactTypingEffect from 'react-typing-effect'

const Card = styled(Col)`
  background-color: rgba(0, 0, 0, 30%);
  margin-left: 15vw;
  width: 30vw;
  padding: 15px;
  text-align: left;
  color: white;
`
const AffiliationImg = styled.img`
  width: 20vw;
`

export default function Affiliations(props) {
  const { Title, Header, Body } = props
  return (
    <>
      <Title>
        <ReactTypingEffect text="Affiliations" />
      </Title>
      <Container>
        <Row>
          <Col>
            <Card>
              <Body>
                The Grace Hopper Program at Fullstack Academy is an immersive
                software engineering course for women+ students. It is a 17-week
                immersive course. The experience starts with a 4-week, part-time
                portion, Foundations, that's followed by the full-time, 13-week
                immersive.
              </Body>
            </Card>
          </Col>
          <Col>
            <AffiliationImg src="https://www.gracehopper.com/images/gh-logo-sm-w-h_1.svg" />
          </Col>
        </Row>
        <br /> <br />
        <Row>
          <Col>
            <Card>
              <Body>
                The MFA Master Teacher fellowship is awared to mathematics and
                science teachers who are experts in their fields, dedicated to
                their students, and seek to hone their craft.
              </Body>
            </Card>
          </Col>
          <Col>
            <img src="https://www.mathforamerica.org/sites/all/themes/mfa_custom/logo.png" />
          </Col>
        </Row>
        <br /> <br />
        <Row>
          <Col>
            <Card>
              <Body>
                Teach For America works toward the day when every child will
                receive an excellent and equitable education. We find and
                nurture leaders who commit to expanding opportunity for
                low-income students, beginning with at least two years teaching
                in a public school.
              </Body>
            </Card>
          </Col>
          <Col>
            <AffiliationImg src="https://www.teachforamerica.org/themes/custom/polaris/assets/img/logo.svg" />
          </Col>
        </Row>
        <br /> <br />
        <Row>
          <Col>
            <Card>
              <Body>
                Nap Girls Int'l is a collaborative organization whose mission is
                to connect and empower women and nonbinary people by nurturing
                creative and professional growth.
              </Body>
            </Card>
          </Col>
          <Col>
            <AffiliationImg src="http://static1.squarespace.com/static/54dd24d8e4b050a4841f8584/t/555ae919e4b01a7ed720b2ba/1564166042272/?format=1500w" />
          </Col>
        </Row>
      </Container>
    </>
  )
}
