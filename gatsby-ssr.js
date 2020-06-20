const React = require("react")

const {
  ThemeProvider,
  theme,
  ColorModeProvider,
  CSSReset,
} = require("@chakra-ui/core")

const customTheme = require("./src/theme/Theme")

exports.wrapPageElement = ({ element, props }) => {
  // props provide same data to Layout as Page element will get
  // including location, data, etc - you don't need to pass it
  return (
    <ThemeProvider theme={customTheme}>
      <CSSReset />
      {element}
    </ThemeProvider>
  )
}
