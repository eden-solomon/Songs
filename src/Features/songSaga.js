import { call, put, takeLatest } from 'redux-saga/effects';
import { fetchSongsStart, fetchSongsSuccess, fetchSongsFailure, addSongSuccess, updateSongSuccess, deleteSongSuccess } from './songSlice';
import * as api from '../Services/songApi';

function* fetchSongsSaga() {
  try {
    yield put(fetchSongsStart());
    const songs = yield call(api.fetchSongs);
    yield put(fetchSongsSuccess(songs));
  } catch (error) {
    yield put(fetchSongsFailure(error.message));
  }
}

function* addSongSaga(action) {
  try {
    const newSong = yield call(api.addSong, action.payload);
    yield put(addSongSuccess(newSong));
  } catch (error) { console.error(error); }
}

function* updateSongSaga(action) {
  try {
    const updatedSong = yield call(api.updateSong, action.payload);
    yield put(updateSongSuccess(updatedSong));
  } catch (error) { console.error(error); }
}

function* deleteSongSaga(action) {
  try {
    yield call(api.deleteSong, action.payload);
    yield put(deleteSongSuccess(action.payload));
  } catch (error) { console.error(error); }
}

export default function* songSaga() {
  yield takeLatest('songs/fetchSongs', fetchSongsSaga);
  yield takeLatest('songs/addSong', addSongSaga);
  yield takeLatest('songs/updateSong', updateSongSaga);
  yield takeLatest('songs/deleteSong', deleteSongSaga);
}