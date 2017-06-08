import React, { Component } from 'react';
import Footer from './Footer';
import Header from './Header';
import Logo from './Logo';

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Logo />
        <Footer />
      </div>
    );
  }
}
