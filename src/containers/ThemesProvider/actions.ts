import {action} from "typesafe-actions";
import ActionTypes from "./constants";

export const changeTheme = (theme) => action(ActionTypes.CHANGE_THEME, theme);
