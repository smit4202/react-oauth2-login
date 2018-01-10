import React, { Component } from 'react';

import logo from './logo.svg';
import './App.css';


// Make a request to the github API for the current user.

class App extends Component {

    render() {

        // if (store.)

        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <h1 className="App-title">Welcome to React</h1>
                </header>
                <p className="App-intro">
                    <div>Hash: {this.props.location.hash}</div>
                    <div>State: {this.state}</div>
                </p>
            </div>
        );
    }
}

export default App;
