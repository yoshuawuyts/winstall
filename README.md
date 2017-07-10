# winstall [![stability][0]][1]
[![npm version][2]][3] [![build status][4]][5]
[![downloads][8]][9] [![js-standard-style][10]][11]

Install all dependencies required by a project.

## CLI
```txt
  Usage:
    $ winstall [dir] [options]

  Options:
    -h, --help              Print usage
    -v, --version           Print version
    -d, --save-dev          Save as dev dependencies

  Examples:
    winstall               Install all dependencies for index.js
    winstall client.js     Install all dependencies for "client"
```

## Usage
```js
var winstall = require('winstall')

winstall(__dirname + 'index.js', function (err) {
  if (err) throw errr
})
```

## API
### `install(root, [opts], callback(err))`
Install all dependencies for root. Saves all dependencies by default. Opts can
be:
- __opts.save-dev:__ save as dev dependencies instead.


## License
[MIT](https://tldrlegal.com/license/mit-license)

[0]: https://img.shields.io/badge/stability-experimental-orange.svg?style=flat-square
[1]: https://nodejs.org/api/documentation.html#documentation_stability_index
[2]: https://img.shields.io/npm/v/winstall.svg?style=flat-square
[3]: https://npmjs.org/package/winstall
[4]: https://img.shields.io/travis/yoshuawuyts/winstall/master.svg?style=flat-square
[5]: https://travis-ci.org/yoshuawuyts/winstall
[6]: https://img.shields.io/codecov/c/github/yoshuawuyts/winstall/master.svg?style=flat-square
[7]: https://codecov.io/github/yoshuawuyts/winstall
[8]: http://img.shields.io/npm/dm/winstall.svg?style=flat-square
[9]: https://npmjs.org/package/winstall
[10]: https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat-square
[11]: https://github.com/feross/standard
