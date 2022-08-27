import { defineConfig } from 'tsup'

export default defineConfig({
  clean: true,
  dts: true,
  entry: ['./src/postcss.config.ts'],
  minify: true,
})
