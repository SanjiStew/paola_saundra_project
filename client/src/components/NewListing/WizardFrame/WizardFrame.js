import React, { Component } from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import "./WizardFrame.css"
import Wizard1 from './../Wizard1/Wizard1';
import Wizard2 from './../Wizard2/Wizard2';
import Wizard3 from './../Wizard3/Wizard3';
import Wizard4 from './../Wizard4/Wizard4';
import Wizard5 from './../Wizard5/Wizard5';

class WizardFrame extends Component {
    render(){
        return (
            <div className="WizardFrame">
                <header/>
                {
                    this.props.step == 1 ? <Wizard1/> :
                    this.props.step == 2 ? <Wizard2/> :
                    this.props.step == 3 ? <Wizard3/> :
                    this.props.step == 4 ? <Wizard4/> :
                    this.props.step == 5 ? <Wizard5/> :
                    null
                }
            </div>
        );
    }
}
export default WizardFrame;