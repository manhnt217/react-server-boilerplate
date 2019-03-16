import express from 'express';
import React from 'react';
import { renderToString } from 'react-dom/server';
import App from './app';
import Greeting from './app/greeting';
import template from './template';

const server = express();

server.use('/assets', express.static('assets'));

server.get('/', (req, res) => {
  const isMobile = false;
  const initialState = { isMobile };
  // const appString = renderToString(<Greeting message="GGMU"></Greeting>);
  const appString = renderToString(React.createElement(App, {message: 'GGMU'}, null));

  console.log('HTML STRING\n', appString)

  res.send(template({
    body: appString,
    title: 'Hello World',
    initialState: JSON.stringify(initialState)
  }));
});

server.listen(9998);
console.log('listening');
