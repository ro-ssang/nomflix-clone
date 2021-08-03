import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import styled from 'styled-components';

const HeaderWrapper = styled.header`
  position: sticky;
  left: 0;
  top: 0;
  background-color: ${(props) => props.theme.$black};
  box-shadow: 0 2px 14px ${(props) => props.theme.$lightBlack};
  z-index: 10;
`;
const Navigation = styled.nav``;
const NavList = styled.ul`
  display: flex;
`;
const NavItem = styled.li`
  text-align: center;
`;
const SLink = styled(Link)`
  display: inline-block;
  width: 100px;
  border-bottom: 2px solid ${(props) => (props.$current ? props.theme.$red : 'inherit')};
  color: ${(props) => props.theme.$white};
  letter-spacing: 0.5px;
  line-height: 50px;
`;

export default withRouter(({ location: { pathname } }) => (
  <HeaderWrapper>
    <Navigation>
      <NavList>
        <NavItem>
          <SLink to="/" $current={pathname === '/'}>
            Home
          </SLink>
        </NavItem>
        <NavItem>
          <SLink to="/tv" $current={pathname === '/tv'}>
            TV
          </SLink>
        </NavItem>
        <NavItem>
          <SLink to="/search" $current={pathname === '/search'}>
            Search
          </SLink>
        </NavItem>
      </NavList>
    </Navigation>
  </HeaderWrapper>
));
