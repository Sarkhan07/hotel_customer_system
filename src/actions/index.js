export const FETCH_USERS_REQUEST = 'FETCH_USERS_REQUEST';
export const FETCH_USERS_SUCCESS = 'FETCH_USERS_SUCCESS';
export const FETCH_USERS_FAILURE = 'FETCH_USERS_FAILURE';

export const FETCH_ROOMS_REQUEST = 'FETCH_ROOMS_REQUEST';
export const FETCH_ROOMS_SUCCESS = 'FETCH_ROOMS_SUCCESS';
export const FETCH_ROOMS_FAILURE = 'FETCH_ROOMS_FAILURE';

export const CHECK_IN_ROOM = 'CHECK_IN_ROOM';
export const CHECK_OUT_ROOM = 'CHECK_OUT_ROOM';

export const checkInRoom = (roomId, guestName, checkOutDate) => ({
  type: CHECK_IN_ROOM,
  payload: { roomId, guestName, checkOutDate },
});

export const checkOutRoom = (roomId) => ({
  type: CHECK_OUT_ROOM,
  payload: { roomId },
});

export const fetchUsers = () => ({ type: FETCH_USERS_REQUEST });
export const fetchUsersSuccess = (users) => ({ type: FETCH_USERS_SUCCESS, payload: users });
export const fetchUsersFailure = (error) => ({ type: FETCH_USERS_FAILURE, payload: error });

export const fetchRooms = () => ({ type: FETCH_ROOMS_REQUEST });
export const fetchRoomsSuccess = (rooms) => ({ type: FETCH_ROOMS_SUCCESS, payload: rooms });
export const fetchRoomsFailure = (error) => ({ type: FETCH_ROOMS_FAILURE, payload: error });


