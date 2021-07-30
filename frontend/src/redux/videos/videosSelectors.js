import { createSelector } from 'reselect';

const selectVideos = state => state.videos;

export const selectVideosArr = createSelector(
  [selectVideos],
  ({ videos }) => videos
);
