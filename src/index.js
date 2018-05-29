import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import App from './components/App';
import CardList from './components/CardList';

import registerServiceWorker from './registerServiceWorker';
import 'tachyons';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();