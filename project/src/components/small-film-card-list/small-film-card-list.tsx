import { Film } from '../../types/film';

type SmallFilmCardListProps = {
  films: Film[];
}

export default function SmallFilmCardList({films}: SmallFilmCardListProps): JSX.Element {
  return (
    <div className="catalog__films-list">
      {films.map(({id, previewImage, name}) => (
        <article key={id} className="small-film-card catalog__films-card">
          <div className="small-film-card__image">
            <img src={previewImage} alt={name} width="280" height="175" />
          </div>
          <h3 className="small-film-card__title">
            <a className="small-film-card__link" href="film-page.html">{name}</a>
          </h3>
        </article>
      ))}
    </div>
  );
}
