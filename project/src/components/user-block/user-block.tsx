import { MouseEvent } from 'react';
import { Link } from 'react-router-dom';
import { AppRoute, AuthorizationStatus } from '../../const';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { logoutAction } from '../../store/api-actions';
import { getAuthorizationStatus, getUserData } from '../../store/user-process/selectors';

export default function UserBlock(): JSX.Element {
  const authorizationStatus = useAppSelector(getAuthorizationStatus);
  const user = useAppSelector(getUserData);
  const dispatch = useAppDispatch();

  const handleLogoutClick = (evt: MouseEvent) => {
    evt.preventDefault();
    dispatch(logoutAction());
  };

  return (
    <ul className="user-block">
      {authorizationStatus === AuthorizationStatus.Authorized &&
      <li className="user-block__item">
        <Link to={AppRoute.MyList}>
          <div className="user-block__avatar">
            <img src={user?.avatarUrl} alt="User avatar" width="63" height="63" />
          </div>
        </Link>
      </li>}

      <li className="user-block__item">
        {authorizationStatus === AuthorizationStatus.Authorized ?
          <Link onClick={handleLogoutClick} to={AppRoute.Main} className="user-block__link">Sign out</Link> :
          <Link to={AppRoute.Login} className="user-block__link">Sign in</Link>}
      </li>
    </ul>
  );
}
