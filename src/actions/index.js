import { EMAIL_CHANGED, PASSWORD_CHANGED } from './types.js';

// When any of these are run they pass there return value to ALL reducers. 
export const emailChanged = (text) => {
  console.log("Action called: 'email_changed'");
  return {
    type: EMAIL_CHANGED,
    payload: text
  };
};

export const passwordChanged = (text) => {
  console.log("Action called: 'password_changed'");
  return {
    type: PASSWORD_CHANGED,
    payload: text
  };
};
