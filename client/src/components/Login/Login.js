import React, { Component } from 'react';
import './Login.css';
import '../../assets/auth_logo.png';
import Input from '../Input/Input';
import Button from '../Buttons/Button';
class Login extends Component {
    render () {
        return (
            <div>
               <div className="container-fluid">
                    <div className="row">
                   
                        <div className="left col-md-3"></div>
                        <div className="center col-md-6">

                        </div>
                        <div className="right col-md-3"></div>
                    </div> 
                </div>
            </div>
        );
    }
}

export default Login;