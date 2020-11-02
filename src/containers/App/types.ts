import {ActionType} from "typesafe-actions";
import * as actions from "./actions";

export interface AppState {
  readonly loginState: LoginState;
}

export interface LoginState {
  loading: boolean;
  readonly error?: object | boolean;
}

export interface LoginForm {
  username: string;
  password: string;
}

export type AppActions = ActionType<typeof actions>;
