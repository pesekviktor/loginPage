import {createSelector} from "reselect";
import {ApplicationRootState} from "../../types";
import {initialState} from "./reducer";

const selectTheme = (state: ApplicationRootState) =>
  state.theme || initialState;

/**
 * Select the language locale
 */

const makeSelectTheme = () =>
  createSelector(selectTheme, (themeState) => themeState.theme);

export {selectTheme, makeSelectTheme};
