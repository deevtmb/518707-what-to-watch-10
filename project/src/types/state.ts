import { store } from '../store';
import { Film } from './film';
import { UserData } from './user-data';

export type UserProcess = {
  authorizationStatus: string,
  user: UserData | null,
}

export type FilmsData = {
  films: Film[],
  filmInfo: Film | null,
  similarFilms: Film[],
  promoFilm: Film | null,
  favoriteFilms: Film[]
}

export type State = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
