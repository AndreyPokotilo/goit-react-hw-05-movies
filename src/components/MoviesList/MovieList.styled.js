import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const ListMovies = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: 0px;
  padding: 75px 0px 0px 0px;
`;

export const ItemMovie = styled.li`
  position: relative;
  width: calc((100% - 10px * 8) / 4);
  margin: 10px;
  background-color: black;
  box-shadow: 0px 0px 5px 2px;
  border-radius: 5px;
  list-style: none;
  :hover,
  :focus{
    transform: scale(1.03);
    cursor: zoom-in;
  };
`;

export const LinkMovie = styled(Link)`
  display: inline-block;
  flex-direction: column;
  text-decoration: none;
`;

export const ImgMovie = styled.img`
  width: 100%;
  border-radius: 5px;
`;

export const CardMovie = styled.div`
  border-radius: 5px;
  background-color: #000;
`;

export const TitleMovie = styled.h2`
  font-size: 25px;
  color: #fff;
  text-align: center;
`;

export const RatingMovie = styled.div`
  position: absolute;
  display: flex;
  top: 10px;
  right: 10px;
  width: 40px;
  height: 40px;
  text-align: center;
  vertical-align: bottom;
  justify-content: center;
  border-radius: 50px;
  border: #00ff01 solid 1px;
  background-color: black;
`;

export const RatingText = styled.span`
  font-size: 23px;
  margin-top: auto;
  margin-bottom: auto;
  color: #ffd300;
`;
