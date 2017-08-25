import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './Components/App/App';
import registerServiceWorker from './registerServiceWorker';

import { Provider } from 'react-redux';   // yarn add react-redux
import { initStore } from './Components/Store/Store';

const storeAndHistory = initStore()
export const store = storeAndHistory[0];
export const history = storeAndHistory[1];

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'));
registerServiceWorker();
