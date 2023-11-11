import {
  FETCH_USERS_REQUEST,
  FETCH_USERS_SUCCESS,
  FETCH_USERS_FAILURE,
  FETCH_ROOMS_REQUEST,
  FETCH_ROOMS_SUCCESS,
  FETCH_ROOMS_FAILURE,
} from '../actions/index.js';

// Изначальное состояние
const initialState = {
  users: [],
  rooms: {},
  loading: false,
  error: null,
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_USERS_REQUEST:
    case FETCH_ROOMS_REQUEST:
      return { ...state, loading: true, error: null };

    case FETCH_USERS_SUCCESS:
      return { ...state, users: action.payload, loading: false };

    case FETCH_ROOMS_SUCCESS:
      return { ...state, rooms: action.payload, loading: false };

    case FETCH_USERS_FAILURE:
    case FETCH_ROOMS_FAILURE:
      return { ...state, error: action.payload, loading: false };

    // Другие cases, если необходимо

    default:
      return state;
  }
};

export default rootReducer;
