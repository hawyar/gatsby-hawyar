import { theme } from "@chakra-ui/core"

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
    body: "Inter, sans-serif",
    heading: "Inter, sans-serif",
    mono: "Menlo, monospace",
  },
}

export default customTheme
