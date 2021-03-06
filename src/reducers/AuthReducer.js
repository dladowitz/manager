import { EMAIL_CHANGED,
         PASSWORD_CHANGED,
         LOGIN_USER_SUCCESS,
         LOGIN_USER_FAIL,
         LOGIN_USER } from '../actions/types.js';

const INITIAL_STATE = { email: '',
                        password: '',
                        user: null,
                        error: '',
                        loading: false
                      };

export default (state = INITIAL_STATE, action) => {
  console.log('Action called: ', action);
  
  switch (action.type) {
    case EMAIL_CHANGED:
      return { ...state,
        email: action.payload
      };
    case PASSWORD_CHANGED:
      return { ...state,
        password: action.payload
      };
    case LOGIN_USER:
      return { ...state,
        error: '',
        success: '',
        loading: true,
      };
    case LOGIN_USER_SUCCESS:
      return { ...state,
        user: action.payload,
        error: '',
        success: 'Logged In',
        loading: false,
        email: '',
        password: '',
      };
    case LOGIN_USER_FAIL:
      return { ...state,
        error: 'Authentication Failed',
        success: '',
        loading: false,
        password: '',
      };
    default:
      return state;
  }
};
