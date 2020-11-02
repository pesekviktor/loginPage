import {AppActions, AppState} from "./types";
import ActionTypes from "./constants";

export const initialState: AppState = {
  loginState: {
    error: false,
    loading: false,
  },
};

function appReducer(
  state: AppState = initialState,
  action: AppActions
): AppState {
  switch (action.type) {
    case ActionTypes.POST_LOGIN:
      return {
        loginState: {
          loading: true,
          error: false,
        },
      };
    case ActionTypes.POST_LOGIN_SUCCESS:
      return {
        loginState: {
          loading: false,
          error: state.loginState.error,
        },
      };
    case ActionTypes.POST_LOGIN_ERROR:
      const {loginState, ...rest} = state;
      return {
        loginState: {
          ...loginState,
          loading: false,
          error: action.payload,
        },
        ...rest,
      };
    default:
      return state;
  }
}

export default appReducer;
