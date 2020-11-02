/*
 *
 * LanguageProvider reducer
 *
 */
import ActionTypes from "./constants";
import {ThemeProviderActions, ThemeProviderState} from "./types";
import {DEFAULT_THEME} from "./themes";

export const initialState: ThemeProviderState = {
  theme: DEFAULT_THEME,
};

function themesProviderReducer(
  state: ThemeProviderState = initialState,
  action: ThemeProviderActions
): ThemeProviderState {
  switch (action.type) {
    case ActionTypes.CHANGE_THEME:
      return {
        theme: action.payload,
      };
    default:
      return state;
  }
}

export default themesProviderReducer;
