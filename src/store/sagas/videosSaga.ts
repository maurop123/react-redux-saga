import { call, put, takeLatest } from 'redux-saga/effects';
import {
  GET_VIDEOS_FETCH,
  GET_VIDEOS_SUCCESS,
  GET_VIDEOS_FAIL,
} from '../actions/videosAction.ts';
import data from '../../data.json';

function getVideosFetch() {
  return new Promise((resolve, reject) => {
    try {
      setTimeout(() => {
        resolve(data);
      }, 1000);
    } catch (error) {
      console.debug('video fetch error:', error);
      reject(error);
    }
  });
}

function* workGetVideosFetch() {
  try {
    const videos = yield call(getVideosFetch);
    console.debug({ videos });
    yield put({ type: GET_VIDEOS_SUCCESS, videos });
  } catch (error) {
    yield put({ type: GET_VIDEOS_FAIL, error });
  }
}

export default function* () {
  yield takeLatest(GET_VIDEOS_FETCH, workGetVideosFetch);
}
