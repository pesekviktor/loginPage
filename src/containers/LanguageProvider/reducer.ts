/*
 *
 * LanguageProvider reducer
 *
 */
import ActionTypes from "./constants";
import {DEFAULT_LOCALE} from "../../locales";
import {LanguageProviderActions, LanguageProviderState} from "./types";

export const initialState: LanguageProviderState = {
  locale: DEFAULT_LOCALE,
};

export const languageProviderReducer = (
  state: LanguageProviderState = initialState,
  action: LanguageProviderActions
): LanguageProviderState => {
  switch (action.type) {
    case ActionTypes.CHANGE_LOCALE:
      return {
        locale: action.payload,
      };
    default:
      return state;
  }
};
