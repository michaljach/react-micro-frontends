import peerDepsExternal from 'rollup-plugin-peer-deps-external'
import serve from 'rollup-plugin-serve'
import livereload from 'rollup-plugin-livereload'

const packageJson = require('./package.json')

const config = (commandLineArgs) => {
  if (commandLineArgs.configProd) {
    return [
      {
        input: 'src/App.jsx',
        output: {
          file: packageJson.main,
          format: 'iife',
          sourcemap: true,
          name: 'MfApp',
          globals: {
            react: 'React',
            'react-dom': 'ReactDOM'
          }
        },
        plugins: [peerDepsExternal],
        external: ['react', 'react-dom']
      }
    ]
  } else if (commandLineArgs.configServe) {
    return [
      {
        input: 'src/App.jsx',
        output: {
          file: packageJson.main,
          format: 'iife',
          sourcemap: true,
          name: 'MfApp',
          globals: {
            react: 'React'
          }
        },
        plugins: [
          peerDepsExternal,
          serve({
            open: true,
            verbose: true,
            openPage: '/build/index.js',
            contentBase: ['', 'build'],
            host: 'localhost',
            port: 3000
          })
        ],
        external: ['react']
      }
    ]
  }
  return [
    {
      input: 'src/index.jsx',
      output: [
        {
          file: packageJson.main,
          format: 'iife',
          sourcemap: true,
          name: 'MfApp',
          globals: {
            react: 'React',
            'react-dom': 'ReactDOM'
          }
        }
      ],
      plugins: [
        peerDepsExternal,
        serve({
          open: true,
          verbose: true,
          contentBase: ['', 'public'],
          host: 'localhost',
          port: 3000
        }),
        livereload({ watch: 'build' })
      ],
      external: ['react', 'react-dom']
    }
  ]
}

export default config
