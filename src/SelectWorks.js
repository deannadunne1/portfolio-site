import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import styled from 'styled-components'
import ReactTypingEffect from 'react-typing-effect'

const Card = styled(Col)`
  border-radius: 5px;
  box-shadow: 5px 5px 10px;
  margin: 20px;
  padding: 15px;
  background-color: ${({ theme }) => theme.white};
  text-align: justify;
`

const StyledWorks = styled.div`
  padding-left: 10vw;
  padding-right: 10vw;
  );
  height: 100vh;
  padding-top: 20vh;
  padding-bottom: 5vh;
`

export default function SelectWorks(props) {
  const { Title, Header, Body } = props
  return (
    <StyledWorks>
      <Title>
        <ReactTypingEffect text="Selected Works." />
      </Title>
      <Container fluid>
        <Row>
          <Card>
            <Header>DJ Party</Header>
            <hr />
            <Body style={{ fontSize: '1.3vw' }}>
              In-browser multi-user application to collaborate on shared music
              streaming through Spotify with live chat
              <ul style={{ fontSize: '1vw' }}>
                <li>
                  Designed the schema for GraphQL and incorporated Apollo for
                  efficient data storage and retrieval
                </li>
                <li>
                  Programmed GraphQL subscriptions for real time communication
                  and streaming
                </li>
                <li>
                  Designed and built front end using React, Styled Components,
                  and Bootstrap
                </li>
              </ul>
              <a href="https://github.com/Capstone-A/teama">Github</a>
            </Body>
          </Card>
          <Card>
            <Header>Emo Rocks</Header>
            <hr />
            <Body style={{ fontSize: '1.3vw' }}>
              Fully developed e-commerce web application where a user can buy
              pet rocks and pay though stripe
              <ul style={{ fontSize: '1vw' }}>
                <li>
                  Implemented a RESTful backend using Express, and Sequelize
                  that handles persistent user cart sessions and order tracking
                </li>
                <li>
                  Utilized local storage to program persistent cart sessions for
                  guest users
                </li>
                <li>
                  Designed responsive front end React components utilizing React
                  hooks and Redux for streamlined state management and
                  Material-UI for a modern design
                </li>
              </ul>
              <a href="https://github.com/WeBeShoppin/emoRock">Github</a>
            </Body>
          </Card>
        </Row>
      </Container>
    </StyledWorks>
  )
}
