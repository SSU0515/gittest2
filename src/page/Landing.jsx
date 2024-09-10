import React, { Suspense } from 'react';
import styled from 'styled-components';

// 컴포넌트를 동적으로 로드 (lazy loading)
const TopBanner = React.lazy(() => import('../components/main/top/TopBanner'));
const Top = React.lazy(() => import('../components/main/top/Top'));
const Middle = React.lazy(() => import('../components/main/middle/Middle'));
const MiddleSecond = React.lazy(() => import('../components/main/middle/MiddleSecond'));
const Video = React.lazy(() => import('../components/main/bottom/Video'));
const Bottom = React.lazy(() => import('../components/main/bottom/Bottom'));

const Container = styled.div`
  width: 100vw;
  background-color: #000;
  overflow-x: hidden;
`;

const LoadingMessage = () => <div>Loading...</div>;

const Landing = () => {
  return (
    <Container>
      <Suspense fallback={<LoadingMessage />}>
        <TopBanner />
        <Top />
        <Middle />
        <MiddleSecond />
        <Video />
        <Bottom />
      </Suspense>
    </Container>
  );
}

export default Landing;
