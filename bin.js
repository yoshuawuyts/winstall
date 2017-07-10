#!/usr/bin/env node

var minimist = require('minimist')
var path = require('path')

var argv = minimist(process.argv.slice(2), {
  alias: {
    help: 'h',
    version: 'v',
    'save-dev': 'd'
  },
  boolean: [
    'save-dev'
  ]
})

var usage = `
  Usage:
    $ winstall [dir] [options]

  Options:
    -h, --help              Print usage
    -v, --version           Print version
    -d, --save-dev          Save as dev dependencies

  Examples:
    winstall               Install all dependencies for index.js
    winstall client.js     Install all dependencies for "client"
`

;(function main (argv) {
  if (argv.help) {
    console.log(usage)
  } else if (argv.version) {
    console.log(require('./package.json').version)
  } else {
    var root = argv._[0] || path.join(process.cwd(), 'index.js')
    var winstall = require('./')

    var opts = {}
    if (argv['save-dev']) opts['save-dev'] = true
    else opts['save'] = true

    winstall(root, opts, function (err) {
      if (err) return exit(err)
    })
  }
})(argv)

function exit (err) {
  console.error(err)
  process.exit(1)
}
