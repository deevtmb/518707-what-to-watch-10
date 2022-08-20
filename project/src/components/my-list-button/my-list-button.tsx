import { MouseEvent, useLayoutEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { AppRoute, AuthorizationStatus } from '../../const';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { changeFavoriteStatusAction, fetchFavoriteFilmsAction, fetchFilmsAction } from '../../store/api-actions';
import { getFavoriteFilms, getFilms } from '../../store/films-data/selectors';
import { getAuthorizationStatus } from '../../store/user-process/selectors';

type MyListButtonProps = {
  filmId: number,
}

export default function MyListButton({filmId}: MyListButtonProps): JSX.Element {
  const isAuthorized = useAppSelector(getAuthorizationStatus) === AuthorizationStatus.Authorized;
  const favoriteFilms = useAppSelector(getFavoriteFilms);
  const favoriteStatus = useAppSelector(getFilms).find((film) => film.id === filmId)?.isFavorite;
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const handleMyListButtonClick = async (evt: MouseEvent<HTMLButtonElement>) => {
    evt.preventDefault();

    if (!isAuthorized) {
      navigate(AppRoute.Login);
    }

    await dispatch(changeFavoriteStatusAction({
      filmId: filmId,
      status: favoriteStatus ? 0 : 1,
    }));

    dispatch(fetchFilmsAction());

    if (isAuthorized) {
      dispatch(fetchFavoriteFilmsAction());
    }
  };

  useLayoutEffect(() => {
    if (isAuthorized) {
      dispatch(fetchFavoriteFilmsAction());
    }
  }, [isAuthorized, dispatch]);

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
      {isAuthorized && <span className="film-card__count">{favoriteFilms.length}</span>}
    </button>
  );
}
