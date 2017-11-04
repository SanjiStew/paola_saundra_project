import React, { Component } from 'react';
import "./WizardFrame.css"
import Wizard1 from './../Wizard1/Wizard1';
import Button from './../../Buttons/Button';
import Active from './../../../assets/step_active.png';
import Inactive from './../../../assets/step_inactive.png';
import Completed from './../../../assets/step_completed.png';
import Wizard2 from './../Wizard2/Wizard2';
import Wizard3 from './../Wizard3/Wizard3';
import Wizard4 from './../Wizard4/Wizard4';
import Wizard5 from './../Wizard5/Wizard5';

class WizardFrame extends Component {
    /*createStepDots(){
        var dots = [];
        for(var i = 1; i <= 5; ++i){
            var icon = (
                i == this.props.step ? Active :
                i < this.props.step ? Completed :
                Inactive
            );
            dots.push(<img src={icon}/>);
        }
        return dots;
    }*/
    render(){
        return (
            <div className="WizardFrame">
                <div className="flex">
                    <span>Add new listing</span>
                    <Button className="btn-cancel right" text="Cancel"/>
                </div>
                <div className="flex">
                     <div className="step-header"> Step {this.props.step} </div>
                </div>
                <div className="wizard-content">
                    <div className="flex">
                    {
                        [1,2,3,4,5].map(stepNum => 
                            <div className="item-1">
                                <img className="center-block" src={ 
                                stepNum == this.props.step ? Active :
                                stepNum < this.props.step ? Completed :
                                Inactive
                                } />
                            </div>)
                    }
                    </div>
                    {
                        this.props.step == 1 ? <Wizard1/> :
                        this.props.step == 2 ? <Wizard2/> :
                        this.props.step == 3 ? <Wizard3/> :
                        this.props.step == 4 ? <Wizard4/> :
                        this.props.step == 5 ? <Wizard5/> :
                        null
                    }
                  
                </div>
            </div>
        );
    }
}
export default WizardFrame;