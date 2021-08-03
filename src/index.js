import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import "./index.scss";
import App from "./App/App.js";
import { Provider } from 'react-redux';
import store from './App/redux/store';

ReactDOM.render(
  <React.StrictMode>
     <Provider store={store}>
        <Router>
           <App />
        </Router>
     </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
