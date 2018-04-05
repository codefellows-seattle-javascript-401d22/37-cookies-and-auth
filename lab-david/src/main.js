'use strict';

import React from 'react';
import ReactDom from 'react-dom';
import App from './component/app';
import {Provider} from 'react-redux';
import appStoreCreate from './lib/app-create-store.js';

let store = appStoreCreate();

let AppMain = () => {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  )
}

ReactDom.render(<AppMain />, document.getElementById('root'));