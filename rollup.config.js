/* eslint-env node */

import json from 'rollup-plugin-json'

export default [
  {
    input: 'src/index.js',
    output: [
      {
        file: 'build/bundle-esm.js',
        format: 'esm',
        sourcemap: 'inline',
      },
      {
        file: 'build/bundle-cjs.js',
        format: 'cjs',
        sourcemap: 'inline',
      },
    ],
    plugins: [json()],
    external: [
      'ajv',
      'ajv/lib/refs/json-schema-draft-04.json',
      'dedupe',
      'lodash.startcase',
    ],
  },
]
