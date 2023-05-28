import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fechMoviesCast } from 'services/moviesAPI';
import {
  CastSection,
  CastList,
  CastItem,
  CastImg,
  CastName,
  CastCharacter,
} from './Cast.styled';
import NoAvatar from '../../images/unnamed (1).jpg';

export default function Cast() {
  const [actors, setActors] = useState(null);

  const { id } = useParams();
  useEffect(() => {
    if (!id) {
      return;
    }
    async function fechQuery() {
      try {
        const movies = await fechMoviesCast(id);
        setActors(movies);
      } catch (error) {
        alert(error.message);
      }
    }
    fechQuery();
  }, [id]);

  if (!actors) {
    return;
  }
  const { cast } = actors;

  return (
    <CastSection>
      {cast.length ? (
        <CastList>
          {cast.map(({ id, profile_path, name, character }) => (
            <CastItem key={id}>
              <CastImg
                src={
                  profile_path
                    ? `https://image.tmdb.org/t/p/original/${profile_path}`
                    : `${NoAvatar}`
                }
                alt={name}
              />
              <CastName>
                <span>Name:</span>
                {name}
              </CastName>
              <CastCharacter>
                <span>Character:</span>
                {character}
              </CastCharacter>
            </CastItem>
          ))}
        </CastList>
      ) : (
        <p>We don't have any cast for this movie.</p>
      )}
    </CastSection>
  );
}
