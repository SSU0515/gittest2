import React from 'react'
import styled from 'styled-components'
import TopBanner from '../components/main/top/TopBanner'
import Top from '../components/main/top/Top'
import Middle from '../components/main/middle/Middle'
import MiddleSecond from '../components/main/middle/MiddleSecond'
import Video from '../components/main/bottom/Video'
import Bottom from '../components/main/bottom/Bottom'

const Container = styled.div`
  width: 100vw;
  background-color: #000;
  overflow-x: hidden;
`;


const Landing = () => {
  return (
    <Container>
    <TopBanner />
    <Top />
    <Middle />
    <MiddleSecond />
    <Video />
    <Bottom />
  </Container>
  )
}

export default Landing