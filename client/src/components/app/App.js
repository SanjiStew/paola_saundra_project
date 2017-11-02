import React, { Component } from 'react';
import './App.css';
import Header from '../Header/Header';
import Card from '../Card/Card';
import Button from '../Buttons/Button';
import Input from '../Input/Input';


class App extends Component {
  render() {
    return (
      <div>
      <Header/>
      <Card/>
      <Input label="Desired Rent"/>
      <Input multiline={true}/>
      </div>
    );
  }
}

export default App;
