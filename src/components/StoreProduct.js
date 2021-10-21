import React from 'react';
import styled from 'styled-components';

const StoreProduct = ({src, title, place, phone}) => {
  return (
    <Wrapper>
      <div className="container">
        <img src={src} alt={title} />
      </div>
      <footer>
        <h5>{place} </h5>
        <p>{phone}</p>
      </footer>
    </Wrapper>
  );
};

const Wrapper = styled.article`
  .container {
    position: relative;
    background: var(--clr-black);
    border-radius: var(--radius);
    transition: all 300ms linear;
  }

  img {
    width: 100%;
    display: block;
    object-fit: cover;
    border-radius: var(--radius);
    transition: var(--transition);
  }
  .link {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: black;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 2.5rem;
    height: 2.5rem;
    border-radius: 50%;
    transition: var(--transition);
    opacity: 0;
    cursor: pointer;
    svg {
      font-size: 1.25rem;
      color: var(--clr-white);
    }
  }

  footer {
    margin-top: 1rem;
    text-align: left;
    p {
      margin: 0.5rem 0;
    }
  }
  footer h5,
  footer p {
    margin-bottom: 0;
    font-weight: 400;
  }

  footer p {
    opacity: 0.4;
    letter-spacing: var(--spacing);
  }
`;
export default StoreProduct;
