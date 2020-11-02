import {delay, put, takeLatest} from "redux-saga/effects";
import {loginFailed, loginSuccess, postLogin} from "../App/actions";
import ActionTypes from "../App/constants";
import {ActionType} from "typesafe-actions";

export function* getLogin({
                            payload: {username, password},
                          }: ActionType<typeof postLogin>) {
  console.log("Simulating login");
  yield delay(500);
  if (Math.random() > 0.5) {
    yield put(loginSuccess());
  } else {
    yield put(loginFailed(new Error()));
  }
}

export const login = function* () {
  yield takeLatest(ActionTypes.POST_LOGIN, getLogin);
};
