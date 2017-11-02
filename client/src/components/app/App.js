import React, { Component } from 'react';
import './App.css';
import Header from '../Header/Header';
import Card from '../Card/Card';
import Button from '../Buttons/Button';


class App extends Component {
  render() {
    return (
      <div>
      <Header/>
      <Card/>
      <Button/>
      </div>
    );
  }
}

export default App;
