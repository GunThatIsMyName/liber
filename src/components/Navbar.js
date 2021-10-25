import React from 'react';
import styled from 'styled-components';
import {FaBars} from 'react-icons/fa';
import {useGlobalContext} from '../context/AppContext';
import NavList from './NavList';
import {Link} from 'react-router-dom';
import DropBanner from './DropBanner';

const Navbar = () => {
  const {openSidebar} = useGlobalContext();

  return (
    <>
      <NavContainer>
        <div className="nav-center">
          <div className="nav-header">
            <Link to="/">
              <h3>LIBERZEN</h3>
            </Link>
            <button type="button" className="nav-toggle" onClick={openSidebar}>
              <FaBars />
            </button>
          </div>
          <ul className="nav-links">
            <NavList />
          </ul>
        </div>
      </NavContainer>
      <DropBanner />
    </>
  );
};

const NavContainer = styled.nav`
  height: 5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: black;

  .nav-center {
    width: 90vw;
    margin: 0 auto;
    max-width: var(--max-width);
  }
  .nav-header {
    display: flex;
    align-items: center;
    justify-content: space-between;

    h3 {
      color: white;
      letter-spacing: 0.4rem;
      margin: 0;
    }
  }
  .nav-toggle {
    background: transparent;
    border: transparent;
    color: white;
    cursor: pointer;
    svg {
      font-size: 2rem;
    }
  }
  .nav-links {
    display: none;
  }
  .cart-btn-wrapper {
    display: none;
  }
  @media (min-width: 992px) {
    .nav-toggle {
      display: none;
    }
    .nav-center {
      display: grid;
      grid-template-columns: 1fr 1fr;
      align-items: center;
    }
    .nav-header {
      img {
        width: 200px;
        height: 2.7rem;
      }
    }
    .nav-links {
      display: flex;
      justify-content: center;
      li {
        margin: 0 0.5rem;
        transition: all 300ms linear;
        &:hover {
          transform: scale(1.09);
        }
      }
      a {
        color: white;
        font-size: 1rem;
        text-transform: capitalize;
        letter-spacing: var(--spacing);
        padding: 0.5rem;
      }
    }
    .cart-btn-wrapper {
      display: grid;
    }
  }
`;

export default Navbar;

// button.addEventListener('click', () => {
//   rabbit.scrollIntoView({behavior:"smooth", block: "center", inline: "center"});
// })
