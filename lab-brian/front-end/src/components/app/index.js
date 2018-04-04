import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Link } from 'raect-router-dom';
import appCreateStore from '../../lib/app-create-store.js';
import Navbar from '../navbar';
import Dashboard from '../dashboard';
import Footer from '../footer';

const store = appCreateStore();

export default class App extends React.Component {
  render() {
    return (
      <main className='hotpix'>
        <Provider>
          <BrowserRouter>
            <section>
              <Navbar />
              <Route path='/user/:auth' component={Dashboard} />
              <Footer />
            </section>
          </BrowserRouter>
        </Provider>
      </main>
    );
  }
}