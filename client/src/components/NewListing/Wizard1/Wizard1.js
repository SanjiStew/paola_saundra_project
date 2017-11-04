import React, {Component} from 'react';
import './Wizard1.css';

import Button from './../../Buttons/Button';
import Input from './../../Input/Input';

class Wizard1 extends Component{
    render() {
        return(
            <div>
                <Input label="Property Name"/>
                <Input multiline={true} label="Property Description"/>
             </div>
        );
    }
}

export default Wizard1;
