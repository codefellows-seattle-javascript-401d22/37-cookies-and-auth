import './style/main.scss';
import React from 'react';
import ReactDom from 'react-dom';
import { Provider } from 'react-redux';
import Favicon from 'react-favicon';

import appCreateStore from './lib/app-create-store.js';
import App from './components/app/';

let store = appCreateStore();
// favicon not loading, still in progress...

let AppContainer = () => {
  return (
    <section>
      <div>
        <Favicon url='../../assets/favicon.ico' />
      </div>
      <Provider store={store}>
        <App />
      </Provider>
    </section>
  );
};

ReactDom.render(<AppContainer />, document.getElementById('root'));