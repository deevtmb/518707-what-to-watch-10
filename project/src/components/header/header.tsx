import { useLocation } from 'react-router-dom';
import { AppRoute } from '../../const';
import Logo from '../logo/logo';
import UserBlock from '../user-block/user-block';

export default function Header(): JSX.Element {
  const {pathname} = useLocation();

  return (
    <header className="page-header film-card__head">
      <Logo />
      {pathname === AppRoute.Login ?
        <h1 className="page-title user-page__title">Sign in</h1> :
        <UserBlock />}
    </header>
  );
}
