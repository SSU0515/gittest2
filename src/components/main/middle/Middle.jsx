import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import MiddleMotion from "../motion/MiddleMotion";
import img from "../../../asset/main_asset/tecimg.png";
import mimg from "../../../asset/main_asset/mtecimg.png";
import MobileMotion2 from "../motion/MobileMotion2";

const Container = styled.div`
  width: 100vw;
  height: 150vh;
  overflow: hidden;
  position: relative;
  @media (max-width: 600px) {
    height: 150vh;
  }
`;

const Img = styled(motion.img)`
  position: absolute;
  top: 80px;
  left: 15vw;
  width: 70vw;
  @media (max-width: 600px) {
    display: none;
  }
`;

const MobileImg = styled(motion.img)`
  display: none;
  @media (max-width: 600px) {
    display: block;
    position: absolute;
    top: 0;
    left: 10%;
    width: 80%;
  }
`;

function Middle() {
  return (
    <Container>
      <MiddleMotion />
      <MobileMotion2 />
      <Img
        initial={{ opacity: 0, y: -200 }}
        whileInView={{
          opacity: 1,
          y: 0,
          transition: { delay: 0.5 },
        }}
        src={img}
        alt="img"
      />
      <MobileImg
        initial={{ opacity: 0, y: -200 }}
        whileInView={{
          opacity: 1,
          y: 0,
          transition: { delay: 0.5 },
        }}
        src={mimg}
        alt="mobileimg"
      />
    </Container>
  );
}

export default Middle;
