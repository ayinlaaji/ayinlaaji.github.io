import React from 'react';

import {
  BrowserRouter,
  Route,
} from 'react-router-dom';

import {
  injectGlobal,
} from 'styled-components';

import Welcome from './containers/welcome';

injectGlobal `
  body, html{
    margin: 0;
    padding:0;
    font-family: 'Varela Round', sans-serif;
  }

  *{
  padding: 0;
  margin: 0;
  }

  body{
    height: 100vh;
  }

`;

export default props => (

  <BrowserRouter>

    <div>
      <Route path="/" component={Welcome} />
    </div>

  </BrowserRouter>

);
