import { EMAIL_CHANGED, PASSWORD_CHANGED } from '../actions/types.js';

const INITIAL_STATE = { email: '' };

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case EMAIL_CHANGED:
      console.log("Reducder 'email_changed': ", action.payload);
      return { ...state, email: action.payload };
    case PASSWORD_CHANGED:
      console.log("Reducer 'password_changed': ", action.payload);
      return { ...state, password: action.payload };
    default:
      return state;
  }
};
