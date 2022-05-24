import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import ListProducts from './ListProducts';


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <ListProducts />
  </React.StrictMode>
);
