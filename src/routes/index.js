import React from 'react';
import Home from '../containers/Home/Home';

const routes = [
  {
    path: '/hello',
    component: <div>Hello World</div>
  },
  {
    path: '/',
    component: <Home />
  }
];

export default routes;
