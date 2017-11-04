import React, { Component } from 'react';
import './App.css';
import Header from '../Header/Header';
import {HashRouter as Router, Route, Switch} from 'react-router-dom';

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
        <Router>
            <Switch>
              <Route exact path='/'  component={null}/>
              <Route  component={Header}/>
            </Switch>
        </Router>
        <main>
            <Router>
               <Switch>
                 <Route exact path='/'  component={Login}/>
                 <Route path='/dashboard' component={Dashboard}/>
                 <Route exact path='/Wizard/:step' render={
                   (props)=><WizardFrame step={props.match.params.step}/>
                }/>
                 
                </Switch>

            </Router>
            
        </main>       
      </div>
    );
  }
}

export default App;
