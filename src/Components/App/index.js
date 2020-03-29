
import React, { Component } from 'react';
import './style.css';
import Home from './../Home';

import Header from '../Shared/Header';
import Footer from '../Shared/Footer';

class App extends Component {
  render() {
    return (
  <div>
    <Header/>
    <Home/>
    <Footer/>
  </div>
    );
  }
}
export default App;
