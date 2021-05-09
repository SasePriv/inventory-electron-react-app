import UserActionTypes from './user-types';

const INITIAL_STATE = {
  isAuthenticated: false,
  isFetching: false,
  currentUser: {},
  profileStatus: undefined,
  isSetStatusFetching: false,
  setStatusError: undefined,
  userDbExist: false,
};

const UserReducer = (state = INITIAL_STATE, action) => {
  const {type, payload} = action;
  switch (type) {
    case (UserActionTypes.SET_CURRENT_USER): {
      return {
        ...state,
        isAuthenticated: true,
        isFetching: false,
        currentUser: payload,
      };
    }

    case (UserActionTypes.SET_USER_DB_EXIST): {
      return {
        ...state,
        userDbExist: payload
      }
    }

    default:
      return state;
  }
};

export default UserReducer;
