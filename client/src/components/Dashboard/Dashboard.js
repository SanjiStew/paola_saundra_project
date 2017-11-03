import React, { Component } from 'react';
import './Dashboard.css';
import Header from './../Header/Header';

class Dashboard extends Component {
    render() {
        return (
            <div style={{ height:'100%'}}>
                <Header />
                <div className="container-fluid">
                    <div className="row">
                   
                        <div className="left col-md-3"></div>
                        <div className="center col-md-6"></div>
                        <div className="right col-md-3"></div>
                    </div>
                    </div>
                </div>
            
        );
    }
}

export default Dashboard;
