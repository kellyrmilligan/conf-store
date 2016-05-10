"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _index = require("../lib/index");

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

var store = new _index2.default({
  key1: {
    "$filter": "env",
    "development": "dev",
    "staging": "staging",
    "production": "prod"
  }
});

exports.default = store;
//# sourceMappingURL=store.js.map
//# sourceMappingURL=store.js.map