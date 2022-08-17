import { Film } from '../../types/film';
import MyListButton from '../my-list-button/my-list-button';
import PlayButton from '../play-button/play-button';

type PromoFilmProps = {
  film: Film;
};

export default function PromoFilm({film}: PromoFilmProps): JSX.Element {
  const {name, posterImage, genre, released, isFavorite} = film;

  return (
    <div className="film-card__wrap">
      <div className="film-card__info">
        <div className="film-card__poster">
          <img src={posterImage} alt={name} width="218" height="327" />
        </div>

        <div className="film-card__desc">
          <h2 className="film-card__title">{name}</h2>
          <p className="film-card__meta">
            <span className="film-card__genre">{genre}</span>
            <span className="film-card__year">{released}</span>
          </p>

          <div className="film-card__buttons">
            <PlayButton />
            <MyListButton favoriteStatus={isFavorite} />
          </div>
        </div>
      </div>
    </div>
  );
}
