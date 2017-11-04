import React, {Component} from 'react';
import './Wizard3.css';
import Dashboard from '../../Dashboard/Dashboard';
import Button from './../../Buttons/Button';
import Input from './../../Input/Input';
//this container will have state in order to add an image to it.

class Wizard3 extends Component{
    render() {
        return(
            <div>
                <div className="image-box">
                    <div className="preview">Preview</div>
                    <img></img>
                </div>
                <Input label="Image URL"/>
                
            </div>
        );
    }
}

export default Wizard3;
