import dayjs from 'dayjs';
import { useAppSelector } from '../../hooks';
import { getComments } from '../../store/comments-data/selectors';

export default function FilmReviews(): JSX.Element {
  const COMMENT_DATE_FORMAT = 'MMMM D, YYYY';
  const comments = useAppSelector(getComments);

  return (
    <div className="film-card__reviews film-card__row">
      <div className="film-card__reviews-col">
        {comments.map((comment) => (
          <div key={comment.id} className="review">
            <blockquote className="review__quote">
              <p className="review__text">{comment.comment}</p>

              <footer className="review__details">
                <cite className="review__author">{comment.user.name}</cite>
                <time className="review__date" dateTime="2016-12-24">{dayjs(comment.date).format(COMMENT_DATE_FORMAT)}</time>
              </footer>
            </blockquote>
            <div className="review__rating">{comment.rating}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
