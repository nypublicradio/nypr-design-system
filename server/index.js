'use strict';
const path = require('path');

const express = require('express');

module.exports = function(app) {
  // const globSync   = require('glob').sync;
  // const mocks      = globSync('./mocks/**/*.js', { cwd: __dirname }).map(require);
  // const proxies    = globSync('./proxies/**/*.js', { cwd: __dirname }).map(require);

  // Log proxy requests
  const morgan = require('morgan');
  app.use(morgan('dev'));

  // mocks.forEach(route => route(app));
  // proxies.forEach(route => route(app));

  // turn on static files for test
  app.use(express.static(path.join(__dirname, 'static')));
};
