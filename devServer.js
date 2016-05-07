import app from 'server/app';
import path from 'path';
import express from 'express';
import webpack from 'webpack';
import webpackMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';
import config from './webpack.config.dev';
import settings from './settings';

const compiler = webpack(config);
const NODE_PORT = process.env.NODE_PORT || 3000;
const NODE_HOST = process.env.NODE_HOST || 'localhost';


app.use(webpackMiddleware(compiler, {
  publicPath: config.output.publicPath
}));

app.use(webpackHotMiddleware(compiler, {
  log: console.log
}));

const staticDir = path.join(settings.APP_HOME, '/build');

app.use('/static', express.static(staticDir));

app.listen(NODE_PORT, NODE_HOST, (err) => err ?
  console.error(err) :
  console.log(`Listening at http://${NODE_HOST}:${NODE_PORT}`));
