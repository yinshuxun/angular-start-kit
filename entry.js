require("babel-register");
require("babel-polyfill");
switch (process.env.NODE_ENV) {
    case 'prod':
    case 'production':
      module.exports = require('./config/webpack.base')({env: 'production'});
      break;
    case 'dev':
    case 'development':
    default:
      module.exports = require('./config/webpack.base')({env: 'development'});
  }