import {ActionType} from "typesafe-actions";
import * as actions from "./actions";

export interface LanguageProviderState {
  readonly locale: string;
}

export type LanguageProviderActions = ActionType<typeof actions>;
