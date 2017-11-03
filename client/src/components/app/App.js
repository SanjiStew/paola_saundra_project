import React, { Component } from 'react';
import './App.css';
import Header from '../Header/Header';
import Card from '../Card/Card';
import Button from '../Buttons/Button';
import Input from '../Input/Input';
import Dashboard from '../Dashboard/Dashboard';


class App extends Component {
  render() {
    return (
      <div>
      <Header/>
      <Dashboard/>
      </div>
    );
  }
}

export default App;
