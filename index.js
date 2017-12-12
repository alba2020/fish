import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom'

import './style.css'

import App from './Components/App'

ReactDOM.render(
    <App />,
    document.getElementById('content')
);

//var App = React.createClass({
//    render: function() {
//        return (
//            <div className='App'>
//                <h1>Home Page</h1>
//                
//            </div>
//        );
//    }
//});
//
//ReactDOM.render(
//    <App />,
//    document.getElementById('content')
//);