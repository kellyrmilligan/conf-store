# cli for generating asset manifests. based on gulp-rev, and uses the rev- modules for the hashing algo.

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
