import { useLayoutEffect } from 'react';
import Footer from '../../components/footer/footer';
import Header from '../../components/header/header';
import SmallFilmCardList from '../../components/small-film-card-list/small-film-card-list';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { fetchFavoriteFilmsAction } from '../../store/api-actions';
import { getFavoriteFilms } from '../../store/films-data/selectors';

export default function MyListScreen(): JSX.Element {
  const favoriteFilms = useAppSelector(getFavoriteFilms);
  const dispatch = useAppDispatch();

  useLayoutEffect(() => {
    dispatch(fetchFavoriteFilmsAction());
  });

  return (
    <div className="user-page">
      <Header />

      <section className="catalog">
        <h2 className="catalog__title visually-hidden">Catalog</h2>

        <SmallFilmCardList films={favoriteFilms} />
      </section>

      <Footer />
    </div>
  );
}
