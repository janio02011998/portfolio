import styled from 'styled-components';

import { NavLink } from 'react-router-dom';

export const Container = styled.aside`
    display: flex;
    flex-shrink: 1;
    align-items: center;
    width: 300px;
    height: 100%;
    ${'' /* background-image: linear-gradient(to bottom, #D5D8DC, #17202A); */}
    background-image: #EBEDEF;
    flex-direction: column;

    transition: all 0.2s ease 0s;

    ${'' /* &:hover{
        width: 240px;
    } */}
`;

export const SidebarLink = styled(NavLink)`
  width: 100%;
  text-align: center;
  text-decoration: none;
  padding-top: 10px;
  color: #000;
  &:hover {
    color: #fff;
  }
`;