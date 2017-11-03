import React, { Component } from 'react';
import './Dashboard.css';
import Header from './../Header/Header';

class Dashboard extends Component {
    render() {
        return (
            <div>
                <Header />
                <div class="container">
                    <div class="row">
                        <div class="left col-sm">
                            One of three columns
                        </div>
                        <div class="center col-md">
                            One of three columns
                         </div>
                        <div class="right col-sm">
                            One of three columns
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Dashboard;
