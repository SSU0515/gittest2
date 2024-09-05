import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import img from "../../../asset/main_asset/aivoice.png";
import img2 from "../../../asset/main_asset/dna.png";
import moreBtn from "../../../asset/main_asset/moreBtn2.png";
import MiddleMotion2 from "../motion/MiddleMotion2";
import MobileMotion from "../motion/MobileMotion";

const Container = styled.div`
  width: 100vw;
  height: 1600px;
  padding-top: 200px;
  overflow: hidden;
  position: relative;
  @media (max-width: 600px) {
    height: 800px;
  }
`;

const Img = styled(motion.img)`
  position: absolute;
  top: 80px;
  left: 0;
  width: 100%;
  @media (max-width: 600px) {
    display: none;
  }
`;
const ImgM = styled(motion.img)`
  display: none;
  @media (max-width: 600px) {
    display: block;
    position: absolute;
    top: 80px;
    left: 10%;
    width: 80%;
  }
`;

const MoreBtn = styled(motion.img).attrs({
  whileHover: { rotate: 360 },
})`
  position: absolute;
  top: 950px;
  right: 45.2vw;
  width: 180px;
  z-index: 3;
  @media (max-width: 600px) {
    position: absolute;
    top: 550px;
    right: 35%;
    width: 30%;
  }
`;

const MiddleSecond = () => {
  const navigate = useNavigate(); 

  const handleMoreBtnClick = () => {
    navigate("/features");  
  };

  return (
    <Container>
      <Img
        initial={{ opacity: 0, y: -100 }}
        whileInView={{
          opacity: 1,
          y: 0,
          transition: { delay: 0.3 },
        }}
        src={img}
        alt="img"
      />
      <ImgM
        initial={{ opacity: 0, y: -100 }}
        whileInView={{
          opacity: 1,
          y: 0,
          transition: { delay: 0.3 },
        }}
        src={img2}
        alt="img"
      />
      <MoreBtn
        initial={{ opacity: 0, y: -200 }}
        whileInView={{
          opacity: 1,
          y: 0,
          transition: { delay: 0.3 },
        }}
        src={moreBtn}
        alt="moreBtn"
        onClick={handleMoreBtnClick}  
      />
      <MiddleMotion2 />
      <MobileMotion />
    </Container>
  );
};

export default MiddleSecond;
