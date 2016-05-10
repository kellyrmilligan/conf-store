import ConfStore from '../lib/index'

const store = new ConfStore({
  key1: {
    "$filter": "env",
    "development": "dev",
    "staging": "staging",
    "production": "prod"
  }
});

export default store
