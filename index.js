import React, { Component } from 'react';
import { render } from 'react-dom';
import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";

import Home from "./pages/Home";
import Stuff from "./pages/Stuff";
import Contact from "./pages/Contact";

import './index.css';

class App extends Component {

  render() {
    return (
      <HashRouter>
      <div>
      
         <h1>Simple SPA</h1>
          <ul className="header">
            <li><NavLink exact={true}  to="/">Home</NavLink></li>
            <li><NavLink to ="/stuff">Stuff</NavLink></li>
            <li><NavLink to="/contact">Contact</NavLink></li>
          </ul>
          <div className="content">
              <Route exact path="/" component={Home}/>
            <Route path="/stuff" component={Stuff}/>
            <Route path="/contact" component={Contact}/>
          </div>


      </div>
      </HashRouter>
      
    );
  }
}

render(<App />, document.getElementById('root'));
