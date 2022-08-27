import { beforeAll, expect, test } from 'vitest'

import postcss from 'postcss'
import postcssrc from 'postcss-load-config'

let rc: any

beforeAll(async () => {
  rc = await postcssrc({ from: undefined })
})

test('CSS', async () => {
  const result = await postcss(rc.plugins).process('html { background-color: black; }', rc.options)

  expect(result.css).toBe('html { background-color: black; }')
})

test('Custom Properties', async () => {
  const result = await postcss(rc.plugins).process(
    ':root { --primary-color: black; } html { background-color: var(--primary-color); }',
    rc.options
  )

  expect(result.css).toBe(':root { --primary-color: black; } html { background-color: var(--primary-color); }')
})

test('Custom Media Queries', async () => {
  const result = await postcss(rc.plugins).process(
    '@custom-media --media-query-phone (max-width: 428px); @media (--media-query-phone) { html { background-color: black; } }',
    rc.options
  )

  expect(result.css).toBe('@media (max-width: 428px) { html { background-color: black; } }')
})
