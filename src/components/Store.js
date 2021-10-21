import React from 'react';
import styled from 'styled-components';
import {stores} from '../utils/constants';
import {StoreProduct} from '.';

const Store = () => {
  return (
    <Wrapper className="section">
      <div className="title">
        <h2>Our Store</h2>
        <div className="underline"></div>
        <div className="section-center featured">
          {stores.map((item) => {
            return <StoreProduct key={item.id} {...item} />;
          })}
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  background: #f4f3ee;
  color: black;
  .featured {
    margin: 4rem auto;
    display: grid;
    gap: 2.5rem;
    img {
      height: 225px;
    }
  }
  .underline {
    width: 8rem;
    height: 0.25rem;
    margin: 2rem auto 2rem auto;
    background: black;
  }
  .btn {
    display: block;
    width: 180px;
    margin: 0 auto;
    text-align: center;
  }
  @media (min-width: 576px) {
    .featured {
      grid-template-columns: repeat(auto-fit, minmax(360px, 1fr));
    }
  }
`;

export default Store;
