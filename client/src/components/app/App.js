import React, { Component } from 'react';
import './App.css';
import Header from '../Header/Header';

import Dashboard from '../Dashboard/Dashboard';
import WizardFrame from '../NewListing/WizardFrame/WizardFrame';


class App extends Component {
  render() {
    return (
      <div>
        <Header/>
        <main>
            <Dashboard/>
        </main>       
      </div>
    );
  }
}

export default App;
