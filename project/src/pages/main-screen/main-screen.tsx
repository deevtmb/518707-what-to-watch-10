import { useState } from 'react';
import Footer from '../../components/footer/footer';
import GenresList from '../../components/genres-list/genres-list';
import Header from '../../components/header/header';
import FilmDescription from '../../components/film-description/film-description';
import ShowMoreButton from '../../components/show-button/show-button';
import SmallFilmCardList from '../../components/small-film-card-list/small-film-card-list';
import { useAppSelector } from '../../hooks';
import { getFilms, getPromoFilm } from '../../store/films-data/selectors';
import { Film } from '../../types/film';

export default function MainScreen(): JSX.Element {
  const FILMS_PER_RENDER_COUNT = 8;
  const MAX_GENRES_COUNT = 10;
  const DEFAULT_GENRE = 'All genres';

  const films = useAppSelector(getFilms);
  const genres = new Set([DEFAULT_GENRE].concat(films.map(({genre}) => genre)));
  const promoFilm = useAppSelector(getPromoFilm);
  const [selectedGenre, setSelectedGenre] = useState<string>(DEFAULT_GENRE);
  const [renderedFilmsCount, setRenderedFilmsCount] = useState<number>(FILMS_PER_RENDER_COUNT);

  const filterFilmsByGenre = (data: Film[]): Film[] => {
    if (selectedGenre === DEFAULT_GENRE) {
      return data;
    }

    return data.filter((film) => selectedGenre === film.genre);
  };

  const onGenreItemClick = (genre: string) => {
    setSelectedGenre(genre);
  };

  return (
    <>
      <section className="film-card">
        <div className="film-card__bg">
          {promoFilm && <img src={promoFilm.backgroundImage} alt={promoFilm.name} />}
        </div>
        <h1 className="visually-hidden">WTW</h1>

        <Header />
        {promoFilm && <FilmDescription film={promoFilm} />}

      </section>

      <div className="page-content">
        <section className="catalog">
          <h2 className="catalog__title visually-hidden">Catalog</h2>

          <GenresList
            genres={[...genres].slice(0, MAX_GENRES_COUNT)}
            selectedGenre={selectedGenre}
            onGenreItemClick={onGenreItemClick}
          />

          <SmallFilmCardList
            films={filterFilmsByGenre(films).slice(0, renderedFilmsCount)}
          />

          {renderedFilmsCount < filterFilmsByGenre(films).length &&
            <ShowMoreButton
              onShowMoreButtonClick={() => setRenderedFilmsCount((prev) => prev + FILMS_PER_RENDER_COUNT)}
            />}

        </section>

        <Footer />
      </div>
    </>
  );
}
