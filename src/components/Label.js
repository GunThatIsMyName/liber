import React from 'react';
import styled from 'styled-components';
import logoWhite from '../assets/logo-white.png';
import logoBlack from '../assets/logo-black.png';
import logoBeige from '../assets/logo-beige.png';
const Label = () => {
  return (
    <Wrapper>
      <div className="section-center featured">
        <div className="logo-info">
          <img src={logoBlack} alt="gold-logo" />
          <div className="logo-desc">
            <h4>Black </h4>
          </div>
        </div>
        <div className="logo-info">
          <img src={logoWhite} alt="gold-logo" />
          <div className="logo-desc">
            <h4>White </h4>
          </div>
        </div>
        <div className="logo-info">
          <img src={logoBeige} alt="black-logo" />
          <div className="logo-desc">
            <h4>Beige </h4>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  background: #f3f3ee;
  margin: 17rem 0;
  .title {
    h2 {
      letter-spacing: 4px;
    }
  }
  .featured {
    margin: 4rem auto;
    img {
      text-align: center;
      max-height: 105px;
      width: 50%;
      margin-bottom: 1rem;
    }
  }
  .logo-info {
    width: 80%;
    margin: 5px auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    .logo-desc {
      display: none;
      p {
        margin: 0;
        font-size: 1.2rem;
      }
    }
  }
  @media (min-width: 576px) {
    .logo-info {
      flex-direction: row;
      .logo-desc {
        display: block;
      }
    }
    .featured {
      img {
        width: 25%;
        margin-right: 10rem;
      }
    }
  }
`;

export default Label;
