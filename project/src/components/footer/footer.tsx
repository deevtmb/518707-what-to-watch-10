import Logo from '../logo/logo';

export default function Footer(): JSX.Element {
  const footerLogoClassName = 'logo__link--light';

  return (
    <footer className="page-footer">
      <Logo className={footerLogoClassName} />

      <div className="copyright">
        <p>© 2022 What to watch Ltd.</p>
      </div>
    </footer>
  );
}
