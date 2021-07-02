import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import firebase from 'firebase'

firebase.initializeApp({
  apiKey: "AIzaSyDKa-6l-S4dyaUk-YOrFszeg0Y_IrMmztY",
  authDomain: "engin-bb48c.firebaseapp.com",
  projectId: "engin-bb48c",
  storageBucket: "engin-bb48c.appspot.com",
  messagingSenderId: "1006185420975",
  appId: "1:1006185420975:web:cd0623a6bdc9a980651c5a",
  measurementId: "G-3J2GXEVK3S"
});

ReactDOM.render(<App />, document.getElementById('root'));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
