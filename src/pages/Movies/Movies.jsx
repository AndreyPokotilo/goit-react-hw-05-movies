import { useState, useEffect } from 'react';
import { useSearchParams, useLocation } from 'react-router-dom';
import { SearchBox } from 'components/SearchBox/SearchBox';
import { MoviesList } from 'components/MoviesList/MoviesList';
import { fechMoviesQuery } from 'services/moviesAPI';
import kino from '../../images/empty-cinema-auditorium-with-chairs.jpg';
import { MoviesSection } from './Movies.styled';

export default function Movies() {
  const location = useLocation();
  const [movies, setMovies] = useState(null);
  const [searchParams, setSearchParams] = useSearchParams();
  const searchQuery = searchParams.get('query');

  useEffect(() => {
    if (!searchQuery) {
      return;
    }
    async function fechQuery() {
      try {
        const movies = await fechMoviesQuery(searchQuery);
        setMovies(movies);
      } catch (error) {
        alert(error.message);
      }
    }
    fechQuery();
  }, [searchQuery, setMovies]);

  function handleSearch(query) {
    setSearchParams({ query: query });
  }

  return (
    <MoviesSection>
      <SearchBox onSubmit={handleSearch} />
      {!movies ? (
        <img src={`${kino}`} alt="kino" width="100%" />
      ) : (
        <MoviesList movies={movies} location={location} />
      )}
    </MoviesSection>
  );
}
