import React from 'react';
import styled from 'styled-components';

const Hero = () => {
  return (
    <Wrapper className="section">
      <div className="section-center">
        <div className="loading"></div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  @media (min-width: 992px) {
    height: calc(100vh - 5rem);
  }
`;
export default Hero;
