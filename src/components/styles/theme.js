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
      button: "rgba(232, 230, 227, 0.95)",
      highlight: "#715b34",
      hover: {
        danger: "rgba(232, 230, 227, 0.95)",
      },
    },
    link: {
      hover: {
        primary: "rgba(232, 230, 227, 0.75)",
        post: "#ed602b",
      },
    },
    shadow: {
      primary: "rgba(0, 0, 0, 0.2)",
      input: "rgba(86, 86, 255, 0.5);",
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
    },
    border: {
      primary: "#000000",
      mid: "#343434",
      warning: "rgb(255, 15, 15)",
    },
    nav: "#1b1e1f",
    warning: "rgba(255, 15, 15, 0.4)",
    scrollbar: "#666666",
    paginationHover: "#27282a",
    tooltip: "black",
  },
};

export const lightTheme = {
  status: "light",
  colors: {
    ...darkTheme.colors,
    appBackground: {
      main: "#dedede",
      dark: "#ffffff",
    },
    text: {
      ...darkTheme.colors.text,
      primary: "#313131",
      secondary: "#575757",
      buttonT: "rgba(232, 230, 227, 0.95)",
    },
    button: {
      ...darkTheme.colors.button,
      secondaryButton: "rgba(123, 134, 140)",
    },
    nav: "#ffffff",
    paginationHover: "#c4c4c4",
    scrollbar: "#6d7a7a",
  },
};
