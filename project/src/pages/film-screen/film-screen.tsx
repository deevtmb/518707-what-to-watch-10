import { useLayoutEffect } from 'react';
import { useParams } from 'react-router-dom';
import FilmDescription from '../../components/film-description/film-description';
import FilmInfo from '../../components/film-info/film-info';
import Footer from '../../components/footer/footer';
import Header from '../../components/header/header';
import LoadingLayout from '../../components/loading-layout/loading-layout';
import SmallFilmCardList from '../../components/small-film-card-list/small-film-card-list';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { fetchCommentsActions, fetchFilmInfoAction, fetchSimilarFilmsAction } from '../../store/api-actions';
import { getFilmInfo, getLoadingErrorStatus, getSimilarFilms } from '../../store/films-data/selectors';
import NotFoundScreen from '../not-found-screen/not-found-screen';

export default function FilmScreen(): JSX.Element {
  const MAX_SIMILAR_FILMS = 4;
  const film = useAppSelector(getFilmInfo);
  const similarFilms = useAppSelector(getSimilarFilms);
  const isLoadingError = useAppSelector(getLoadingErrorStatus);
  const dispatch = useAppDispatch();
  const {id} = useParams();

  useLayoutEffect(() => {
    if (id) {
      dispatch(fetchFilmInfoAction(id));
      dispatch(fetchSimilarFilmsAction(id));
      dispatch(fetchCommentsActions(id));
    }
  }, [id, dispatch]);

  if (!id || isLoadingError) {
    return (
      <NotFoundScreen />
    );
  }

  if (!film || (id && film.id !== +id)) {
    return (
      <LoadingLayout />
    );
  }

  return (
    <>
      <section className="film-card film-card--full" style={{backgroundColor: film.backgroundColor}}>
        <div className="film-card__hero">
          <div className="film-card__bg">
            <img src={film.backgroundImage} alt={film.name} />
          </div>

          <h1 className="visually-hidden">WTW</h1>

          <Header />

          <FilmDescription film={film} />
        </div>

        <FilmInfo film={film} />
      </section>

      <div className="page-content">
        <section className="catalog catalog--like-this">
          <h2 className="catalog__title">More like this</h2>

          {similarFilms && <SmallFilmCardList films={similarFilms.slice(0, MAX_SIMILAR_FILMS)} />}

        </section>

        <Footer />
      </div>
    </>
  );
}
