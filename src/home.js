import React from 'react'
import styled from 'styled-components'
//import cover from './cover.jpeg'
import { Parallax, ParallaxLayer } from 'react-spring/renderprops-addons'
import AboutMe from './AboutMe'
import SelectWorks from './SelectWorks'

const Welcome = styled.div`
  margin-top: 45vh;
  color: white;
  text-align: left;
  margin-right: 50vw;
  margin-left: 5vw;
  background-color: rgba(0, 0, 0, 50%);
  padding: 1vw;
`

const Title = styled.h1`
  @import url('https://fonts.googleapis.com/css2?family=Josefin+Sans&family=Lustria&family=Maitree&display=swap');
  font-size: 3rem;
  font-family: ${({ theme }) => theme.title};
`
const Header = styled.h3`
  @import url('https://fonts.googleapis.com/css2?family=Josefin+Sans&family=Lustria&family=Maitree&display=swap');
  font-size: 1.5rem;
  font-family: ${({ theme }) => theme.header};
`
const Body = styled.p`
  @import url('https://fonts.googleapis.com/css2?family=Josefin+Sans&family=Lustria&family=Maitree&display=swap');

  font-family: ${({ theme }) => theme.body};
`

const Cover = styled.img`
  width: 100vw;
`

export default function Home() {
  return (
    <div>
      <Parallax pages={3} scrolling={true}>
        <ParallaxLayer offset={0} speed={2}>
          <Cover src="https://i.imgur.com/Fkl5s8c.jpg" />
        </ParallaxLayer>
        <ParallaxLayer offset={0} speed={0.5}>
          <Welcome>
            <Title>Deanna Dunne</Title>
            <Header>Software Engineer | Nonprofit Founder</Header>
            <Body>
              Hi! I am a former high school teacher turned fullstack JavaScript
              developer. I am passionate about equity, advocacy, and music and
              also am the founder and executive director of a harm reduction
              nonprofit focused on the electronic music industry and community.
            </Body>
          </Welcome>
        </ParallaxLayer>
        <ParallaxLayer id="aboutMe" offset={1} speed={2}>
          <AboutMe Title={Title} Header={Header} Body={Body} />
        </ParallaxLayer>
        <ParallaxLayer id="selectWorks" offset={2} speed={2}>
          <SelectWorks Title={Title} Header={Header} Body={Body} />
        </ParallaxLayer>
      </Parallax>
    </div>
  )
}
