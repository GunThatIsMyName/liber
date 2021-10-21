import React from 'react';
import {Link, withRouter} from 'react-router-dom';
import {links} from '../utils/constants';
import styled from 'styled-components';

const NavList = ({closeSidebar, location: {pathname}}) => {
  return (
    <>
      {links.map((item) => {
        const {id, text, url} = item;
        return (
          <Li key={id} current={pathname === url}>
            <Link onClick={closeSidebar} to={url}>
              {text}
            </Link>
          </Li>
        );
      })}
    </>
  );
};

const Li = styled.li`
  border-bottom: 2px solid
    ${(props) => (props.current ? 'white' : 'transparent')};
`;

export default withRouter(NavList);
