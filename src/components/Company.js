import React from 'react';
import styled from 'styled-components';
import {ImArrowDown} from 'react-icons/im';

const Company = () => {
  return (
    <Wrapper className="section">
      <div className="title">
        <h2>Company</h2>
        <div className="underline"></div>
        <div className="section-center featured">
          <div className="logo-info">
            <div className="company-desc">
              Liberzen could change you.
              <h4>Honestly, Freely, Truthfully.</h4>
            </div>
            <div className="logo-desc">
              <h3>Founded | 2001 . 08</h3>
              <br />
              <p>
                Liberal Citizen <br />
                <ImArrowDown />
                <br />
                <span> LIBERZEN</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  background: #202124;
  padding: 6rem 0rem;
  color: white;
  */ .title {
    h2 {
      letter-spacing: 4px;
    }
  }

  .featured {
    margin: 4rem auto;
    img {
      width: 200px;
      height: 300px;
      border-radius: 10px;
      box-shadow: 0px -1px 17px 5px rgba(255, 255, 255, 0.75);
      -webkit-box-shadow: 0px -1px 17px 5px rgba(255, 255, 255, 0.75);
      -moz-box-shadow: 0px -1px 17px 5px rgba(255, 255, 255, 0.75);
    }
  }
  h2 {
    display: none;
    color: white;
  }
  .company-desc {
    text-align: left;
    font-size: 1.2rem;
    h4 {
      padding-top: 1rem;
      font-size: 1rem;
      font-weight: bold;
    }
  }
  .logo-info {
    width: 80%;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    p {
      margin: 30px;
      font-size: 25px;
      color: #f4f3ee;
      font-weight: bold;
      span {
        color: white;
        letter-spacing: 0.4rem;
      }
    }
  }
  .logo-info:first-child {
    margin-bottom: 4rem;
  }
  .underline {
    width: 8rem;
    height: 0.25rem;
    margin-bottom: 1.25rem;
    margin-top: 2rem;
    background: #f4f3ee;
  }
  .btn {
    display: block;
    width: 148px;
    margin: 0 auto;
    text-align: center;
  }
  .logo-desc {
    margin-top: 3rem;
    h3 {
      font-size: 1rem;
      font-weight: bold;
    }
    span {
      font-size: 20px;
      font-weight: bold;
    }
    p {
      margin: 0;
      word-spacing: 1.5rem;
    }
  }
  @media (min-width: 576px) {
    padding: 12rem 0;
    .company-desc {
      text-align: left;
      font-size: 1.5rem;
      h4 {
        padding-top: 1rem;
        font-size: 1.7rem;
      }
    }
    .featured {
      img {
        width: 300px;
        height: 400px;
      }
    }
    .logo-info {
      flex-direction: row;
    }
    .logo-desc {
      h3 {
        font-size: 1.5rem;
      }
    }
    h2,
    .underline {
      display: block;
    }
  }
`;

export default Company;
