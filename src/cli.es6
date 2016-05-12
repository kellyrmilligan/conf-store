#!/usr/bin/env node
import yargs from 'yargs'
import tryRequire from 'try-require'
import path from 'path'
import debug from 'debug'
import jsonfile from 'jsonfile'
import fs from 'fs-extra'

const logDebug = debug('confStore')

function exit(message) {
  console.error(message)
  process.exit()
}

const argv = yargs
  .usage('Usage: $0 [store] -p [path] -f [filter] -o [file]')
  .demand(['p','f', 'o'])
  .demand(1)
  .argv
logDebug('args: ', argv)

let store = tryRequire(path.resolve(argv._[0]))
logDebug('path: ', path.resolve(argv._[0]))
logDebug('store: ', store)

if (!store) {
  exit('Err: path to store not found')
}

store = store.default ? store.default : store

const filterParts = argv.f.split('=')
const filter = {
  [filterParts[0]]: filterParts[1]
}
logDebug(filter)

const results = store.get(argv.p, filter)
logDebug(results)

fs.ensureDirSync(path.resolve(path.parse(argv.o).dir))
jsonfile.writeFileSync(path.resolve(argv.o), results)
process.exit()
