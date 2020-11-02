/**
 * Combine all reducers in this file and export the combined reducers.
 */

import {combineReducers} from "redux";
import appReducer from "./containers/App/reducer";
import themesProviderReducer from "./containers/ThemesProvider/reducer";
import {languageProviderReducer} from "./containers/LanguageProvider/reducer";

/**
 * Merges the main reducer with the router state and dynamically injected reducers
 */
export default function createReducer(injectedReducers = {}) {
  const rootReducer = combineReducers({
    appState: appReducer,
    theme: themesProviderReducer,
    language: languageProviderReducer,
    ...injectedReducers,
  });

  return rootReducer;
}
