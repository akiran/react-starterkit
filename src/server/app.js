import React from 'react';
import { renderToString } from 'react-dom/server'
import path from 'path';
import express from 'express';
import { match, RouterContext } from 'react-router';
import routes from 'shared/routes';
import renderLayout from 'server/render-layout';

const app = express();

app.get('/', (req, res) => {
  match({ routes, location: req.url }, (error, redirectionLocation, renderProps) => {
    if(error) {
      res.status(500).send(error.message);
    } else if (redirectionLocation) {
      res.redirect(302, redirectLocation.pathname + redirectLocation.search);
    } else if (renderProps) {
      const rootMarkup = renderToString(<RouterContext {...renderProps} />);
      res.status(200).send(renderLayout({ rootMarkup }));
    } else {
      res.status(404).send('Not found');
    }
  });
});

export default app;
