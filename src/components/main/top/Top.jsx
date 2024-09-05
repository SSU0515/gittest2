import React, { useRef } from "react";
import styled from "styled-components";
import ScrollText from "./ScrollText";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import bg from "../../../asset/main_asset/Our Service.png";
import bg2 from "../../../asset/main_asset/Our Goal.png";
import moreBtn from "../../../asset/main_asset/moreBtn.png";
import TopMotion from "../motion/TopMotion";
import { motion } from "framer-motion";
import MobileMotion from "../motion/MobileMotion";

gsap.registerPlugin(ScrollTrigger);

const Container = styled.div`
  width: 100vw;
  height: 2000px;
  overflow: hidden;
  position: relative;
  @media (max-width: 600px) {
    height: 1200px;
  }
`;

const TopBg = styled(motion.img)`
  width: 100vw;
  position: absolute;
  top: 10px;
  left: 0;
  @media (max-width: 600px) {
    width: 100vw;
  }
`;

const TopBg2 = styled(motion.img)`
  width: 100vw;
  position: absolute;
  bottom: 350px;
  left: 0;
`;

const Goal = styled(motion.h2)`
  position: absolute;
  bottom: 450px;
  left: 5vw;
  font-size: 4vw;
  font-weight: 600;
  color: #ff723a;
  z-index: 3;
  @media (max-width: 600px) {
    position: absolute;
    bottom: 350px;
    left: 5vw;
    font-size: 6vw;
    font-weight: 900;
  }
`;

const MoreBtn = styled(motion.img).attrs({
  whileHover: { rotate: 360 },
})`
  position: absolute;
  bottom: 400px;
  right: 15vw;
  width: 180px;
  z-index: 3;
  @media (max-width: 600px) {
    position: absolute;
    bottom: 200px;
    right: 35vw;
    width: 120px;
  }
`;

const Test = styled.div`
  width: 100%;
  height: 400px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  @media (max-width: 600px) {
    margin-bottom: 0;
  }
`;

const ScrollWrap = styled.div`
  width: 100%;
  height: 100px;
  display: flex;
  flex-direction: column;
  align-items: start;
  gap: 20px;
  margin-bottom: 20px;
  @media (max-width: 600px) {
    margin-bottom: 0;
    display: none;
  }
`;

const TextContainer = styled.div`
  width: 470vmax;
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  position: sticky;
  left: 0;
  @media (max-width: 1270px) {
    width: 670vmax;
  }
  @media (max-width: 600px) {
    display: none;
  }
`;
// const MobileText = styled(motion.h1)`
//   display: none;

//   @media (max-width: 600px) {
//     position: sticky;
//     display: block;
//     font-size: 4rem;
//     color: #222;
//     z-index: 2;
//     text-align: center;
//     font-weight: 900;
//   }
// `;
const MobileText1 = styled(motion.h2)`
  display: none;

  @media (max-width: 600px) {
    display: block;
    font-size: 2rem;
    color: #fff;
    padding-bottom: 45px;
    z-index: 3;
    text-align: center;
    span {
      color: #ff723a;
      font-size: 1rem;
      padding-left: 10px;
    }
  }
`;
const MobileText2 = styled(motion.h2)`
  display: none;

  @media (max-width: 600px) {
    padding-bottom: 45px;
    z-index: 3;
    color: #fff;
    font-size: 1.5rem;
    display: block;
  }
`;
const MobileText3 = styled(motion.h2)`
  display: none;

  @media (max-width: 600px) {
    display: block;
    color: #fff;
    font-size: 2rem;
    padding-bottom: 45px;
    z-index: 3;
    text-align: center;
    span {
      color: #ff723a;
      font-size: 1rem;
      padding-left: 10px;
    }
  }
`;

const Top = () => {
  const textContainerRef01 = useRef(null);

  React.useEffect(() => {
    const textContainer01 = textContainerRef01.current;

    gsap.to(textContainer01, {
      scrollTrigger: {
        trigger: textContainer01,
        start: "top center", // 트리거가 중앙에 도달했을 때 애니메이션 시작
        end: "+=20", // 애니메이션을 더 길게 실행하여 천천히 움직이도록 설정
        scrub: 5, // 스크롤과 함께 부드럽게 움직임, 낮은 값일수록 더 부드럽고 천천히 움직임
        pin: true, // 텍스트 컨테이너를 화면에 고정하여 스크롤 시 다른 요소와 함께 움직이게 함
        // markers: true, // 디버깅을 위해 스크롤 트리거 마커 표시
      },
      x: "-25%", // 텍스트를 왼쪽으로 이동
      ease: "power1.out", // 부드러운 애니메이션 적용
    });
  }, []);

  return (
    <Container>
      <Test>
        <TopBg
          initial={{ opacity: 0, x: 200 }}
          whileInView={{
            opacity: 1,
            x: 0,
            transition: { delay: 0.5 },
          }}
          src={bg}
          alt="bg"
        />
        <ScrollWrap>
          <TextContainer ref={textContainerRef01}>
            <ScrollText />
          </TextContainer>
        </ScrollWrap>
        {/* <MobileText
          initial={{ opacity: 0, x: 200 }}
          whileInView={{
            opacity: 1,
            x: 0,
            transition: { delay: 0.5 },
          }}
        >
          Our Service
        </MobileText> */}
        <MobileText1
          initial={{ opacity: 0, x: 200 }}
          whileInView={{
            opacity: 1,
            x: 0,
            transition: { delay: 0.5 },
          }}
        >
          Voice Cloning <br />
          <span>음성 클로닝</span>
        </MobileText1>
        <MobileText2
          initial={{ opacity: 0, x: 200 }}
          whileInView={{
            opacity: 1,
            x: 0,
            transition: { delay: 0.5 },
          }}
        >
          부정확한 발음 및 음성 개선
        </MobileText2>
        <MobileText3
          initial={{ opacity: 0, x: -200 }}
          whileInView={{
            opacity: 1,
            x: 0,
            transition: { delay: 0.5 },
          }}
        >
          Deepfake Detection
          <br />
          <span>가상보컬 딥페이크 탐지</span>
        </MobileText3>
      </Test>
      <Goal
        initial={{ opacity: 0, x: 200 }}
        whileInView={{
          opacity: 1,
          x: 0,
          transition: { delay: 0.5 },
        }}
      >
        페르소나 기반 초개인화 음성대화
      </Goal>
      <TopBg2
        initial={{ opacity: 0, x: -200 }}
        whileInView={{
          opacity: 1,
          x: 0,
          transition: { delay: 0.5 },
        }}
        src={bg2}
        alt="bg2"
      />

      <a href="https://www.braindeck.net/">
        <MoreBtn
          initial={{ opacity: 0, x: -200 }}
          whileInView={{
            opacity: 1,
            x: 0,
            transition: { delay: 0.5 },
          }}
          src={moreBtn}
          alt="moreBtn"
        />
      </a>
      <TopMotion />
      <MobileMotion />
    </Container>
  );
};

export default Top;
