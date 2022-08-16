import { Link } from 'react-router-dom';
import { AppRoute, AuthorizationStatus } from '../../const';
import { useAppSelector } from '../../hooks';
import { getAuthorizationStatus } from '../../store/user-process/selectors';

export default function UserBlock(): JSX.Element {
  const authorizationStatus = useAppSelector(getAuthorizationStatus);

  return (
    <ul className="user-block">
      {authorizationStatus === AuthorizationStatus.Authorized &&
      <li className="user-block__item">
        <div className="user-block__avatar">
          <img src="img/avatar.jpg" alt="User avatar" width="63" height="63" />
        </div>
      </li>}

      <li className="user-block__item">
        {authorizationStatus === AuthorizationStatus.Authorized ?
          <Link to={AppRoute.Main} className="user-block__link">Sign out</Link> :
          <Link to={AppRoute.Login} className="user-block__link">Sign in</Link>}
      </li>
    </ul>
  );
}
