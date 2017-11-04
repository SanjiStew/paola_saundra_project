import React, {Component} from 'react';
import './Wizard4.css';
import Input from './../../Input/Input';

class Wizard4 extends Component{
    render() {
        return(
            <div className="Wizard4">
                <Input label='Loan Amount'/>
                <Input label='Monthly Mortgage'/>
                
            </div>
        );
    }
}

export default Wizard4;
