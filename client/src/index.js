import React from 'react';
import ReactDOM from 'react-dom';
//import { Link } from 'react-router-dom';
//import { Router, Route, browserHistory, IndexRoute } from "react-router";

import App from './App';
import { ContextProvider } from './SocketContext';
import './styles.css';
//import './style_login.css';


ReactDOM.render(
    <ContextProvider>
        <App />
        </ContextProvider>,

     document.getElementById('root'));