import { useLayoutEffect } from 'react';
import { useParams } from 'react-router-dom';
import Header from '../../components/header/header';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { fetchFilmInfoAction } from '../../store/api-actions';
import { getFilmInfo } from '../../store/films-data/selectors';

export default function AddReviewScreen(): JSX.Element {
  const MAX_RATING = 10;
  const dispatch = useAppDispatch();
  const film = useAppSelector(getFilmInfo);
  const {id} = useParams();

  useLayoutEffect(() => {
    if (id) {
      dispatch(fetchFilmInfoAction(id));
    }
  }, [id, dispatch]);

  if (!film) {
    return (<div>Loading...</div>);
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
        <form action="#" className="add-review__form">
          <div className="rating">
            <div className="rating__stars">
              {Array.from({length: MAX_RATING}, (_, i) => (
                <>
                  <input className="rating__input" id={`star-${MAX_RATING - i}`} type="radio" name="rating" value={MAX_RATING - i} />
                  <label className="rating__label" htmlFor={`star-${MAX_RATING - i}`}>{`Rating ${MAX_RATING - i}`}</label>
                </>
              ))}
            </div>
          </div>

          <div className="add-review__text" style={{filter: 'brightness(90%)', backgroundColor: film.backgroundColor}}>
            <textarea className="add-review__textarea" name="review-text" id="review-text" placeholder="Review text"></textarea>
            <div className="add-review__submit">
              <button className="add-review__btn" type="submit">Post</button>
            </div>

          </div>
        </form>
      </div>

    </section>
  );
}
