import React from "react";
import styled from "styled-components";

const Container = styled.div`
  position: relative;
  border: 1px soild #fff;
`;

const VideoBox = styled.div`
  position: absolute;
  top: -40vh;
  right: 50%;
  padding: 50px 0;
  transform: translate(50%);
  @media (max-width: 600px) {
    display: none;
  }
`;

const VideoBoxMoblie = styled.div`
  display: none;
  @media (max-width: 600px) {
    display: block;
    position: absolute;
    top: 0;
    right: -2vw;
    scale: 1;
  }
`;

function Video() {
  return (
    <Container>
      <VideoBoxMoblie>
        <iframe
          width="400vw"
          height="300vh"
          src="https://www.youtube.com/embed/fQDp3mHxFs0?si=vzTgZEGoWVunQ8Oo"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen
        ></iframe>
      </VideoBoxMoblie>
      <VideoBox>
        <iframe
          width="1600vw"
          height="900vh"
          src="https://www.youtube.com/embed/fQDp3mHxFs0?si=vzTgZEGoWVunQ8Oo"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen
        ></iframe>
      </VideoBox>
    </Container>
  );
}

export default Video;
