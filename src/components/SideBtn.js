import React, {useState} from 'react';
import {useEffect} from 'react';
import {FaArrowUp} from 'react-icons/fa';
import {useLocation} from 'react-router';
import styled from 'styled-components';
import {useGlobalContext} from '../context/AppContext';

const SideBtn = () => {
  const {handleScrollTop} = useGlobalContext();
  const [active, setActive] = useState(0);
  const location = useLocation();

  const onScroll = () => {
    const height = window.scrollY;
    if (height > 250) {
      setActive(height);
    } else {
      setActive(0);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <Btn>
      <button
        onClick={handleScrollTop}
        className={active ? 'arrowup active' : 'arrowup'}
      >
        <FaArrowUp />
      </button>
    </Btn>
  );
};

const Btn = styled.div`
  .arrowup {
    position: fixed;
    bottom: 0;
    right: 0;
    margin: 20px;
    padding-top: 5px;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background-color: black;
    transition: all 300ms linear;
    font-size: 30px;
    font-weight: bold;
    color: white;
    z-index: 100;
    border: transparent;
    text-align: center;
    pointer-events: none;
    opacity: 0;
    &:hover {
      background-color: white;
      color: black;
    }
  }
  .arrowup.active {
    opacity: 1;
    pointer-events: auto;
  }
`;

export default SideBtn;
