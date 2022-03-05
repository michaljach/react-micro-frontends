import resolve from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'
import typescript from '@rollup/plugin-typescript'
import shebang from 'rollup-plugin-preserve-shebang'
import copy from 'rollup-plugin-copy'

const packageJson = require('./package.json')

export default [
  {
    input: 'src/index.ts',
    output: [
      {
        file: packageJson.main,
        format: 'cjs',
        sourcemap: true
      }
    ],
    plugins: [
      copy({
        targets: [{ src: 'src/.templates/**/*', dest: 'dist/.templates' }]
      }),
      shebang(),
      resolve(),
      commonjs(),
      typescript({ tsconfig: './tsconfig.json' })
    ],
    external: ['fs-extra', 'yargs']
  }
]
