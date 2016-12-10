import firebase from 'firebase';
import { Actions } from 'react-native-router-flux';

// Action creators do the logic work. Like a controller or model
import { EMAIL_CHANGED,
         PASSWORD_CHANGED,
         LOGIN_USER_SUCCESS,
         LOGIN_USER_FAIL,
         LOGIN_USER } from './types.js';

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

export const loginUser = ({ email, password }) => {
  return (dispatch) => {
    dispatch({ type: LOGIN_USER });

    firebase.auth().signInWithEmailAndPassword(email, password)
    .then((user) => {
      loginUserSuccess(dispatch, user);
    })
    .catch((signInError) => {
      console.log(signInError);
      firebase.auth().createUserWithEmailAndPassword(email, password)
        .then((user) => {
          loginUserSuccess(dispatch, user);
        })
        .catch((createUserError) => {
          console.log(createUserError);
          loginUserFail(dispatch);
        });
    });
  };
};

const loginUserSuccess = (dispatch, user) => {
  dispatch({ type: LOGIN_USER_SUCCESS, payload: user });

  Actions.main();
};

const loginUserFail = (dispatch) => {
  dispatch({ type: LOGIN_USER_FAIL });
};
