const React = require("react")
require("typeface-cooper-hewitt")

const { ThemeProvider, theme, CSSReset } = require("@chakra-ui/core")

exports.wrapPageElement = ({ element }) => {
  return (
    <ThemeProvider theme={theme}>
      <CSSReset />
      {element}
    </ThemeProvider>
  )
}
