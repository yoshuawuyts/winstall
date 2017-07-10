var browserify = require('browserify')
var installify = require('installify')
var assert = require('assert')
var pump = require('pump')
var fs = require('fs')

module.exports = winstall

function winstall (root, opts, done) {
  if (!done) {
    done = opts
    opts = {}
  }

  assert.equal(typeof root, 'string', 'winstall: root should be type string')
  assert.equal(typeof opts, 'object', 'winstall: opts should be type object')
  assert.equal(typeof done, 'function', 'winstall: done should be type function')

  console.log(root)
  var b = browserify(root)
    .transform(installify, opts)
    .bundle()

  pump(b, fs.createWriteStream('/dev/null'), function (err) {
    if (err) return done(smallError(err))
    done()
  })
}

function smallError (err) {
  var newErr = new Error(err.message)
  newErr.index = err.index
  newErr.lineNumber = err.lineNumber
  newErr.filename = err.filename
  newErr.column = err.column
  return newErr
}
