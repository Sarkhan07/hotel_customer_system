import {
  FETCH_USERS_REQUEST,
  FETCH_USERS_SUCCESS,
  FETCH_USERS_FAILURE,
  FETCH_ROOMS_REQUEST,
  FETCH_ROOMS_SUCCESS,
  FETCH_ROOMS_FAILURE,
  CHECK_IN_ROOM,
  CHECK_OUT_ROOM
} from '../actions/index.js';


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

      case CHECK_IN_ROOM:
        const { roomId, guestName, checkOutDate } = action.payload;
        const updatedRooms = state.rooms.map((room) =>
          room.id === roomId
            ? { ...room, isCheckedIn: true, guest: guestName, checkOutDate: checkOutDate || null }
            : room
        );
        return { ...state, rooms: updatedRooms };
  
        case CHECK_OUT_ROOM:
          const { roomId: checkoutRoomId } = action.payload;
          const updatedRoomsAfterCheckout = state.rooms.map((room) =>
            room.id === checkoutRoomId ? { ...room, isCheckedIn: false, guest: '', checkOutDate: null } : room
          );
          return { ...state, rooms: updatedRoomsAfterCheckout };
        

    default:
      return state;
  }
};

export default rootReducer;
