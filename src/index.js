import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { ActionCableProvider } from 'react-actioncable-provider';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
