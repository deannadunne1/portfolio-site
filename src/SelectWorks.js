import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import styled from 'styled-components'

const Card = styled(Col)`
  border-radius: 10px;
  box-shadow: 5px 5px 10px;
  margin: 20px;
  padding: 15px;
  background-color: ${({ theme }) => theme.white};
`

const StyledWorks = styled.div`
  padding-left: 10vw;
  padding-right: 10vw;
  );
  height: 100vh;
  padding-top: 20vh;
`

export default function SelectWorks(props) {
  const { Title, Header, Body } = props
  return (
    <StyledWorks>
      <Container fluid>
        <Row>
          <Card>
            <Header>DJ Party</Header>
            <hr />
            <Body>About Tech Stack Github Link</Body>
          </Card>
          <Card>
            <Header>Emo Rocks</Header>
            <hr />
            <Body>About Tech Stack Github Link</Body>
          </Card>
          <Card>
            <Header>This Website</Header>
            <hr />
            <Body>About Tech Stack Github Link</Body>
          </Card>
        </Row>
      </Container>
    </StyledWorks>
  )
}
