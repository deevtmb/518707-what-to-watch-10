import Footer from '../../components/footer/footer';
import GenresList from '../../components/genres-list/genres-list';
import Header from '../../components/header/header';
import PromoFilm from '../../components/promo-film/promo-film';
import ShowMoreButton from '../../components/show-button/show-button';
import SmallFilmCardList from '../../components/small-film-card-list/small-film-card-list';
import { useAppSelector } from '../../hooks';
import { getFilms, getPromoFilm } from '../../store/films-data/selectors';

export default function MainScreen(): JSX.Element {
  const films = useAppSelector(getFilms);
  const promoFilm = useAppSelector(getPromoFilm);

  return (
    <>
      <section className="film-card">
        <div className="film-card__bg">
          {promoFilm && <img src={promoFilm.backgroundImage} alt={promoFilm.name} />}
        </div>
        <h1 className="visually-hidden">WTW</h1>

        <Header />
        {promoFilm && <PromoFilm film={promoFilm} />}

      </section>

      <div className="page-content">
        <section className="catalog">
          <h2 className="catalog__title visually-hidden">Catalog</h2>

          <GenresList />
          <SmallFilmCardList films={films} />
          <ShowMoreButton />
        </section>

        <Footer />
      </div>
    </>
  );
}
