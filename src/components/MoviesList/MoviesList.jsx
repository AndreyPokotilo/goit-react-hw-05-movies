import PropTypes from 'prop-types';
import { ListMovies, ItemMovie, LinkMovie, CardMovie, ImgMovie, TitleMovie, RatingMovie, RatingText } from 'components/MoviesList/MovieList.styled';

export function MoviesList({ movies, location }) {
  return (
    <ListMovies>
      {movies.map(({ id, poster_path, name, title, vote_average }) => (
        <ItemMovie key={id}>
          <LinkMovie to={`/movies/${id}`} state={{ from: location }}>
            <CardMovie>
              <ImgMovie
                src={
                  poster_path
                    ? `https://image.tmdb.org/t/p/original/${poster_path}`
                    : 'https://cdn.pixabay.com/photo/2014/03/25/16/27/movie-297135_960_720.png'
                }
                alt={title ?? name}
              />
              <TitleMovie>{title ?? name}</TitleMovie>
              <RatingMovie><RatingText>{vote_average.toFixed(1)}</RatingText></RatingMovie>
            </CardMovie>
          </LinkMovie>
        </ItemMovie>
      ))}
    </ListMovies>
  );
}


MoviesList.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired, 
      poster_path: PropTypes.string, 
      name: PropTypes.string, 
      title: PropTypes.string.isRequired, 
      vote_average: PropTypes.number.isRequired,
    })
  ), 
  location: PropTypes.object.isRequired,
}