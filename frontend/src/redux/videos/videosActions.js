import {
  FETCH_VIDEOS_START,
  FETCH_VIDEOS_SUCCESS,
  FETCH_VIDEOS_FAILURE
} from './videosActionTypes';

export const fetchVideosStart = () => ({ type: FETCH_VIDEOS_START });

export const fetchVideosSuccess = videosArr => ({
  type: FETCH_VIDEOS_SUCCESS,
  payload: videosArr
});

export const fetchVideosFailure = errMsg => ({
  type: FETCH_VIDEOS_FAILURE,
  payload: errMsg
});
