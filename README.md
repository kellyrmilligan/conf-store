# Filterable config store, based on Hapijs Confidence

[![Dependency Status](https://david-dm.org/kellyrmilligan/conf-store.svg)](https://david-dm.org/kellyrmilligan/conf-store)
[![Build Status](https://travis-ci.org/kellyrmilligan/conf-store.svg?branch=master)](https://travis-ci.org/kellyrmilligan/conf-store)
[![Coverage Status](https://coveralls.io/repos/github/kellyrmilligan/conf-store/badge.svg?branch=master)](https://coveralls.io/github/kellyrmilligan/conf-store?branch=master)

### why?
I wanted a lightweight alternative to Hapijs Confidence library. I was using it in a client side project, and found it a bit heavy.

### example
```
import ConfStore from 'conf-store'

const config = {
  apiKey: {
    "$filter": "env",
    "development": "asdfasdf",
    "staging": "asfasdf",
    "production": "asfdasd"
  }
}
const store = new Store(config)
const manifest = store.get('/', { env: process.env.NODE_ENV })
export default manifest
//manifest is an object filtered by NODE_ENV in this example
```


### CLI
A cli is also available in order to export a filtered store to a json file to use in a client side app for example consumed by webpack.

in pakage.json scripts block:

```
build-config: confStore fixtures/store.js -p '/' -f env=$NODE_ENV -o dist/config.json
```

the first arugment is the path to the module that exports the unfiltered store.

```
import ConfStore from 'conf-store'

const config = {
  apiKey: {
    "$filter": "env",
    "development": "asdfasdf",
    "staging": "asfasdf",
    "production": "asfdasd"
  }
}
const store = new Store(config)

export default store
```

-p arg is the path you want to get from the store to export.

-f is the filter you want to apply. it will be converted to

```
{ env: 'development'}
```

to be applied against the store

-o is where the file should be output.
