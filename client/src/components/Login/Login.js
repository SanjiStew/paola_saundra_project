import React, { Component } from 'react';
import './Login.css';
import Logo from '../../assets/auth_logo.png';
import Input from '../Input/Input';
import Button from '../Buttons/Button';
class Login extends Component {
    render () {
        return (
            <div className="Login">
                <img src={Logo} className="center-block logo"></img>
                <Input label='Username'/>
                <Input label='Password' />
                <div className="login-btn">
                    <Button className="btn-success btn-spacing" text="Login"/>
                    <Button className="btn-default  btn-spacing pull-right" text="Register"/>
                    
                </div> 
            </div>
        );
    }
}

export default Login;