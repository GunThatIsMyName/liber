import React from 'react';
import styled from 'styled-components';
import fasion1 from '../assets/fashion1.jpg';
import fasion2 from '../assets/fashion2.jpg';

const Hero = () => {
  return (
    <Wrapper className="section-center">
      <article className="content">
      </article>
      <article className="img-container">
        <img src={fasion1} alt="nice table" className="main-img" />
        <img src={fasion2} alt="person working" className="accent-img" />
      </article>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  min-height: 100vh;
  display: grid;
  place-items: center;
  margin-top: 50px;
  color: black;
  .img-container {
    text-align: center;
  }
  .content {
    margin-bottom: 3rem;
  }
  .main-img {
    width: 80%;
    margin: 20px auto;
    border-radius: 5px;
    box-shadow: -1px -1px 62px -5px rgba(0, 0, 0, 0.75);
    -webkit-box-shadow: -1px -1px 62px -5px rgba(0, 0, 0, 0.75);
    -moz-box-shadow: -1px -1px 62px -5px rgba(0, 0, 0, 0.75);
  }
  .accent-img {
    display: none;
    width: 150px;
    transform: translate(-50%, -20%);
    box-shadow: -22px 13px 62px -9px rgba(0, 0, 0, 0.75);
    -webkit-box-shadow: -22px 13px 62px -9px rgba(0, 0, 0, 0.75);
    -moz-box-shadow: -22px 13px 62px -9px rgba(0, 0, 0, 0.75);
  }

  .underline {
    width: 8rem;
    height: 0.25rem;
    margin-bottom: 1.25rem;
    background: black;
  }
  h1 {
    font-size: 30px;
  }

  p {
    line-height: 2;
    max-width: 45em;
    margin-bottom: 2rem;
    color: black;
    font-size: 1.2rem;
  }
  strong {
    font-size: 1.5rem;
  }
  @media (min-width: 992px) {
    height: calc(100vh - 5rem);
    grid-template-columns: 1fr 1fr;
    gap: 8rem;
    h1 {
      margin-bottom: 2rem;
      font-size: 50px;
    }
    p {
      font-size: 1.25rem;
    }
    .hero-btn {
      padding: 0.75rem 1.5rem;
      font-size: 1rem;
    }
    .img-container {
      display: block;
      position: relative;
    }
    .main-img {
      width: 100%;
      height: 550px;
      position: relative;
      border-radius: var(--radius);
      display: block;
      object-fit: cover;
    }
    .accent-img {
      display: block;
      position: absolute;
      bottom: 0;
      left: 0;
      width: 250px;
      transform: translateX(-50%);
      border-radius: var(—radius);
    }
    .img-container::before {
      content: '';
      position: absolute;
      width: 10%;
      height: 80%;
      background: black;
      bottom: 0%;
      left: -8%;
      border-radius: var(—radius);
    }
  }
`;
export default Hero;
