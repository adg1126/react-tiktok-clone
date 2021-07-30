import { combineReducers } from 'redux';
import videosReducer from './videos/videosReducer';

export default combineReducers({ videos: videosReducer });
