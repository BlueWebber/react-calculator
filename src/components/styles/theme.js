export const darkTheme = {
  status: "dark",
  colors: {
    appBackground: {
      main: "#181a1b",
      dark: "#1b1e1f",
      mid: "#343434",
      darkMid: "#303030",
    },
    text: {
      primary: "rgba(232, 230, 227, 0.95)",
      secondary: "#afafaf",
      tooltip: "white",
    },
    shadow: {
      primary: "rgba(0, 0, 0, 0.2)",
    },
    button: {
      primary: "#484848",
      danger: "#ed4245",
      secondary: "rgb(0, 98, 204)",
      success: "#0d761d",
      hover: {
        success: "#0e801f",
        primary: "#4d4d4d",
        secondary: "rgb(0, 109, 227)",
        danger: "#c03537",
      },
      active: {
        primary: "#262626",
        success: "#0b6318",
        secondary: "rgb(0, 82, 171)",
      },
      text: {
        primary: "rgba(232, 230, 227, 0.95)",
        secondary: "white",
        success: "white",
      },
    },
    border: {
      primary: "#000000",
      mid: "#343434",
    },
    nav: "#1b1e1f",
    scrollbar: "#666666",
    tooltip: "black",
  },
};

export const lightTheme = {
  status: "light",
  colors: {
    ...darkTheme.colors,
    appBackground: {
      ...darkTheme.colors.appBackground,
      main: "#dedede",
      dark: "#c9c9c9",
      mid: "#ffffff",
      darkMid: "#f3f3f3",
    },
    text: {
      ...darkTheme.colors.text,
      primary: "#313131",
      secondary: "#575757",
    },
    button: {
      ...darkTheme.colors.button,
      primary: "#fcfcfc",
      success: "#11a428",
      hover: {
        ...darkTheme.colors.button.hover,
        primary: "#ededed",
        success: "#0f9925",
      },
      active: {
        ...darkTheme.colors.button.active,
        primary: "#dbdbdb",
        success: "#0c7d1e",
      },
      text: {
        ...darkTheme.colors.button.text,
        primary: "#313131",
      },
    },
    border: {
      ...darkTheme.colors.border,
      primary: "#9e9e9e",
      mid: "#bababa",
    },
    shadow: {
      ...darkTheme.colors.shadow,
      primary: "#ababab",
    },
    nav: "#e8e8e8",
    scrollbar: "#6d7a7a",
  },
};
