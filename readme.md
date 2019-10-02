# Splist Code Style

![style: splist](https://img.shields.io/badge/style-splist-730da7)

A set of configurations for several code formatting and linting tools to be used in all Splist projects.

## Usage

### Prettier

For all projects you should have your `prettier.config.js` (it must end in `.js`) file use the base Prettier config:

```javascript
// prettier.config.js

const config = require('code-style/prettier');

module.exports = config;
```

#### Dependencies

Using Prettier only requires you to install the [`prettier`](https://www.npmjs.com/package/prettier) package.

### ESLint

Internally there is a base ESLint config that other configurations inherit rules and plugins from.
For each config you are putting the code snippet in your `.eslintrc.js` file.

#### Dependencies

All configurations require the following dependencies:

-   [`eslint`](https://www.npmjs.com/package/eslint)
-   [`eslint-config-prettier`](https://www.npmjs.com/package/eslint-config-prettier)

#### JavaScript

```javascript
// .eslintrc.js

const { base } = require('code-style/eslint');

module.exports = base;
```

##### Dependencies

No extra dependencies other than the base ones.

#### TypeScript

```javascript
// .eslintrc.js

const { typeScript } = require('code-style/eslint');

module.exports = typeScript;
```

##### Dependencies

-   [`@typescript-eslint/eslint-plugin`](https://www.npmjs.com/package/@typescript-eslint/eslint-plugin)
-   [`@typescript-eslint/parser`](https://www.npmjs.com/package/@typescript-eslint/parser)

#### TypeScript and React (TSX)

_Note: there is no JavaScript and React config._

```javascript
// .eslintrc.js

const { tsx } = require('code-style/eslint');

module.exports = tsx;
```

##### Dependencies

-   [`@typescript-eslint/eslint-plugin`](https://www.npmjs.com/package/@typescript-eslint/eslint-plugin)
-   [`@typescript-eslint/parser`](https://www.npmjs.com/package/@typescript-eslint/parser)
-   [`eslint-plugin-react`](https://www.npmjs.com/package/eslint-plugin-react)

## Philosophy

These rules should enforce a clear and consistent style across all files.
When applicable, throw warnings when something is wrong and errors when something could cause a bug.

For example, using double equals could cause unexpected behavior and should throw an error.
Not using dot notation won't cause any unexpected behavior, so it should throw a warning.

## Why this doesn't use TypeScript

Most Splist projects use TypeScript.
Originally this was written in TypeScript, however ESLint is unable to run a TypeScript file.
For that reason this project is written in plain JavaScript.

## Badge

If you want to show that you are using this code style you can use the following badge

### Markdown

```markdown
[![style: splist](https://img.shields.io/badge/style-splist-730da7)](https://forge.splist.works/splist/prototype/tree/master/code-style)
```
