import React from 'react';
import ReactDOM from 'react-dom';
// Add global+body css
import './bulma-custom.global.css';
import './index.css';
import { Main } from './pages';
import { registerServiceWorker } from './registerServiceWorker';


ReactDOM.render(<Main />, document.getElementById('root'));
registerServiceWorker();
