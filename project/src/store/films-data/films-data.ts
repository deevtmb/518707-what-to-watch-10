import { createSlice } from '@reduxjs/toolkit';
import { NameSpace } from '../../const';
import { FilmsData } from '../../types/state';
import { fetchFavoriteFilmsAction, fetchFilmInfoAction, fetchFilmsAction, fetchPromoFilmAction, fetchSimilarFilmsAction } from '../api-actions';


const initialState: FilmsData = {
  films: [],
  filmInfo: null,
  similarFilms: [],
  promoFilm: null,
  favoriteFilms: []
};

export const filmsData = createSlice({
  name: NameSpace.Films,
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchFilmsAction.fulfilled, (state, action) => {
        state.films = action.payload;
      })
      .addCase(fetchFilmInfoAction.fulfilled, (state, action) => {
        state.filmInfo = action.payload;
      })
      .addCase(fetchSimilarFilmsAction.fulfilled, (state, action) => {
        state.similarFilms = action.payload;
      })
      .addCase(fetchPromoFilmAction.fulfilled, (state, action) => {
        state.promoFilm = action.payload;
      })
      .addCase(fetchFavoriteFilmsAction.fulfilled, (state, action) => {
        state.favoriteFilms = action.payload;
      });
  },
});
