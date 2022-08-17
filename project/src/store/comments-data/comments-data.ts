import { createSlice } from '@reduxjs/toolkit';
import { NameSpace } from '../../const';
import { CommentsData } from '../../types/state';
import { fetchCommentsActions, postCommentAction} from '../api-actions';

const initialState: CommentsData = {
  comments: []
};

export const commentsData = createSlice({
  name: NameSpace.Comments,
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchCommentsActions.fulfilled, (state, action) => {
        state.comments = action.payload;
      })
      .addCase(postCommentAction.fulfilled, (state, action) => {
        state.comments = action.payload;
      });
  }
});
