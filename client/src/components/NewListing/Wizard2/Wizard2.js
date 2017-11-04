import React, {Component} from 'react';
import './Wizard2.css';
import Input from './../../Input/Input';

class Wizard2 extends Component{
    render() {
        return(
            <div className="Wizard2">
                    <Input label='Address'/>
                <div>
                    <Input label='City'/>
                    <Input label='State'/>
                </div>
                    <Input label='Zip'/>
                
            </div>
        );
    }
}

export default Wizard2;
