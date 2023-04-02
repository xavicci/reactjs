import React from 'react';
import ReactDOM from 'react-dom/client';
import { GifExpertApp } from './GifExpertApp';

import './styles.css'; //de esta forma hacemos el CSS global

ReactDOM.createRoot(document.getElementById('root')).render(
  <GifExpertApp />
  // <React.StrictMode>
  // </React.StrictMode>,
)
