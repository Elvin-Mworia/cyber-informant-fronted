import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import reportWebVitals from './reportWebVitals';
import AppContext from './Components/Context/AppContext.js';
import UserContext from './Components/Context/UserContext.js';
//import Cart from './Components/Context/CartContext.js';

ReactDOM.render(
  <React.StrictMode>

    <AppContext >
    <UserContext>
    <App />
    </UserContext>
   
    </AppContext>
    

  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
