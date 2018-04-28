//import React from "react";
//import ReactDOM from "react-dom";
//import App from "./App";
//ReactDOM.render(<App />, document.getElementById("root"));
import React from 'react';
import ReactDOM from 'react-dom';
//import './index.css';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter } from 'react-router-dom';

//ReactDOM.render(<BrowserRouter><App /></BrowserRouter>, 
//  document.getElementById('root'));
//registerServiceWorker();
ReactDOM.render(<App />, document.getElementById("root"));