import React, { Component } from 'react';
import ClientOAuth2 from 'client-oauth2';
import popsicle from "popsicle";

import logo from './logo.svg';
import './App.css';
import { Link } from 'react-router-dom';
import {Redirect} from "react-router-dom";


// Make a request to the github API for the current user.

class App extends Component {
    render() {

        var githubAuth = new ClientOAuth2({
            // clientId: 'SampleClientId',
            // clientSecret: 'secret',
            // accessTokenUri: 'https://github.com/login/oauth/access_token',
            // authorizationUri: 'https://github.com/login/oauth/authorize',
            // redirectUri: 'http://example.com/auth/github/callback',
            clientId: 'SampleClientId',
            clientSecret: 'secret',
            accessTokenUri: 'http://localhost:8081/auth/oauth/token',
            authorizationUri: 'http://localhost:8081/auth/oauth/authorize',
            redirectUri: 'http://localhost:3000/login',
            scopes: ['user_info']
        });

        window.oauth2Callback = function (uri) {
            githubAuth.token.getToken(uri)
                .then(function (user) {
                    console.log(user); //=> { accessToken: '...', tokenType: 'bearer', ... }
                    return popsicle.request(user.sign({
                        method: 'get',
                        url: 'http://localhost:3000/user'
                    })).then(function (res) {
                        console.log(res) //=> { body: { ... }, status: 200, headers: { ... } }
                    })
                })
        }

        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <h1 className="App-title">Welcome to React</h1>
                </header>
                <p className="App-intro">
                    <a href={githubAuth.options.authorizationUri+"?client_id="+githubAuth.options.clientId+"&response_type=token&redirect_uri=http://localhost:3000/login"}>
                        <button type="button">
                            OAuth2 Login
                        </button>
                    </a>
                </p>
                <p className="App-intro">
                    <a href="http://localhost:8081/auth/logout">
                        <button type="button">
                            OAuth2 Logout
                        </button>
                    </a>
                </p>
            </div>
        );
    }

}

export default App;
