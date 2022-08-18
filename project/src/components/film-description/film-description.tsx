import { Link, useLocation } from 'react-router-dom';
import { AppRoute, AuthorizationStatus } from '../../const';
import { useAppSelector } from '../../hooks';
import { getAuthorizationStatus } from '../../store/user-process/selectors';
import { Film } from '../../types/film';
import MyListButton from '../my-list-button/my-list-button';
import PlayButton from '../play-button/play-button';

type FilmDescriptionProps = {
  film: Film;
};

export default function FilmDescription({film}: FilmDescriptionProps): JSX.Element {
  const {id, name, posterImage, genre, released} = film;
  const {pathname} = useLocation();
  const authorizationStatus = useAppSelector(getAuthorizationStatus);
  const isFilmInfoPage = pathname.includes(AppRoute.Films);

  return (
    <div className="film-card__wrap">
      <div className="film-card__info">
        {!isFilmInfoPage &&
          <div className="film-card__poster">
            <img src={posterImage} alt={name} width="218" height="327" />
          </div>}

        <div className="film-card__desc">
          <h2 className="film-card__title">{name}</h2>
          <p className="film-card__meta">
            <span className="film-card__genre">{genre}</span>
            <span className="film-card__year">{released}</span>
          </p>

          <div className="film-card__buttons">
            <PlayButton filmId={id} />
            <MyListButton filmId={id} />
            {(isFilmInfoPage && authorizationStatus === AuthorizationStatus.Authorized) &&
              <Link to={`${AppRoute.Films}${film.id}${AppRoute.Review}`} className="btn film-card__button">Add review</Link>}
          </div>
        </div>
      </div>
    </div>
  );
}
