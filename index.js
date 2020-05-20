import React, { useState } from "react";
import { render } from 'react-dom';
import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";

import Home from "./pages/Home";
import Stuff from "./pages/Stuff";
import Contact from "./pages/Contact";
import Login from "./pages/Login";
import Header from "./pages/Header";



import './index.css';
export const AuthContext = React.createContext(); 
class App extends React.Component {

  

  render() {
    return (
      
    );
  }
}

render(<App />, document.getElementById('root'));
