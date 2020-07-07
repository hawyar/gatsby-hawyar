# Personal website

[![Netlify Status](https://api.netlify.com/api/v1/badges/60f5465d-0a0c-4288-a2a7-a48eb367bd4e/deploy-status)](https://app.netlify.com/sites/gatsby-personal/deploys)

## Setup

Make sure you have the [Gatsby CLI](https://www.gatsbyjs.org/docs/quick-start/#use-the-gatsby-cli) installed. Next, clone the repo and then cd into the directory

```js
git clone https://github.com/hawyar/hawyar.com.git
cd hawyar.com
```

Install the dependencies (it might take some time)

```bash
yarn install
// npm install
```

Start a development envrionment, make sure yuo are in the correct directoy else the command will not execute.

```bash
gatsby develop
```

Open http://localhost:8000

Open http://localhost:8000/___graphql for GraphiQL

### Creating Pages

Gatsby's docs call this process **Programmatically** Creating Pages. Looking at the code is easier to understand what is happening.

First we create template (a regular component) for our posts. See `./src/templates/BlogPost.js`

Thenw e query our data using graphql and create pages.

And to do that we have to use Gatsby's Node API to create the nodes and generate pages (and its slug)

Head over to `gatsby-node.js`

For each blog posts, using Gatsby's Node API we dynamically generate slugs based on the file path.

## Styling

initially almost all components were styled with [styled-components](https://styled-components.com/). It is great and I loved it but I wanted to [Chakra-UI](https://chakra-ui.com/) give a try.

All styles are taken from the theme config file <br/>

```js
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
```

The customTheme object contains the original chakra-ui [theme](https://chakra-ui.com/theme). We can override or extend any configuration from the theme. <br/>

To introduce our colors and fonts we override the colors object. Notice before we define our colors we inclide the theme's colors with `...theme.colors`.

## Contributing

1. Fork it.
2. Create your feature branch (`git checkout -b feature/fooBar`)
3. Commit your changes (`git commit -am 'Add some fooBar'`)
4. Push to the branch (`git push origin feature/fooBar`)
5. Create a new Pull Request
