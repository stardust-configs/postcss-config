import { defineConfig } from 'tsup'

export default defineConfig({
  clean: true,
  dts: true,
  entry: ['./postcss.config.ts'],
  minify: true,
})
