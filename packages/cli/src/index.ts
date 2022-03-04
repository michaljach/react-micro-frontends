#! /usr/bin/env node
/* eslint-disable no-console */

import path from 'path'
import fs from 'fs'
import fse from 'fs-extra'
import { execSync } from 'child_process'

const sourceDir = path.join(__dirname, './.boilerplates/typescript/')
const args = process.argv.slice(2, process.argv.length)

const destDir = args[0]
console.log('Creating React Micro Frontend...')

if (!fs.existsSync(destDir)) {
  fs.mkdirSync(destDir, { recursive: true })
}

fse.copy(sourceDir, destDir, (err) => {
  if (err) {
    console.error(err)
  } else {
    console.log('Installing dependencies...')
    execSync('npm i', { stdio: 'inherit', cwd: destDir })
    console.log('\n')
    console.log('\x1b[32m%s\x1b[0m', `Ready !`)
    console.log('\n')
    console.log('-----------------------------\n')
    console.log('Run \x1b[36m%s\x1b[0m', `cd ${destDir} && npm start`)
    console.log('to start development.\n')
    console.log('-----------------------------\n')
  }
})
