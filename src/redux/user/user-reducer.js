import UserActionTypes from './user-types';

const INITIAL_STATE = {
  isAuthenticated: false,
  isFetching: false,
  currentUser: null,
  profileStatus: undefined,
  isSetStatusFetching: false,
  setStatusError: undefined,
};

const UserReducer = (state = INITIAL_STATE, action) => {
		const { type, payload } = action;
		
    switch (type) {
      
      case(UserActionTypes.SET_CURRENT_USER): {
        return {
          ...state,
          isAuthenticated: true,
          isFetching: false,
          currentUser: payload,
        }
      }

      default:
        return state;
    }
  };
  
  export default UserReducer;