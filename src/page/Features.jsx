import React from 'react'
import { useEffect } from 'react'
import styled from 'styled-components'
import Music from '../components/features/Music'
import Demo from '../components/features/Demo'
import Detection from '../components/features/Detection'
import Healthcare from '../components/features/Healthcare'

const Container =styled.div`
  width: 100vw;
  height: 100%;
  position: relative;
  overflow: hidden;
  background-color: #000;
`



const Features = () => {
  useEffect(() => {
    window.scrollTo(0, 0); 
  }, []);

  return (
    <Container>
      <Music />
      <Detection />

      <Demo />
      <Healthcare />
      </Container>
  )
}

export default Features