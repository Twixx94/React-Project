console.log("Hello World!");
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter } from 'react-router-dom'


// const root = ReactDOM.createRoot(document.getElementById('app'));
// root.render(
//   <React.StrictMode>
//     <BrowserRouter>
//     <App />
//     </BrowserRouter>
//   </React.StrictMode>
// );
const { render } = wp.element; //we are using wp.element here!

if (document.getElementById('app')) { //check if element exists before rendering
  render(
    <React.StrictMode>
    <BrowserRouter>
       <App />
    </BrowserRouter>
    </React.StrictMode>, document.getElementById('app'));
}

