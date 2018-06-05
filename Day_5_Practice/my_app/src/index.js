import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));  //this means that <App /> is being injected into the element with id "root" inside the DOM
registerServiceWorker();
