import { all, call, put, takeEvery } from 'redux-saga/effects';
import {
  FETCH_USERS_REQUEST,
  FETCH_USERS_SUCCESS,
  FETCH_USERS_FAILURE,
  FETCH_ROOMS_REQUEST,
  FETCH_ROOMS_SUCCESS,
  FETCH_ROOMS_FAILURE,
} from '../actions/index.js';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../firebase.js';

const fetchUsersFromFirestore = () => {
  const usersCollection = collection(db, 'accounts');
  return getDocs(usersCollection).then(querySnapshot => {
    const users = querySnapshot.docs.map(doc => doc.data());
    return users;
  });
};

const fetchRoomsFromFirestore = () => {
  const roomsCollection = collection(db, 'rooms');
  return getDocs(roomsCollection).then(querySnapshot => {
    const rooms = querySnapshot.docs.map(doc => doc.data());
    return rooms;
  });
};

function* fetchUsers() {
  try {
    const users = yield call(fetchUsersFromFirestore);

    yield put({ type: FETCH_USERS_SUCCESS, payload: users });
  } catch (error) {
    yield put({ type: FETCH_USERS_FAILURE, payload: error });
  }
}

function* fetchRooms() {
  try {
    const rooms = yield call(fetchRoomsFromFirestore);

    yield put({ type: FETCH_ROOMS_SUCCESS, payload: rooms });
  } catch (error) {
    yield put({ type: FETCH_ROOMS_FAILURE, payload: error });
  }
}

function* rootSaga() {
  try {
    yield all([
      takeEvery(FETCH_USERS_REQUEST, fetchUsers),
      takeEvery(FETCH_ROOMS_REQUEST, fetchRooms),
    ]);
  } catch (error) {
    console.error('An error occurred in rootSaga:', error);
  }
}

export default rootSaga;
