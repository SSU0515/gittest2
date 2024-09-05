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
  top: 0;
  left: 0;
  width: 130%;
  rotate: -5deg;
`;

const MobileMotion = () => {
  const [position, setPosition] = useState({ x: -300, y: 0 });
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
            start: "top center",
            end: "bottom center",
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
          height="70%"
          ref={svgRef}
          viewBox="0 0 1300 1000"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            ref={pathRef}
            d="M2.55078 0.565674C49.1589 194.322 358.43 637.77 1222.65 861.517C2086.87 1085.26 2210.21 1713.84 2163.86 2000.15"
            stroke="#FF723A"
            strokeWidth="9"
          />
        </svg>

        <Light
          style={{
            top: `calc(${position.y}px - 50vw)`, // Center the Light on the y-axis
            left: `calc(${position.x}px - 25vw)`, // Center the Light on the x-axis
          }}
        />
      </MotionBox>
    </Container>
  );
};

export default MobileMotion;
