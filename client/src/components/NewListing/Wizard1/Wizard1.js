import React, {Component} from 'react';
import './Wizard1.css';
import Dashboard from '../../Dashboard/Dashboard';
import '../../../assets/step_active.png/';
import '../../../assets/step_inactive.png';
import Button from './../../Buttons/Button';

class Wizard1 extends Component{
    render() {
        return(
            <div className="container">
                <div>
                <div className="container-fluid">
                    <div className="row">
                   
                        <div className="left col-md-3"></div>
                        <div className="center col-md-6"></div>
                        <div className="right col-md-3"></div>
                    </div>
                    </div>
                </div>

            </div>
        );
    }
}

export default Wizard1;
