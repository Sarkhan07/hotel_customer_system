import { all, call, put, takeEvery } from 'redux-saga/effects';
import {
  FETCH_USERS_REQUEST,
  FETCH_USERS_SUCCESS,
  FETCH_USERS_FAILURE,
  FETCH_ROOMS_REQUEST,
  FETCH_ROOMS_SUCCESS,
  FETCH_ROOMS_FAILURE,
} from '../actions';

// Firebase functions для получения данных
// Например, функция getUsersFromFirebase и getRoomsFromFirebase

function* fetchUsers() {
  try {
    // Получение данных из Firebase
    const users = yield call(getUsersFromFirebase);

    // Диспатчим action с успешно полученными данными
    yield put({ type: FETCH_USERS_SUCCESS, payload: users });
  } catch (error) {
    // Диспатчим action с ошибкой
    yield put({ type: FETCH_USERS_FAILURE, payload: error });
  }
}

function* fetchRooms() {
  try {
    // Получение данных из Firebase
    const rooms = yield call(getRoomsFromFirebase);

    // Диспатчим action с успешно полученными данными
    yield put({ type: FETCH_ROOMS_SUCCESS, payload: rooms });
  } catch (error) {
    // Диспатчим action с ошибкой
    yield put({ type: FETCH_ROOMS_FAILURE, payload: error });
  }
}

// Слушаем actions и запускаем соответствующие sagas
function* rootSaga() {
  yield all([
    takeEvery(FETCH_USERS_REQUEST, fetchUsers),
    takeEvery(FETCH_ROOMS_REQUEST, fetchRooms),
    // Другие sagas, если необходимо
  ]);
}

export default rootSaga;
