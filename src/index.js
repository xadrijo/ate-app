import React from 'react';
import ReactDOM from 'react-dom';
import Router from './components/Router';
import './css/index.css';
import 'bootstrap/dist/css/bootstrap.css';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Router />, document.getElementById('root'));
registerServiceWorker();
