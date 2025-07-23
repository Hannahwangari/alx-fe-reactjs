// src/main.jsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App'; // adjust path if App.jsx is in a different location
import './index.css'; // optional: if you have a global CSS file

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
