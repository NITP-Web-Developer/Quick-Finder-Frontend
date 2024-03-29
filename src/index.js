import React from 'react';
import ReactDOM from 'react-dom'
import Dia from "./dialog"
import Head from "./pages/NavPage/head"
import App from "./pages/App"
import "./index.css"
import Footer from "./pages/FooterPage/Footer"
import {BrowserRouter,Route,Switch} from "react-router-dom"
// import Boxopen1 from './Boxopen1';

ReactDOM.render( <>
  <BrowserRouter>
  <Head />
  <App/>
  <Footer/>
  </BrowserRouter>
  </>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note   this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
