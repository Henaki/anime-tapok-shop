import React from 'react';
import ReactDOM from 'react-dom';
import RouterSite from './component/MainPage/MainPage'
import './index.css';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter } from 'react-router-dom';
import Header from './component/Header/Header';
import Footer from './component/Footer/Footer';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
    <Header/>
      <RouterSite />
      <Footer/>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change <Comp date = { new Date() }/>
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
