import React, { Component } from 'react';
import './Button.css';

class Button extends Component {
    render() {
        return (
            <button type="button" className={"btn "+this.props.className}>{this.props.text}</button>
        );
    }
}


export default Button;