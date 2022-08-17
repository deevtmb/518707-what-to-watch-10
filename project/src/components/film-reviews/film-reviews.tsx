import { useAppSelector } from '../../hooks';
import { getComments } from '../../store/comments-data/selectors';

export default function FilmReviews(): JSX.Element {
  const reviews = useAppSelector(getComments);

  return (
    <div className="film-card__reviews film-card__row">
      <div className="film-card__reviews-col">
        {reviews.map((review) => (
          <div key={review.id} className="review">
            <blockquote className="review__quote">
              <p className="review__text">{review.comment}</p>

              <footer className="review__details">
                <cite className="review__author">{review.user.name}</cite>
                <time className="review__date" dateTime="2016-12-24">TODO</time>
              </footer>
            </blockquote>
            <div className="review__rating">{review.rating}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
