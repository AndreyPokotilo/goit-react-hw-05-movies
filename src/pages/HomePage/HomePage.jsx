import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { fechMoviesTranding } from 'services/moviesAPI';
import { MoviesList } from 'components/MoviesList/MoviesList';

export default function HomePage() {
  const [moviesTranding, setMoviesTranding] = useState([]);
  const [errorMessage, setErrorMessage] = useState('');
  const location = useLocation();
  
  useEffect(() => {
    async function fechQuery() {
      try {
        const movies = await fechMoviesTranding();
        setMoviesTranding(movies);
      } catch (error) {
        setErrorMessage(error.message);
      }
    }
    fechQuery();
  }, []);

  return (
    <div>
      {errorMessage || (
        <MoviesList movies={moviesTranding} location={location} />
      )}
    </div>
  );
}
