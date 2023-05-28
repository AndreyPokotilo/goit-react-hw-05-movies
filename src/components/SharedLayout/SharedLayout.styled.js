import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Container = styled.div`
  width: 1400px;
  margin: 0 auto;
  padding: 0 16px;
  overflow: hidden;
`;

export const Header = styled.header`
 position: fixed;
  display: flex;
  align-items: center;
  gap: 110px;
  width: 1380px;
  padding: 8px 10px;
  border-radius: 5px;
  background-color: black;
  z-index: 10;
  > nav {
    display: flex;
  }
`;

export const Logo = styled.div`
  display: flex;
  white-space: nowrap;
  font-size: 50px;
  font-weight: 700;
  font-family:  'Times New Roman';
  color: #dde65e;
  margin: 0;
  margin-left: 15px;
`;

export const LogoImg = styled.img`
  width: 37px;
`;

export const LogoBox = styled.div`
display: flex;
margin-right: 6px;
justify-content: center;
align-items: center;
`;

export const LogoLink = styled(NavLink)`
display: flex;
justify-content: center;
text-decoration: none;
`;

export const Link = styled(NavLink)`
display: flex;
justify-content: center;
  font-size: 25px;
  padding: 8px 16px;
  width: 100px;
  border-radius: 4px;
  align-items: center;
  text-decoration: none;
  color: #aca8a3;
  font-weight: 500;
  background-color: #434343;
  &.active {
    color: white;
    background-color: #bc6f42;
  }
`;
