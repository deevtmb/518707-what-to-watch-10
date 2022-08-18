import {Link} from 'react-router-dom';
import {AppRoute} from '../../const';
import Logo from '../../components/logo/logo';

export default function NotFoundScreen(): JSX.Element {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        width: '100vw',
        backgroundImage: 'linear-gradient(-180deg,#180202 0%,#000 100%)',
        color: '#DFCF77',
      }}
    >
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: '30px'}}
      >
        <Logo />
        <p style={{fontSize: '8vw', margin: '12vh auto'}}>404</p>
        <p>This page doesn&apos;t exist</p>
        <Link style={{color: '#DFCF77'}} to={AppRoute.Main}>Return to Main page</Link>
      </div>
    </div>
  );
}
