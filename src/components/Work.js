import React from 'react';
import styled from 'styled-components';
import {services} from '../utils/constants';

const Work = () => {
  return (
    <Wrapper>
      <div className="section-center">
        <article className="header">
          <h1>Work</h1>
          <div className="underline" />
        </article>
        <div className="services-center">
          {services.map((service) => {
            const {id, icon, title, src} = service;
            return (
              <article key={id} className="service">
                <img src={src} alt={title} />
                <span className="icon">{icon}</span>
                <h4>{title}</h4>
              </article>
            );
          })}
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  background: #fafafa;
  padding: 5rem 0;
  color: black;
  .underline {
    width: 8rem;
    height: 0.25rem;
    margin: 2rem auto 1.25rem auto;
    background: black;
  }

  h1 {
    text-align: center;
  }
  .header h3 {
    margin-bottom: 2rem;
  }

  p {
    margin-bottom: 0;
    line-height: 1.8;
    color: black;
  }
  .services-center {
    margin-top: 4rem;
    display: grid;
    gap: 2.5rem;
    border-radius: 10px;
  }
  .service {
    background: white;
    text-align: center;
    padding: 2.5rem 2rem;
    border-radius: var(--radius);

    img {
      margin-top: 2rem;
      width: 100%;
      height: 50%;
      border-radius: 10px;
      box-shadow: 5px 10px 31px 1px rgba(0, 0, 0, 0.75);
      -webkit-box-shadow: 5px 10px 31px 1px rgba(0, 0, 0, 0.75);
      -moz-box-shadow: 5px 10px 31px 1px rgba(0, 0, 0, 0.75);
    }
    span {
      background-color: black;
      margin-top: 30px;
      color: white;
    }
  }
  span {
    width: 4rem;
    height: 4rem;
    display: grid;
    margin: 0 auto;
    place-items: center;
    margin-bottom: 1rem;
    border-radius: 50%;
    background: white;
    color: var(--clr-primary-1);
    svg {
      font-size: 2rem;
    }
  }
  @media (min-width: 992px) {
  }
  @media (min-width: 576px) {
    .services-center {
      grid-template-columns: repeat(auto-fit, minmax(360px, 1fr));
    }
  }
`;
export default Work;
