import React, { Component } from 'react';
import './App.css';
import Header from '../Header/Header';

import Dashboard from '../Dashboard/Dashboard';
import WizardFrame from '../NewListing/WizardFrame/WizardFrame';
import Login from './../Login/Login';


class App extends Component {
  constructor(){
    super();
    this.state={
      loggedin: false
    }
  }
  render() {
    return (
      <div>
        {
          this.state.loggedin ? <Header/> : null
        }
        <main>
            <WizardFrame step={1}/>
        </main>       
      </div>
    );
  }
}

export default App;
