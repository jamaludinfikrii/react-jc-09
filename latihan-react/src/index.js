import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import Todo from './todo'
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter } from 'react-router-dom'
import App from './App';
// var nama = 'Steve'

ReactDOM.render(
    <BrowserRouter>
    {/* Root Navigation */}
        <App/>
    </BrowserRouter>
, document.getElementById('a'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
