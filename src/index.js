import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';

import UsersContextProvider from './context'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <UsersContextProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </UsersContextProvider>
  </React.StrictMode>,
);
