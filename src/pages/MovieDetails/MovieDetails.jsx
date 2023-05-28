import { useState, useEffect } from 'react';
import { Outlet, useLocation, useParams } from 'react-router-dom';
import { fechMoviesDetails } from 'services/moviesAPI';

import {
  MovieDetailsSection,
  ArrowBtn,
  GoBackBtn,
  MovieCard,
  MovieImg,
  MovieInfo,
  MovieTitle,
  MovieOverview,
  Overview,
  OverviewText,
  MovieGenre,
  Genre,
  GenreItem,
  InfoTitel,
  CastLink,
  ReviewsLink,
} from './MovieDetails.styled';

export default function MovieDetails() {
  const location = useLocation();
  const backLinkHref = location?.state?.from ?? '/';
  const [movie, setMovie] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    if (!id) {
      return;
    }
    async function fechQuery() {
      try {
        const movies = await fechMoviesDetails(id);
        setMovie(movies);
      } catch (error) {
        alert(error.message);
      }
    }
    fechQuery();
  }, [id]);

  if (!movie) {
    return;
  }
  const { genres, poster_path, title, overview } = movie;

  const poster = `https://image.tmdb.org/t/p/original/${poster_path}`;
  const defaultPoster = 'https://cdn.pixabay.com/photo/2014/03/25/16/27/movie-297135_960_720.png';
  return (
    <MovieDetailsSection>
      <GoBackBtn to={backLinkHref}>
        <ArrowBtn />
        Go back
      </GoBackBtn>
      <MovieCard>
        <MovieImg src={poster_path ? poster : defaultPoster} alt={title} />
        <MovieInfo>
          <MovieTitle>{title}</MovieTitle>
          <MovieOverview>
            <Overview>Overview</Overview>
            <OverviewText>{overview}</OverviewText>
          </MovieOverview>
          {genres && (
            <MovieGenre>
              <Genre>Genre:</Genre>
              {genres.map(({ id, name }) => (
                <GenreItem key={id}>{name}/</GenreItem>
              ))}
            </MovieGenre>
          )}
        </MovieInfo>
      </MovieCard>
      <InfoTitel>Additional information</InfoTitel>
      <CastLink to={'cast'}>Cast</CastLink>
      <ReviewsLink to={'reviews'}>Reviews</ReviewsLink>
      <Outlet />
    </MovieDetailsSection>
  );
}
