import {ActionType} from "typesafe-actions";
import * as actions from "./actions";

export interface ThemeProviderState {
  readonly theme: string;
}

export type ThemeProviderActions = ActionType<typeof actions>;
