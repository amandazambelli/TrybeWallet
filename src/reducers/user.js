import { SET_USER_EMAIL } from '../actions';

const INITIAL_STATE = {
  email: '',
};

const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case SET_USER_EMAIL:
    return { ...state, email: action.payload };

  default:
    return state;
  }
};

export default userReducer;
