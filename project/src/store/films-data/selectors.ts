import { NameSpace } from '../../const';
import { Film } from '../../types/film';
import { State } from '../../types/state';

export const getFilms = (state: State): Film[] => state[NameSpace.Films].films;

export const getFilmInfo = (state: State): Film | null => state[NameSpace.Films].filmInfo;

export const getSimilarFilms = (state: State): Film[] => state[NameSpace.Films].similarFilms;

export const getPromoFilm = (state: State): Film | null => state[NameSpace.Films].promoFilm;

export const getFavoriteFilms = (state: State): Film[] => state[NameSpace.Films].favoriteFilms;

export const getLoadingErrorStatus = (state: State): boolean => state[NameSpace.Films].isDataLoadingError;
