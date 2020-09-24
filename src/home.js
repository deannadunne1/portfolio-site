import React from 'react'
import styled from 'styled-components'
import { Parallax, ParallaxLayer } from 'react-spring/renderprops-addons'
import AboutMe from './AboutMe'
import SelectWorks from './SelectWorks'
import Contact from './Contact'
import Affiliations from './Affiliations'

const Welcome = styled.div`
  margin-top: 25vh;
  color: white;
  text-align: left;
  margin-right: 40vw;
  margin-left: 21vw;
  background-color: rgba(0, 0, 0, 50%);
  padding: 1vw;
`

const Title = styled.h1`
  @import url('https://fonts.googleapis.com/css2?family=Josefin+Sans&family=Lustria&family=Maitree&display=swap');
  font-size: 4vw;
  font-family: ${({ theme }) => theme.title};
`
const Header = styled.h3`
  @import url('https://fonts.googleapis.com/css2?family=Josefin+Sans&family=Lustria&family=Maitree&display=swap');
  font-size: 2vw;
  font-family: ${({ theme }) => theme.header};
`
const Body = styled.p`
  @import url('https://fonts.googleapis.com/css2?family=Josefin+Sans&family=Lustria&family=Maitree&display=swap');
  font-size: 1.2vw;
  font-family: ${({ theme }) => theme.body};
`

const Cover = styled.img`
  width: 100%;
`
const PhotoDiv = styled.div`
  border: 5px solid black;
  width: 50vw;
  margin: 5vh 70vh;
`

export default function Home() {
  return (
    <div>
      <div>
        <Parallax pages={3} scrolling={true}>
          <ParallaxLayer offset={0} speed={2}>
            <PhotoDiv>
              <Cover src="./coverImg.png" />
            </PhotoDiv>
          </ParallaxLayer>
          <ParallaxLayer offset={0} speed={0.5} factor={0.2}>
            <Welcome>
              <Title>Deanna Dunne</Title>
              <Header>Software Engineer | Nonprofit Founder</Header>
              <Body>
                Hi! I am a former high school teacher turned fullstack
                JavaScript developer. I am passionate about equity, advocacy,
                and music and also am the founder and executive director of a
                harm reduction nonprofit focused on the electronic music
                industry and community.
              </Body>
            </Welcome>
          </ParallaxLayer>
          <ParallaxLayer id="aboutMe" offset={0.9} speed={1.5}>
            <AboutMe Title={Title} Header={Header} Body={Body} />
          </ParallaxLayer>
          <ParallaxLayer id="affiliations" offset={1} speed={1.2}>
            <Affiliations Title={Title} Header={Header} Body={Body} />
          </ParallaxLayer>
          <ParallaxLayer id="selectWorks" offset={1.9} speed={0.5}>
            <SelectWorks Title={Title} Header={Header} Body={Body} />
          </ParallaxLayer>
        </Parallax>
      </div>
      <div>
        <Contact Title={Title} Header={Header} Body={Body} />
      </div>
    </div>
  )
}
