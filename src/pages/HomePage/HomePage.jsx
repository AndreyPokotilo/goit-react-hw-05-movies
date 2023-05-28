import { useState, useEffect } from 'react';
import { fechMoviesTranding } from 'services/moviesAPI';
import { MoviesList } from 'components/MoviesList/MoviesList';

export default function HomePage() {
  const [moviesTranding, setMoviesTranding] = useState([]);

  useEffect(() => {
    async function fechQuery() {
      try {
        const movies = await fechMoviesTranding();
        setMoviesTranding(movies);
      } catch (error) {
        alert(error.message);
      }
    }
    fechQuery();
  }, []);

  return (
    <div>
      {moviesTranding.length > 0 && <MoviesList movies={moviesTranding} />}
    </div>
  );
}
