type KeyValue = {
  [key: string]: KeyValue
}

type Variables = {
  customMedia: KeyValue
  customProperties: KeyValue
  customSelectors: KeyValue
  environmentVariables: KeyValue
}

type ReturnVariables = () => Variables

type ImportFrom = string | (string | Variables | ReturnVariables)[] | undefined

type OverrideConfig = {
  importFrom: ImportFrom
}

export const defaultConfig = {
  plugins: {
    'postcss-flexbugs-fixes': {},
    'postcss-preset-env': {
      autoprefixer: {
        flexbox: 'no-2009',
      },
      stage: 3,
      features: {
        'custom-media-queries': true,
        'custom-properties': false,
      },
    },
  },
}

export const defineConfig = (overrideConfig: OverrideConfig) => {
  return {
    plugins: {
      ...defaultConfig.plugins,
      'postcss-preset-env': {
        ...defaultConfig.plugins['postcss-preset-env'],
        importFrom: overrideConfig.importFrom,
      },
    },
  }
}

export default defaultConfig
