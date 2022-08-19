import { FormEvent, MouseEvent, useRef } from 'react';
import { Navigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import Footer from '../../components/footer/footer';
import Header from '../../components/header/header';
import { AppRoute, AuthorizationStatus } from '../../const';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { loginAction } from '../../store/api-actions';
import { getAuthorizationStatus } from '../../store/user-process/selectors';

export default function LoginScreen(): JSX.Element {
  const PASSWORD_CHECK_ERROR = 'Password must contain at least one alphabetic character and one number.';
  const authorizationStatus = useAppSelector(getAuthorizationStatus);
  const dispatch = useAppDispatch();
  const emailRef = useRef<HTMLInputElement | null>(null);
  const passwordRef = useRef<HTMLInputElement | null>(null);

  const handleShowButtonClick = (evt: MouseEvent) => {
    evt.preventDefault();

    if (passwordRef.current && passwordRef.current.value) {
      passwordRef.current.type === 'password' ? passwordRef.current.type = 'text' : passwordRef.current.type = 'password';
    }
  };

  const handleFormSubmit = (evt: FormEvent) => {
    evt.preventDefault();

    if (passwordRef.current === null || !((/[0-9]/g).test(passwordRef.current.value) && (/[a-zA-Z]/g).test(passwordRef.current.value))) {
      toast.warn(PASSWORD_CHECK_ERROR);
      return;
    }

    if (emailRef.current && passwordRef.current) {
      dispatch(loginAction({
        email: emailRef.current.value,
        password: passwordRef.current.value,
      }));
    }
  };

  if (authorizationStatus === AuthorizationStatus.Authorized) {
    return (
      <Navigate to={AppRoute.Main} />
    );
  }

  return (
    <div className="user-page">
      <Header />

      <div className="sign-in user-page__content">
        <form action="#" className="sign-in__form" onSubmit={handleFormSubmit}>
          <div className="sign-in__fields">
            <div className="sign-in__field">
              <input
                ref={emailRef}
                className="sign-in__input"
                type="email"
                placeholder="Email address"
                name="user-email"
                id="user-email"
                required
              />
              <label className="sign-in__label visually-hidden" htmlFor="user-email">Email address</label>
            </div>
            <div className="sign-in__field" style={{position: 'relative'}}>
              <input
                ref={passwordRef}
                className="sign-in__input"
                type="password"
                placeholder="Password"
                name="user-password"
                id="user-password"
                style={{
                  paddingRight: '20%'
                }}
              />
              <label className="sign-in__label visually-hidden" htmlFor="user-password">Password</label>
              <div
                style={{
                  position: 'absolute',
                  right: '5%',
                  top: '50%',
                  transform: 'translateY(-50%)',
                  cursor: 'pointer',
                  userSelect: 'none'
                }}
                onClick={handleShowButtonClick}
              >
                Show
              </div>
            </div>
          </div>
          <div className="sign-in__submit">
            <button className="sign-in__btn" type="submit">Sign in</button>
          </div>
        </form>
      </div>

      <Footer />
    </div>
  );
}
