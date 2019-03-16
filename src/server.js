import React from 'react';
import { renderToString } from 'react-dom/server';
// import App from './app';
import Greeting from './app/greet';

// const htmlString = renderToString(<Greeting message="GGMU"></Greeting>);

export default function genHTMLString (compModule) {
  import(compModule).then(
    comp => {
      const htmlString = renderToString(React.createElement(comp.default, {message: 'GGMU'}, null));
      console.log(htmlString)
    }
  )
}

if (!!process.argv[2]) {
  genHTMLString(process.argv[2])
}
