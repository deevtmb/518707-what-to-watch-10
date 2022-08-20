import { useLayoutEffect } from 'react';
import Footer from '../../components/footer/footer';
import Header from '../../components/header/header';
import SmallFilmCardList from '../../components/small-film-card-list/small-film-card-list';
import { AuthorizationStatus } from '../../const';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { fetchFavoriteFilmsAction } from '../../store/api-actions';
import { getFavoriteFilms } from '../../store/films-data/selectors';
import { getAuthorizationStatus } from '../../store/user-process/selectors';

export default function MyListScreen(): JSX.Element {
  const isAuthorized = useAppSelector(getAuthorizationStatus) === AuthorizationStatus.Authorized;
  const favoriteFilms = useAppSelector(getFavoriteFilms);
  const dispatch = useAppDispatch();

  useLayoutEffect(() => {
    if (isAuthorized) {
      dispatch(fetchFavoriteFilmsAction());
    }
  }, [isAuthorized, dispatch]);

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
