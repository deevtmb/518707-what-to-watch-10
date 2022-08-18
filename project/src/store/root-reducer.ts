import { combineReducers } from '@reduxjs/toolkit';
import { NameSpace } from '../const';
import { commentsData } from './comments-data/comments-data';
import { filmsData } from './films-data/films-data';
import { userProcess } from './user-process/user-process';

export const rootReducer = combineReducers({
  [NameSpace.Films]: filmsData.reducer,
  [NameSpace.User]: userProcess.reducer,
  [NameSpace.Comments]: commentsData.reducer,
});
