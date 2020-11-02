import {createSelector} from "reselect";
import {ApplicationRootState} from "../../types";

const selectAppState = (state: ApplicationRootState) => state.appState;

export const makeSelectLoginLoading = () =>
  createSelector(selectAppState, (appState) => appState.loginState.loading);

export const makeSelectLoginError = () =>
  createSelector(selectAppState, (appState) => appState.loginState.error);
