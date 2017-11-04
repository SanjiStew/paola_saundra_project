import React, {Component} from 'react';
import './Wizard5.css';
import Dashboard from '../../Dashboard/Dashboard';
import Button from './../../Buttons/Button';
import Input from './../../Input/Input';

class Wizard5 extends Component{
    render() {
        return(
            <div>
                <Input label="Desired Rent"/>
            </div>
        );
    }
}

export default Wizard5;
