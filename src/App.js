import React, { Component } from 'react';
import Header from './components/Header';
import Message from './components/Message';
import Footer from './components/Footer';
import Cart from './components/Cart';
import ProductsContainer from './containers/ProductsContainer';
import _ from 'lodash';

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <main id="mainContainer">
          <div className="container">
            <ProductsContainer />
            <Message />
            <Cart />
          </div>
        </main>
        <Footer />
      </div>
    );
  }
}

export default App;
