import React from 'react';
import styled from 'styled-components';
import {useGlobalContext} from '../context/AppContext';

const ListView = ({eachYear}) => {
  const {clothes, openModal} = useGlobalContext();

  if (eachYear === '2021') {
    return (
      <Wrapper>
        {clothes &&
          clothes.map((item) => {
            const {id, img, month} = item;
            return (
              <main key={id} className="main-container point-container">
                {img &&
                  img.map((image, index) => {
                    const {id, url, name} = image;
                    return (
                      <img
                        onClick={() => openModal(id, index, month)}
                        key={id}
                        src={url}
                        alt={name}
                      />
                    );
                  })}
              </main>
            );
          })}
      </Wrapper>
    );
  }
  return (
    <Wrapper>
      {clothes &&
        clothes.map((item) => {
          const {id, img, month} = item;
          return (
            <main key={id} className="main-container">
              {img &&
                img.map((image, index) => {
                  const {id, url, name} = image;
                  return (
                    <img
                      onClick={() => openModal(id, index, month)}
                      key={id}
                      src={url}
                      alt={name}
                    />
                  );
                })}
            </main>
          );
        })}
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .main-container {
    border-bottom: 1px dotted black;
    padding-bottom: 2rem;
    padding-top: 1rem;
    color: black;
    text-align: center;
  }
  .point-container {
    &:nth-child(3n + 1) {
      text-align: left;
    }
    &:nth-child(3n + 2) {
      text-align: right;
    }
    &:nth-child(3n) {
      text-align: center;
    }
  }

  img {
    background-color: black;
    width: 90px;
    border-radius: 5px;
    margin: 0.5rem;
    box-shadow: 2px 4px 7px -2px rgba(66, 62, 62, 0.75);
    -webkit-box-shadow: 2px 4px 7px -2px rgba(66, 62, 62, 0.75);
    -moz-box-shadow: 2px 4px 7px -2px rgba(66, 62, 62, 0.75);
    transition: all 300ms linear;
    &:hover {
      transform: scale(0.95);
      cursor: pointer;
    }
  }

  @media (min-width: 768px) {
    img {
      width: 250px;
      margin: 1rem;
    }
  }
  @media (min-width: 1170px) {
    .products-container {
      grid-template-columns: repeat(3, 1fr);
    }
  }
`;

export default ListView;
