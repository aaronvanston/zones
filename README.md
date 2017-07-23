# Zones

Zones features a simple user interface to add, update and view various time zones across the world.

## Why?

Zones is a simple project aimed at implementing a minimal boilerplate codebase for React. It's use is to demonstrate and build up a real world example of various front-end tooling. Zones will be the starting point (boilerplate) for any further React project I build.


## Technical stack

The following tools and libraries are used within Zones.

- React
- Redux
- Webpack
- CSS Modules
- PostCSS
- CSS Next
- Jest

Zones also comes with preferred Babel, eslint, stylelint and editor configurations.

## Development

### Requirements

- [nvm](https://github.com/creationix/nvm) or [Node.js](https://nodejs.org/en/) 6 or later

### Setup

1. Install the version of Node specified in `.nvmrc` (optional):

  ```shell
  $ nvm install && nvm use
  ```

2. Install [Yarn](https://yarnpkg.com/en/):

  ```shell
  $ npm i -g yarn
  ```

3. Install the project's dependencies:

  ```shell
  $ yarn
  ```

### Usage

Start the application in developer mode:

```shell
$ yarn start
```

Run unit tests with [Jest](https://facebook.github.io/jest/):

```shell
$ yarn jest

# Watch for changes
$ yarn jest:watch
```

Lint code with [ESLint](http://eslint.org/):

```shell
$ yarn lint
```

## License

[MIT License](.github/LICENSE.md)
