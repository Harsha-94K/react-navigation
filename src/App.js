import React, { Component } from 'react';
import './App.css';
import Personal from "./Personal";
import Home from "./Home";
import Educational from "./Educational";
import {BrowserRouter as Router, Route, Link } from 'react-router-dom';


function Extras(){
  return(
    <div className="container">
    <h2>Learning React from Be-Practical</h2>
    </div>
  )
}

const routes = [
  {
    path: "/home",
    component: Home
  },
  {
    path: "/personal",
    component: Personal
  },
  {
    path: "/educational",
    component: Educational
  },
  {
    path: "/extras",
    component: Extras
  },
]

function RouteWithSubRoutes(route){
  return(
    <Route 
      path={route.path}
      render={props => (
        // pass the subroutes down to keep nesting
        <route.component {...props} routes={route.routes} />
      )}
    />
  );
}


class App extends Component {
  render() {
    return (
      <div className="container-fluid">
       <Router>
          <div>
            <nav className="navbar navbar-default">
              <div className="container">
                <div className="navbar-header">
                  <button type="button" data-toggle="collapse" data-target="#myNavbar" className="navbar-toggle">
                      <span className="icon-bar"></span>
                      <span className="icon-bar"></span>
                      <span className="icon-bar"></span>
                  </button>  
                  <a href className="navbar-brand">Resume </a> 
                </div>

                <div className="navbar-collapse collapse" id="myNavbar">
                  <ul className="nav navbar-nav">
                    <li>
                      <Link to="/home">Home</Link>
                    </li>
                    <li>
                      <Link to="/personal">Personal</Link>
                    </li>
                    <li>
                      <Link to="/educational">Educational</Link>
                    </li>
                    <li>
                      <Link to="/extras">Extras</Link>
                    </li>

                  </ul>
                </div>
              </div>
            </nav>

          {routes.map((route,i) => (
            <RouteWithSubRoutes key={i} {...route}/>
          ))}

          </div>
       </Router>
      </div>
    );
  }
}

export default App;
