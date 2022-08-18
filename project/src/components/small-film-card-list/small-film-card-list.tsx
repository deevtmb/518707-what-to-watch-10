import { useState } from 'react';
import { Link } from 'react-router-dom';
import { AppRoute } from '../../const';
import { Film } from '../../types/film';
import SmallFilmCardPlayer from '../small-film-card-player/small-film-card-player';

type SmallFilmCardListProps = {
  films: Film[];
}

export default function SmallFilmCardList({films}: SmallFilmCardListProps): JSX.Element {
  const [activeCardId, setActiveCardId] = useState<number | null>(null);

  return (
    <div className="catalog__films-list">
      {films.map((film) => (
        <article
          key={film.id}
          className="small-film-card catalog__films-card"
          onMouseOver={() => setActiveCardId(film.id)}
          onMouseOut={() => setActiveCardId(null)}
        >
          <Link to={`${AppRoute.Films}${film.id}`} style={{width: '100%', height: '100%'}} >
            <div className="small-film-card__image">
              {activeCardId === film.id ?
                <SmallFilmCardPlayer film={film} activeCardId={activeCardId} /> :
                <img src={film.previewImage} alt={film.name} width="280" height="175" />}
            </div>
          </Link>
          <h3 className="small-film-card__title">
            <Link className="small-film-card__link" to={`${AppRoute.Films}${film.id}`}>{film.name}</Link>
          </h3>
        </article>
      ))}
    </div>
  );
}
