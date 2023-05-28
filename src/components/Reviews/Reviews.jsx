import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fechMoviesReviews } from 'services/moviesAPI';
import {
  EmptiReviews,
  ReviewsAuthor,
  ReviewsContent,
  ReviewsItem,
  ReviewsList,
  ReviewsSection,
} from './Reviews.styled';

export default function Reviews() {
  const [author, setAutor] = useState([]);

  const { id } = useParams();

  useEffect(() => {
    if (!id) {
      return;
    }
    async function fechQuery() {
      try {
        const movies = await fechMoviesReviews(id);
        setAutor(movies);
      } catch (error) {
        alert(error.message);
      }
    }
    fechQuery();
  }, [id]);

  return (
    <ReviewsSection>
      {!author.length ? (
        <EmptiReviews>We don't have any reviews for this movie.</EmptiReviews>
      ) : (
        <ReviewsList>
          {author.map(({ id, author, content }) => (
            <ReviewsItem key={id}>
              <ReviewsAuthor>{author}</ReviewsAuthor>
              <ReviewsContent>{content}</ReviewsContent>
            </ReviewsItem>
          ))}
        </ReviewsList>
      )}
    </ReviewsSection>
  );
}
