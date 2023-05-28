import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { HiArrowLeft } from 'react-icons/hi';

export const MovieDetailsSection = styled.div`
  padding-top: 90px;
  padding-bottom: 20px;
  width: 1900px;
  background-color: #a6a6a6;
`;

export const GoBackBtn = styled(Link)`
  display: flex;
  white-space: nowrap;
  align-items: center;
  justify-content: center;
  font-size: 25px;
  width: 150px;
  height: 35px;
  color: #e8e8e8;
  background-color: #000;
  border-radius: 6px;
  text-decoration: none;
  :hover {
    color: #c1a700;
  }
`;

export const ArrowBtn = styled(HiArrowLeft)`
  display: inline-block;
  size: 25px;
  margin-right: 10px;
`;

export const MovieCard = styled.div`
  display: flex;
  margin-top: 20px;
  background-color: #f2efec;
`;

export const MovieImg = styled.img`
  height: 600px;
`;

export const MovieInfo = styled.div`
  margin-left: 20px;
`;

export const MovieTitle = styled.h2`
  font-size: 40px;
`;

export const MovieOverview = styled.div``;
export const Overview = styled.h3`
  font-size: 30px;
`;

export const OverviewText = styled.p`
  font-size: 25px;
  width: 600px;
`;

export const MovieGenre = styled.div`
  display: flex;
  align-items: center;
`;

export const Genre = styled.h3`
  font-size: 30px;
`;

export const GenreItem = styled.p`
  margin-left: 15px;
  font-size: 25px;
`;

export const InfoTitel = styled.h3`
  font-size: 30px;
  margin-left: 10px;
`;

export const CastLink = styled(Link)`
  font-size: 25px;
  margin-left: 10px;
  text-decoration: none;

`;

export const ReviewsLink = styled(Link)`
  font-size: 25px;
  margin-left: 15px;
  text-decoration: none;
`;
