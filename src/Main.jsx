import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import { Elm } from './Main.elm';
import './index.css';

Elm.Main.init({
    node: document.getElementById('elmRoot')
});

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
);
