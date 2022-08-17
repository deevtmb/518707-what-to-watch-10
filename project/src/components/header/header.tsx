import classNames from 'classnames';
import { Link, useLocation } from 'react-router-dom';
import { AppRoute } from '../../const';
import { useAppSelector } from '../../hooks';
import { getFavoriteFilms } from '../../store/films-data/selectors';
import { Film } from '../../types/film';
import Logo from '../logo/logo';
import UserBlock from '../user-block/user-block';

type HeaderProps = {
  film?: Film
}

export default function Header({film}: HeaderProps): JSX.Element {
  const {pathname} = useLocation();
  const favoriteFilms = useAppSelector(getFavoriteFilms);

  const headerClasses = classNames(
    'page-header',
    {
      'film-card__head': pathname === AppRoute.Main || pathname.includes(AppRoute.Films),
      'user-page__head': pathname === AppRoute.Login || pathname === AppRoute.MyList,
    }
  );

  return (
    <header className={headerClasses}>
      <Logo />

      {film &&
        <nav className="breadcrumbs">
          <ul className="breadcrumbs__list">
            <li className="breadcrumbs__item">
              <Link to={`${AppRoute.Films}${film.id}`} className="breadcrumbs__link">{film.name}</Link>
            </li>
            <li className="breadcrumbs__item">
              <Link className="breadcrumbs__link" to={`${AppRoute.Films}${film.id}${AppRoute.AddReview}`}>Add review</Link>
            </li>
          </ul>
        </nav>}

      {pathname === AppRoute.MyList &&
      <h1 className="page-title user-page__title">My list <span className="user-page__film-count">{favoriteFilms.length}</span></h1>}

      {pathname === AppRoute.Login ?
        <h1 className="page-title user-page__title">Sign in</h1> :
        <UserBlock />}
    </header>
  );
}
