import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import './assets/css/index.css';
import './assets/css/App.css'
import Admin from './layouts/Admin';
import LandingPage from './views/public-views/LandingPage';
import reportWebVitals from './reportWebVitals';
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap/dist/css/bootstrap.min.css";



ReactDOM.render(
  <React.StrictMode>
        <LandingPage />
    </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
