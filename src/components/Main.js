import React from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';
import {clothes} from '../utils/constants';
import {MainProduct} from '.';

const FeaturedProducts = () => {
  return (
    <Wrapper className="section">
      <div className="title">
        <h2>Collections</h2>
        <div className="underline"></div>
        <div className="section-center featured">
          {clothes
            .map((item) => {
              return <MainProduct key={item.id} {...item} />;
            })
            .slice(0, 3)}
        </div>
      </div>
      <Link to="/shop/2020" className="btn">
        All Collections
      </Link>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  background: #fafafa;
  color: black;
  .featured {
    margin: 4rem auto;
    display: grid;
    gap: 2.5rem;
    img {
      height: 225px;
    }
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

export default FeaturedProducts;
