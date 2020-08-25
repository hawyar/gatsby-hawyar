import { theme } from "@chakra-ui/core"

//extends chakra's base theme
const customTheme = {
  ...theme,
  colors: {
    ...theme.colors,
    brand: {
      600: "#e5e5e5",
      700: "#f8b24f",
      800: "#ea9a96",
      900: "#303960",
    },
  },
  fonts: {
    body: "Cooper Hewitt, sans-serif",
    heading: "Cooper Hewitt, sans-serif",
    mono: "Menlo, monospace",
  },
}

export default customTheme
