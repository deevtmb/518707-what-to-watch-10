import { MouseEvent, useState } from 'react';
import { Link } from 'react-router-dom';
import { AppRoute, FilmInfoTab } from '../../const';
import { Film } from '../../types/film';
import FilmDetails from '../film-details/film-details';
import FilmOverview from '../film-overview/film-overview';
import FilmReviews from '../film-reviews/film-reviews';

type FilmInfoProps = {
  film: Film
}

export default function FilmInfo({film}: FilmInfoProps): JSX.Element {
  const [activeInfoTab, setActiveInfoTab] = useState<string | null>(FilmInfoTab.Overview);

  const handleNavLinkClick = (evt: MouseEvent<HTMLAnchorElement>) => {
    evt.preventDefault();

    setActiveInfoTab(evt.currentTarget.textContent);
  };

  return (
    <div className="film-card__wrap film-card__translate-top">
      <div className="film-card__info">
        <div className="film-card__poster film-card__poster--big">
          <img src={film.posterImage} alt={film.name} width="218" height="327" />
        </div>

        <div className="film-card__desc">
          <nav className="film-nav film-card__nav">
            <ul className="film-nav__list">
              {Object.values(FilmInfoTab).map((tab) => (
                <li key={tab} className={`film-nav__item ${tab === activeInfoTab && 'film-nav__item--active'}`}>
                  <Link
                    to={`${AppRoute.Films}${film.id}`}
                    className="film-nav__link"
                    onClick={handleNavLinkClick}
                  >
                    {tab}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {activeInfoTab === FilmInfoTab.Overview && <FilmOverview film={film} />}
          {activeInfoTab === FilmInfoTab.Details && <FilmDetails film={film} />}
          {activeInfoTab === FilmInfoTab.Reviews && <FilmReviews />}
        </div>
      </div>
    </div>
  );
}
