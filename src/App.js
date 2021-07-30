import React, { useState } from "react";
import { BrowserRouter as Router, Link, Route } from "react-router-dom";
import Employess from "./Employess";
// import Login from "./component/Login/Login";
// import Reg from "./component/Registr/Reg";

function App() {
  return (
    <Router>
      <div className="mainPage">
        <div className="header">
          <div className="logo">
            {/* <Link to={process.env.PUBLIC_URL + '/'}>
              <span className="back-logo">Back</span>
            </Link> */}
          </div>
          <nav>
            <ul>
              <li>
                <Link to={process.env.PUBLIC_URL + '/'}>Main</Link>
              </li>
              <li>
                <Link to={process.env.PUBLIC_URL + '/employess'}>Employess</Link>
              </li>
            </ul>
          </nav>
          </div>
          <Route path={process.env.PUBLIC_URL + '/'} exact>
            {/* <Reg /> */}
          </Route>

          <Route path={process.env.PUBLIC_URL + '/employess'} exact>
            <Employess />
          </Route>
        
        <Route path={process.env.PUBLIC_URL + '/'} exact>
          <div className="banner">
            <img  src="image/logo.jpg" alt="logotype"></img>
          </div>
        </Route>
      </div>
    </Router>
  );
}

export default App;
