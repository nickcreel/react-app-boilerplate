# Basic React Boilerplate
Setup a basic React app skeleton. Built with [Webpack](https://webpack.js.org/) and [Babel](https://babeljs.io/). 

# Motivation
I wanted to create my own React app boilerplate without using `create-react-app`. I think it gives me a better understanding of how the different pieces work together to form the whole app.

# Get started
1. Select "use this template" in the options on GitHub to create new repo using this boilerplate.
2. Clone to local machine.
3. Run `yarn install`.
4. To build the default template, run `yarn run create`. This triggers a webpack build.
5. To run a development server, run `yarn start`. You should now be able to view the basic hello world app in your browser at `localhost:8080`.

# Styles
There is a small set of base styles in `src/index.css`. These styles set box sizing to border box, and reset padding/margin to 0 on all elements. They also set height to 100% for html, body, and the React root element.

This app is setup to style components using the styled-components library. You could theoretically style all parts of your app in css files, but I believe it is easier to understand style scope and troubleshoot style issues when they are applied at the component level. styled-components also has nifty features like automatic critical css (good for load times) and automatic vendor prefixing (good for cross browser compatibility, and no need to run styles through Autoprefixer!). For more information on styled-components, check out [the documentation](https://styled-components.com/docs/basics).

# Webpack and Babel
Webpack bundles the various assets used in your app and creates builds for distribution. Babel compiles modern JavaScript (ES6) in a way that newer JavaScript features (like ES6 imports) can be used in older browsers. This is a simplification of their benefits, in reality they are both powerful tools for managing the way your application is distributed and maintained.
