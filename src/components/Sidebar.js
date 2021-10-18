import React from 'react';
import styled from 'styled-components';
import {RiCloseFill} from 'react-icons/ri';
import {useGlobalContext} from '../context/AppContext';
import NavList from './NavList';

const Sidebar = () => {
  const {isOpen, closeSidebar} = useGlobalContext();
  return (
    <SidebarContainer>
      <aside className={`${isOpen ? 'sidebar show-sidebar' : 'sidebar'}`}>
        <div className="sidebar-header">
          <h2>liberzen</h2>
          <button className="close-btn" type="button" onClick={closeSidebar}>
            <RiCloseFill />
          </button>
        </div>
        <ul className="links">
          <NavList closeSidebar={closeSidebar} />
        </ul>
      </aside>
    </SidebarContainer>
  );
};

const SidebarContainer = styled.div`
  text-align: center;
  color: black;
  h2 {
    margin: 0;
  }
  .sidebar-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 1.5rem;
  }
  .close-btn {
    font-size: 2rem;
    background: transparent;
    border-color: transparent;
    transition: var(--transition);
    cursor: pointer;
    margin-top: 0.2rem;
    color: black;
  }
  .close-btn:hover {
    font-weight: bold;
    transform: scale(1.14);
  }
  .logo {
    justify-self: center;
    height: 45px;
  }
  .links {
    margin-bottom: 2rem;
  }
  .links a {
    display: block;
    text-align: left;
    font-size: 1rem;
    text-transform: capitalize;
    padding: 1rem 1.5rem;
    color: black;
    transition: var(--transition);
    letter-spacing: var(--spacing);
  }

  .links a:hover {
    padding: 1rem 1.5rem;
    padding-left: 2rem;
    background: black;
    color: white;
    font-weight: bold;
  }

  .sidebar {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: var(--clr-white);
    transition: var(--transition);
    transform: translate(-100%);
    z-index: -1;
  }
  .show-sidebar {
    transform: translate(0);
    z-index: 999;
  }
  .cart-btn-wrapper {
    margin: 2rem auto;
  }
  @media screen and (min-width: 992px) {
    .sidebar {
      display: none;
    }
  }
`;
export default Sidebar;
