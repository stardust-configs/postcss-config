# @stardust-configs/postcss-config

> Shareable PostCSS config

## Install

```sh
npm install @stardust-configs/postcss-config --save-dev
```

or

```sh
yarn add @stardust-configs/postcss-config --dev
```

## Usage

Edit `postcss.config.js`.

```js
module.exports = require('@stardust-configs/postcss-config').defaultConfig
```

## Override

Override `postcss.config.js`.

```js
module.exports = require('@stardust-configs/postcss-config').defineConfig({
  importFrom: './src/styles/variables.css',
})
```

## Author

[@p-chan](https://github.com/p-chan)

## License

MIT
