import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './containers/App';
// import Card from './Card.js'
// import CardList from './CardList.js'
import registerServiceWorker from './registerServiceWorker';
import 'tachyons';
// import {robots} from './robots';

// ReactDOM.render(<App />, document.getElementById('root'));
ReactDOM.render(<App/>	, document.getElementById('root'));
registerServiceWorker();
