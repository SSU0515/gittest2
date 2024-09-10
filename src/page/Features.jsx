import React, { useEffect, Suspense } from 'react';
import styled from 'styled-components';

// lazy loading을 위한 동적 import
const Music = React.lazy(() => import('../components/features/Music'));
const Demo = React.lazy(() => import('../components/features/Demo'));
const Detection = React.lazy(() => import('../components/features/Detection'));
const Healthcare = React.lazy(() => import('../components/features/Healthcare'));

const Container = styled.div`
  width: 100vw;
  height: 100%;
  position: relative;
  overflow: hidden;
  background-color: #000;
`;

const LoadingMessage = () => <div>Loading...</div>;

const Features = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Container>
      <Suspense fallback={<LoadingMessage />}>
        <Music />
        <Detection />
        <Demo />
        <Healthcare />
      </Suspense>
    </Container>
  );
};

export default Features;
