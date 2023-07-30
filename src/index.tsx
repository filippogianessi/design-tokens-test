import React from 'react';
// import ReactDOM from 'react-dom/client'; <- This import is only for React version 18
import ReactDOM from "react-dom/client";
import './index.css';
import "./tokens/css/design-tokens.css";
import App from './App/App';
import reportWebVitals from './reportWebVitals';

// const root = ReactDOM.createRoot(document.getElementById('root'));
const root = document.getElementById('root'); // <- This is the correct method call for React version 17
render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  root
);
