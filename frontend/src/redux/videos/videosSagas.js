import { takeLatest, put, all } from 'redux-saga/effects';
import { FETCH_VIDEOS_START } from './videosActionTypes';
import { fetchVideosSuccess, fetchVideosFailure } from './videosActions';

const url = 'https://tiktokclone-mern-backend7868.herokuapp.com/v2/posts';

function* fetchVideosAsync() {
  try {
    const res = yield fetch(url);
    const data = yield res.json();
    yield put(fetchVideosSuccess(data));
  } catch (err) {
    yield put(fetchVideosFailure(err.message));
  }
}

function* fetchVideosStart() {
  yield takeLatest(FETCH_VIDEOS_START, fetchVideosAsync);
}

export default function* videosSagas() {
  yield all([fetchVideosStart()]);
}
