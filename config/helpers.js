/**
 * @author: tipe.io
 */
const path = require('path');

const EVENT = process.env.npm_lifecycle_event || '';

/**
 * Helper functions.
 */
var ROOT = path.resolve(__dirname, '..');

export const hasProcessFlag = (flag) => {
  return process.argv.join('').indexOf(flag) > -1;
}

export const hasNpmFlag = (flag) => {
  return EVENT.includes(flag);
}

export const isWebpackDevServer = () => {
  return process.argv[1] && !! (/webpack-dev-server/.exec(process.argv[1]));
}

export const root = path.join.bind(path, ROOT);
