import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import { Elm } from './Main.elm';
import './index.css';

const elmApp = Elm.Main.init({
    node: document.getElementById('elmRoot')
});

const node = document.getElementById('root');
const root = ReactDOM.createRoot(node);
root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
);

elmApp.ports.updateDisplay.subscribe(function(resume) {
    console.log("Updating display");
    console.log(resume);
    root.render(
        <React.StrictMode>
          <App resume={resume}/>
        </React.StrictMode>
    );
});
