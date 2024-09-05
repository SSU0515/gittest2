import * as React from "react";
import { ArcGauge } from "@progress/kendo-react-gauges";
import styled from "styled-components";

const colors = [
  { from: 0, to: 50, color: "#FFB496" },
  { from: 50, color: "#FF723A" },
];

// 스타일링된 컨테이너 컴포넌트
const GaugeWrapper = styled.div`
  width: ${({ width }) => width || "40vw"}; /* 기본값 40vw */
  height: ${({ height }) => height || "40vw"}; /* 기본값 40vw */
  position: relative;
  @media (max-width: 600px) {
    width: 80vw;
    height: 50vh; 
  }
`;

const ArcGaugeComponent = ({ value, width, height }) => {
  const arcOptions = {
    value: value,
    colors,
  };

  const Percent = styled.h3`
    margin-top: 50px;
    @media (max-width: 600px) {
      margin-top: 20px; /* 모바일에서는 여백 제거 */
    }
  `;
  
  const Result = styled.h3`
    margin-top: 20px;
    @media (max-width: 600px) {
      margin-top: 10px; /* 모바일에서는 여백 조정 */
    }
  `;

  const arcCenterRenderer = (value) => (
    <div
      style={{
        color: "#fff",
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        fontSize: "40px",
        textAlign: "center",
      }}
    >
      <Percent>
        {value}%
      </Percent>
      <Result>
        {value >= 50 ? "Fake" : "Real"}
      </Result>
    </div>
  );

  return (
    <GaugeWrapper width={width} height={height}>
      <ArcGauge
        {...arcOptions}
        arcCenterRender={arcCenterRenderer}
        style={{ width: "100%", height: "100%" }}
      />
    </GaugeWrapper>
  );
};

export default ArcGaugeComponent;
