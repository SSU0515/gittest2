import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import light from "../../../asset/main_asset/lignt.png";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Container = styled(motion.div)`
  display: none;
  @media (max-width: 600px) {
    display: block;
  }
`;

const Light = styled.div`
  width: 50vw;
  height: 50vw;
  background-image: url(${light});
  background-size: cover;
  background-position: center;
  position: absolute;
`;

const MotionBox = styled.div`
  position: relative;
  top: 10vh;
  left: -10px;
  width: 100vw;
  height: 100vh;
  transform: rotate(20deg);
`;

const MobileMotion2 = () => {
  const [position, setPosition] = useState({ x: 1500, y: 100 });
  const svgRef = useRef(null);
  const pathRef = useRef(null);

  useEffect(() => {
    if (pathRef.current && svgRef.current) {
      const pathLength = pathRef.current.getTotalLength();

      const updatePosition = (self) => {
        const scrollPercentage = self.progress;
        const point = pathRef.current.getPointAtLength(
          pathLength * scrollPercentage
        );
        setPosition({ x: point.x, y: point.y });
      };

      // GSAP ScrollTrigger 설정
      const animation = gsap.to(
        {},
        {
          scrollTrigger: {
            trigger: svgRef.current,
            start: "top right",
            end: "bottom left",
            scrub: 4,
            onUpdate: updatePosition,
          },
        }
      );

      return () => {
        if (animation.scrollTrigger) animation.scrollTrigger.kill();
      };
    }
  }, []);

  return (
    <Container
      initial={{ opacity: 0, x: -100 }}
      whileInView={{
        opacity: 1,
        x: 0,
        transition: { delay: 0.3 },
      }}
    >
      <MotionBox>
        <svg
          width="100%"
          height="100%" // Set height to 100% to match parent div
          ref={svgRef}
          viewBox="0 0 1600 1000"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            ref={pathRef}
            d="M2172.66 1C2126.05 194.756 1816.78 638.205 952.556 861.952C88.3355 1085.7 -35.0058 1714.27 11.3512 2000.59"
            stroke="none"
            strokeWidth="9"
          />
        </svg>

        <Light
          style={{
            top: `calc(${position.y}px -125vw)`,
            left: `calc(${position.x}px - 25vw)`,
          }}
        />
      </MotionBox>
    </Container>
  );
};

export default MobileMotion2;
