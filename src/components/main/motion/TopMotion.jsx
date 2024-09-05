import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import light from "../../../asset/main_asset/lignt.png";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Container = styled.div`
  width: 100vw;
  position: relative;
`;

const Light = styled.div`
  width: 25vw;
  height: 25vw;
  background-image: url(${light});
  background-size: cover;
  background-position: center;
  position: absolute;
  @media (max-width: 600px) {
    width: 45vw;
    height: 45vw;
  }
`;

const SvgWrapper = styled.div`
  position: relative;
  height: 1000px;
  @media (max-width: 600px) {
    display: none;
  }
`;

const TopMotion = () => {
  const [position, setPosition] = useState({ x: -1200, y: 0 });
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

        // 위치 업데이트
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
            scrub: true,
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
    <Container>
      <SvgWrapper>
        <svg
          width="100%"
          height="100%" // height를 100%로 설정하여 부모 요소에 맞춤
          ref={svgRef}
          viewBox="0 0 1800 1000" // viewBox 크기
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            ref={pathRef}
            d="M2 1C49.1667 107.164 145.5 264.2 590 338.047C801.301 373.152 1343 443.782 1397 691C1448.33 587.866 1595.4 384.552 1773 396.368"
            stroke="#FF723A"
            strokeWidth="4"
          />
        </svg>

        <Light
          style={{
            top: `calc(${position.y}px - 12.5vw)`, // y축 위치 조정
            left: `calc(${position.x}px - 12.5vw)`, // x축 위치 조정
          }}
        />
      </SvgWrapper>
    </Container>
  );
};

export default TopMotion;
