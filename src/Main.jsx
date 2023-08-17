import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import { Elm } from './Main.elm';
import './index.css';

const app = Elm.Main.init({
    node: document.getElementById('elmRoot')
});

const node = document.getElementById('root');
const root = ReactDOM.createRoot(node);
root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
);

app.ports.updateDisplay.subscribe(function(data) {
    console.log("Updating display");
    console.log(data);
});
