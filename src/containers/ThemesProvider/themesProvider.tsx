import {ThemeProvider} from "styled-components";
import React from "react";
import {useSelector} from "react-redux";
import {makeSelectTheme} from "./selectors";
import {themes} from "./themes";

export interface Props {
  children?: React.ReactNode;
}

export const ThemesProvider = ({children}: Props) => {
  const theme = useSelector(makeSelectTheme());

  return (
    <ThemeProvider theme={themes[theme]}>
      {React.Children.only(children)}
    </ThemeProvider>
  );
};
