import { ChangeEvent, FormEvent, Fragment, useLayoutEffect, useRef, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Header from '../../components/header/header';
import LoadingLayout from '../../components/loading-layout/loading-layout';
import { AppRoute } from '../../const';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { fetchFilmInfoAction, postCommentAction } from '../../store/api-actions';
import { getFilmInfo, getLoadingErrorStatus } from '../../store/films-data/selectors';
import NotFoundScreen from '../not-found-screen/not-found-screen';

export default function AddReviewScreen(): JSX.Element {
  const MIN_COMMENT_LENGTH = 50;
  const MAX_COMMENT_LENGTH = 300;
  const MAX_RATING = 10;
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const isLoadingError = useAppSelector(getLoadingErrorStatus);
  const film = useAppSelector(getFilmInfo);
  const {id} = useParams();
  const submitButtonRef = useRef<HTMLButtonElement | null>(null);
  const [comment, setComment] = useState({text: '', rating: 0});

  const handeFormSubmit = async (evt: FormEvent) => {
    evt.preventDefault();
    if (submitButtonRef.current) {
      submitButtonRef.current.disabled = true;

      if (comment.text && comment.rating && id) {
        const {meta: {requestStatus}} = await dispatch(postCommentAction({
          filmId: +id,
          comment: comment.text,
          rating: comment.rating,
        }));

        if (requestStatus === 'fulfilled') {
          navigate(`${AppRoute.Films}${id}`);
        }
        submitButtonRef.current.disabled = false;
      }

      submitButtonRef.current.disabled = false;
    }
  };

  useLayoutEffect(() => {
    if (id && Number(id)) {
      dispatch(fetchFilmInfoAction(id));
    }
  }, [id, dispatch]);

  if (!id || isLoadingError || !Number(id)) {
    return (
      <NotFoundScreen />
    );
  }

  if (!film || (id && +id !== film.id)) {
    return (
      <LoadingLayout />
    );
  }

  return(
    <section className="film-card film-card--full" style={{backgroundColor: film.backgroundColor}}>
      <div className="film-card__header">
        <div className="film-card__bg">
          <img src={film.backgroundImage} alt={film.name} />
        </div>

        <h1 className="visually-hidden">WTW</h1>

        <Header film={film} />

        <div className="film-card__poster film-card__poster--small">
          <img src={film.posterImage} alt={film.name} width="218" height="327" />
        </div>
      </div>

      <div className="add-review">
        <form action="#" className="add-review__form" onSubmit={handeFormSubmit}>
          <div className="rating">
            <div className="rating__stars">
              {Array.from({length: MAX_RATING}, (_, i) => (
                <Fragment key={`star-${MAX_RATING - i}`}>
                  <input
                    className="rating__input"
                    id={`star-${MAX_RATING - i}`}
                    type="radio"
                    name="rating"
                    value={MAX_RATING - i}
                    onClick={() => setComment({...comment, rating: MAX_RATING - i})}
                  />
                  <label className="rating__label" htmlFor={`star-${MAX_RATING - i}`}>{`Rating ${MAX_RATING - i}`}</label>
                </Fragment>
              ))}
            </div>
          </div>

          <div className="add-review__text" style={{filter: 'brightness(90%)', backgroundColor: film.backgroundColor}}>
            <textarea
              className="add-review__textarea"
              name="review-text"
              id="review-text"
              placeholder="Review text"
              minLength={MIN_COMMENT_LENGTH}
              maxLength={MAX_COMMENT_LENGTH}
              onChange={(evt: ChangeEvent<HTMLTextAreaElement>) => setComment({...comment, text: evt.target.value})}
            >
            </textarea>
            <div className="add-review__submit">
              <button
                className="add-review__btn"
                type="submit"
                ref={submitButtonRef}
                disabled={!comment.rating || comment.text.length < MIN_COMMENT_LENGTH}
              >
                Post
              </button>
            </div>

          </div>
        </form>
      </div>

    </section>
  );
}
