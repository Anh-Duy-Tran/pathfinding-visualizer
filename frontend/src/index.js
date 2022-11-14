import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

const tileSize = 30;

const boardDimensions = {
  row: Math.floor(window.innerHeight / tileSize),
  column: Math.floor(window.innerWidth / tileSize)
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render( <App boardDimensions={boardDimensions}/> );