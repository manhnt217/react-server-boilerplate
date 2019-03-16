import React from 'react';
import { renderToString } from 'react-dom/server';
// import App from './app';
// import Greeting from './app/greeting';

// const htmlString = renderToString(<Greeting message="GGMU"></Greeting>);

console.log(process.argv[2])

import('./app/greeting').then(
  comp => {
    const htmlString = renderToString(React.createElement(comp.default, {message: 'GGMU'}, null));
    console.log(htmlString)
  }
)
