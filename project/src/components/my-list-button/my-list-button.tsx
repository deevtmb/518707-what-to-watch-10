import { MouseEvent } from 'react';
import { useNavigate } from 'react-router-dom';
import { AppRoute, AuthorizationStatus } from '../../const';
import { useAppSelector } from '../../hooks';
import { getFavoriteFilms } from '../../store/films-data/selectors';
import { getAuthorizationStatus } from '../../store/user-process/selectors';

type MyListButtonProps = {
  favoriteStatus: boolean
}

export default function MyListButton({favoriteStatus}: MyListButtonProps): JSX.Element {
  const isAuthorized = useAppSelector(getAuthorizationStatus) === AuthorizationStatus.Authorized;
  const favoriteFilmsCount = useAppSelector(getFavoriteFilms).length;
  const navigate = useNavigate();

  const handleMyListButtonClick = (evt: MouseEvent<HTMLButtonElement>) => {
    evt.preventDefault();

    if (!isAuthorized) {
      navigate(AppRoute.Login);
    }
  };

  return (
    <button className="btn btn--list film-card__button" type="button" onClick={handleMyListButtonClick}>
      {favoriteStatus ?
        <svg viewBox="0 0 18 14" width="18" height="14">
          <use xlinkHref="#in-list"></use>
        </svg> :
        <svg viewBox="0 0 19 20" width="19" height="20">
          <use xlinkHref="#add"></use>
        </svg>}
      <span>My list</span>
      {isAuthorized && <span className="film-card__count">{favoriteFilmsCount}</span>}
    </button>
  );
}
