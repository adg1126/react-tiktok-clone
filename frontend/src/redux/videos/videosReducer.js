import {
  FETCH_VIDEOS_START,
  FETCH_VIDEOS_SUCCESS,
  FETCH_VIDEOS_FAILURE
} from './videosActionTypes';

const INITIAL_STATE = {
  videos: [],
  errMsg: ''
};

const videosReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FETCH_VIDEOS_START:
      return state;
    case FETCH_VIDEOS_SUCCESS:
      return { ...state, videos: action.payload };
    case FETCH_VIDEOS_FAILURE:
      return { ...state, errMessage: action.payload };
    default:
      return state;
  }
};

export default videosReducer;
