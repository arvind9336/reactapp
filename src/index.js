import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { Gallery, Profile } from './Gallery';
import Display from './Display';
import Demo22 from './Demo22';
import Demo23 from './Demo23';
import Configuration from './Configuration';
import Counter from './Counter';
import Like from './Like';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  <Gallery/>
  <Profile/>
  <Display/>
  <Demo22/>
  <Demo23/>
  <Configuration/>
  <Counter/>
  <Like/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
