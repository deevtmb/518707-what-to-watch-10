import { Route, Routes } from 'react-router-dom';
import { AppRoute } from '../../const';
import AddReviewScreen from '../../pages/add-review-screen/add-review-screen';
import FilmScreen from '../../pages/film-screen/film-screen';
import LoginScreen from '../../pages/login-screen/login-screen';
import MainScreen from '../../pages/main-screen/main-screen';
import MyListScreen from '../../pages/my-list-screen/my-list-screen';
import PlayerScreen from '../../pages/player-screen/player-screen';
import PrivateRoute from '../private-route/private-route';

export default function App(): JSX.Element {
  return (
    <Routes>
      <Route path={AppRoute.Main} element={<MainScreen />} />
      <Route path={AppRoute.Login} element={<LoginScreen />} />
      <Route path={AppRoute.FilmInfo} element={<FilmScreen />} />
      <Route path={AppRoute.FilmPlayer} element={<PlayerScreen />} />
      <Route path={AppRoute.AddReview} element={
        <PrivateRoute>
          <AddReviewScreen />
        </PrivateRoute>
      }
      />
      <Route path={AppRoute.MyList} element={
        <PrivateRoute>
          <MyListScreen />
        </PrivateRoute>
      }
      />
    </Routes>
  );
}
