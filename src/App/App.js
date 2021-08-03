import React from "react";
import { BrowserRouter as Router, Link, Route } from "react-router-dom";
import Employess from "./components/Employees/Employess";
function App() {
  return (
    <Router>
      <div className="mainPage">
        <div className="header">
          <nav>
            <ul>
              <li key={'1'}>
                <Link to={process.env.PUBLIC_URL + '/'}>Main</Link>
              </li>
              <li key={'2'}>
                <Link to={process.env.PUBLIC_URL + '/employess'}>Employess</Link>
              </li>
            </ul>
          </nav>
          </div>
          <Route path={process.env.PUBLIC_URL + '/'} exact>
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