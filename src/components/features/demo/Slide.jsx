import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import BoxContent from "./BoxContent";

const BoxBase = styled(motion.div)`
  position: absolute;
  top: 0;
  border-radius: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: left;
  width: ${(props) => (props.size === "large" ? "25vw" : "15vw")};
  height: ${(props) => (props.size === "large" ? "25vw" : "15vw")};
  z-index:${(props)=> (props.size ===  "large" ? "7" : "0")};


  ${(props) =>
    props.size !== "large" &&
    `
      top: 10%;
      h2 {
        font-size: 25px;
      }
      p {
        font-size: 16px;
      }
      &::after {
        content: "";
        position: absolute;
        top: -10px;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(15, 15, 15, 0.8);
        border-radius: 100%;
        z-index: 0;
      }
    `};
  @media (max-width: 600px) {
    top: 50;
    margin-left: 0;
    width: ${(props) => (props.size === "large" ? "100vw" : "55vw")};
    height: ${(props) => (props.size === "large" ? "100vw" : "55vw")};
    
  }
`;

const Slide = ({ item, variants, custom, position, size, imgsize }) => {
  return (
    <BoxBase
      key={item.id}
      variants={variants}
      custom={custom}
      initial="initial"
      animate="visible"
      exit="exit"
      style={{ left: position }}
      size={size}
    >
      <BoxContent item={item} img={item.src} imgsize={imgsize} />
    </BoxBase>
  );
};

export default Slide;
