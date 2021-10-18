import React from 'react';
import styled from 'styled-components';
import {useLocation} from 'react-router-dom';

const ShopHero = () => {
  const {pathname} = useLocation();
  return (
    <Wrapper>
      <div className="section-center">
        <h3> {pathname && pathname.substring(6, 10)} Collections</h3>
        <div className="underline" />
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  background: #f4f3ee;
  width: 100%;
  min-height: 15vh;
  display: flex;
  align-items: center;
  color: black;

  h3 {
    margin: 1.5rem 0;
  }
  a {
    color: black;
    padding: 0.5rem;
    transition: var(--transition);
  }
  a:hover {
    transform: scale(1.09);
  }
`;

export default ShopHero;
