import { all, call } from '@redux-saga/core/effects';
import videosSagas from './videos/videosSagas';

export default function* rootSaga() {
  yield all([call(videosSagas)]);
}
