// The import React from 'react' module is an entry point to the React library, while react-dom provides access to DOM-specific methods.
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';

import 'bootstrap/dist/css/bootstrap.min.css';


// OLD (version 17) The ReactDOM.render method is used to render a react element into the actual DOM
  //OLD import ReactDom from 'react-dom';
// NEW (version 18) The ReactDOM.createRoot method is used to render a react element into the actual DOM 
  //NEW import ReactDOM from 'react-dom/client';
// The first argument is the component we want to render, and the second is the container element on the page
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
