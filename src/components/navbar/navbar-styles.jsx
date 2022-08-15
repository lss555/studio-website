import styled from 'styled-components';
import { Link as LinkR } from 'react-router-dom';
// import { Link as LinkS } from 'react-scroll';

export const Nav = styled.nav`
  background: #68746c;
  height: 80px;
  margin-top: -80px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
  position: sticky;
  top: 0;
  z-index: 10;
  @media screen and (max-width: 960px) {
    transition: 0.8s all ease;
  }
`;

export const NavBarContainer = styled.div`
  display: flex;
  justify-content: center;
  height: 80px;
  z-index: 1;
  width: 100%;
  padding: 0 24px;
  max-width: 1100px;
`;

export const NavLogo = styled(LinkR)`
  color: #010606;
  justify-self: flex-start;
  cursor: pointer;
  justify-content: center;
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  margin: auto 8rem;
  font-weight: bold;
  text-decoration: none;
  &:hover {
    color: #610517;
  }
`;

export const MobileIcon = styled.div`
  display: none;
  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 1.6rem;
    right: 1.6rem;
    transfrom: translate(-100%, 60%);
    font-size: 1.8rem;
    cursor: pointer;
    color: #FCF3CF;
  }
`;

export const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  text-align: center;
  justify-content: center;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavItemLeft = styled.div`
  display: flex;
  height: 80px;
  justify-content: flex-start;
  align-items: flex-start;
`;

export const NavItemRight = styled.div`
  display: flex;
  height: 80px;
  justify-content: flex-end;
  align-items: flex-end;
`;

export const NavLinks = styled(LinkR)`
  color: #010606;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;
  &.active {
    color: rgba(188, 152, 106, 1);
  }
  &:hover {
    color: #610517;
  }
`;

export const NavBtn = styled.nav`
  display: flex;
  align-items: center;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavBtnLink = styled(LinkR)`
  border-radius: 50px;
  background: #FCF3CF;
  white-space: nowrap;
  padding: 10px 22px;
  color: #010606;
  font-size: 16px;
  outline: none;
  border: none;
  cursor: pointer;
  transition: all -.2s ease-in-out;
  text-decoration: none;
  &:hover {
    tansition: all 0.2s ease-in-out;
    background: #bc986a;
    color: #010606;
  }
`;
