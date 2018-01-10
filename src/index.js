import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';
import App from './App';
// import store from './store';
import {BrowserRouter as Router, Route} from "react-router-dom";
import Login from "./Login";

ReactDOM.render((
    <Router>
        <div>
            <Route exact path="/" component={App}/>
            <Route strict path="/login" component={Login}/>
        </div>
    </Router>
), document.getElementById('root'));