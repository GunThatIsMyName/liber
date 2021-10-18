import React from 'react';
import {useLocation} from 'react-router';
import styled from 'styled-components';
import {ShopBtn, ShopHero, ShopList, ShopSort} from '../components';
import Modal from '../components/Modal';

const Shop = () => {
  const {pathname} = useLocation();
  const eachYear = pathname.substr(6, 11);
  return (
    <main style={{backgroundColor: 'white'}}>
      <Modal />
      <ShopHero />
      <Wrapper className="page">
        <div className="section-center products">
          <ShopBtn />
          <div>
            <ShopSort />
            <ShopList eachYear={eachYear} />
          </div>
        </div>
      </Wrapper>
    </main>
  );
};

const Wrapper = styled.div`
  .products {
    display: grid;
    gap: 3rem 1.5rem;
    margin: 4rem auto;
  }
  @media (min-width: 768px) {
    .products {
      grid-template-columns: 200px 1fr;
    }
  }
`;
export default Shop;
