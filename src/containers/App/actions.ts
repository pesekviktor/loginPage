import {action} from "typesafe-actions";

import ActionTypes from "./constants";
import {LoginForm} from "./types";

export const postLogin = (loginForm: LoginForm) =>
  action(ActionTypes.POST_LOGIN, loginForm);
export const loginSuccess = () => action(ActionTypes.POST_LOGIN_SUCCESS);
export const loginFailed = (error: object) =>
  action(ActionTypes.POST_LOGIN_ERROR, error);
