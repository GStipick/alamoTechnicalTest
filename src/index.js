import React from 'react';
import ReactDOM from 'react-dom';
import 'bulma/css/bulma.min.css';
import './index.css';
import { Main } from './pages';
import { registerServiceWorker } from './registerServiceWorker';


ReactDOM.render(<Main />, document.getElementById('root'));
registerServiceWorker();
