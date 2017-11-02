import React, { Component } from 'react';
import './Input.css';

class Input extends Component {
    render() {
        return (
            <div className="Input">
                {
                    this.props.label ? 
                        <div className="Input-label">{this.props.label}</div> : 
                        null
                }
                {
                    this.props.multiline ? 
                        <textarea type="text" className="Input-text"></textarea> :
                        <input type="text" className="Input-text"></input>
                }
            </div>
        );
    }
}

export default Input;