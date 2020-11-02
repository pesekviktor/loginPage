const shared = {
  black: "black",
  blue: "blue",
  navyBlue: "navyBlue",
  radiusStyle: "border-radius: 12px;",
};

const light = {
  ...shared,
  background: {color: "white"},
  global: {
    color: "black",
  },
};

const dark = {
  ...shared,
  background: {color: "black"},
  global: {
    color: "white",
  },
};

export const themes = {light: light, dark: dark};

export const DEFAULT_THEME = "light";
