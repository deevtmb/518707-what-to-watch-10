import { createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosInstance } from 'axios';
import { APIRoute } from '../const';
import { dropToken, saveToken } from '../services/token';
import { Comment } from '../types/comment';
import { FavoriteStatus } from '../types/favorite-status';
import { Film } from '../types/film';
import { UserAuthorization } from '../types/user-authorization';
import { UserComment } from '../types/user-comment';
import { UserData } from '../types/user-data';

export const fetchFilmsAction = createAsyncThunk<Film[], undefined, {extra: AxiosInstance}>(
  'data/fetchFilms',
  async (_args, {extra: api})=> {
    const {data} = await api.get<Film[]>(APIRoute.Films);
    return data;
  }
);

export const fetchFilmInfoAction = createAsyncThunk<Film, string, {extra: AxiosInstance}>(
  'data/fetchFilmInfo',
  async (id, {extra: api}) => {
    const {data} = await api.get<Film>(`${APIRoute.Films}/${id}`);
    return data;
  }
);

export const fetchSimilarFilmsAction = createAsyncThunk<Film[], string, {extra: AxiosInstance}>(
  'data/fetchSimilarFilms',
  async (id, {extra: api}) => {
    const {data} = await api.get<Film[]>(`${APIRoute.Films}/${id}${APIRoute.Similar}`);
    return data;
  }
);

export const fetchPromoFilmAction = createAsyncThunk<Film, undefined, {extra: AxiosInstance}>(
  'data/fetchPromoFilm',
  async (_args, {extra: api}) => {
    const {data} = await api.get<Film>(APIRoute.Promo);
    return data;
  }
);

export const fetchFavoriteFilmsAction = createAsyncThunk<Film[], undefined, {extra: AxiosInstance}>(
  'data/fetchFavoriteFilms',
  async (_args, {extra: api}) => {
    const {data} = await api.get<Film[]>(APIRoute.Favorite);
    return data;
  }
);

export const changeFavoriteStatusAction = createAsyncThunk<Film, FavoriteStatus, {extra: AxiosInstance}>(
  'data/changeFavoriteStatus',
  async ({filmId, status}, {extra: api}) => {
    const {data} = await api.post<Film>(`${APIRoute.Favorite}/${filmId}/${status}`);
    return data;
  }
);

export const fetchCommentsActions = createAsyncThunk<Comment[], string, {extra: AxiosInstance}>(
  'data/fetchComments',
  async (id, {extra: api}) => {
    const {data} = await api.get<Comment[]>(`${APIRoute.Comments}/${id}`);
    return data;
  }
);

export const postCommentAction = createAsyncThunk<Comment[], UserComment, {extra: AxiosInstance}>(
  'data/postComment',
  async ({filmId, comment, rating}, {extra: api}) => {
    const {data} = await api.post<Comment[]>(`${APIRoute.Comments}/${filmId}`, {comment, rating});
    return data;
  }
);

export const checkAuthorizationAction = createAsyncThunk<UserData, undefined, {extra: AxiosInstance}>(
  'user/checkAuthorization',
  async (_args, {extra: api}) => {
    const {data} = await api.get<UserData>(APIRoute.Login);
    return data;
  }
);

export const loginAction = createAsyncThunk<UserData, UserAuthorization, {extra: AxiosInstance}>(
  'user/login',
  async ({email, password}, {extra: api}) => {
    const {data} = await api.post<UserData>(APIRoute.Login, {email, password});
    saveToken(data.token);
    return data;
  }
);

export const logoutAction = createAsyncThunk<void, undefined, {extra: AxiosInstance}>(
  'user/logout',
  async (_args, {extra: api}) => {
    await api.delete(APIRoute.Logout);
    dropToken();
  }
);
