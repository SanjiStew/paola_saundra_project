import React, { Component } from 'react';
import './App.css';
import Header from '../Header/Header';
import Card from '../Card/Card';


class App extends Component {
  render() {
    return (
      <div>
      <Header/>
      <Card/>
      </div>
    );
  }
}

export default App;
