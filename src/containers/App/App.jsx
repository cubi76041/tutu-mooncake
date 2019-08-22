import React, { Suspense } from 'react';
import { BrowserRouter } from 'react-router-dom';

import './App.css';
import AppRouter from '../Router/Router';

const App = () => (
  <BrowserRouter>
    <Suspense fallback={<div>Loading ...</div>}>
      <AppRouter />
    </Suspense>
  </BrowserRouter>
);

export default App;
