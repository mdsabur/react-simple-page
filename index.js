import React, { useState } from "react";
import { render } from 'react-dom';
import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";

import Subject from "./pages/Subject";
import Exam  from "./pages/Exam";
import Homework from "./pages/Homework";
import Grade from "./pages/Grade";



import Login from "./pages/Login";
import Header from "./pages/Header";



import './index.css';
export const AuthContext = React.createContext(); 
class App extends React.Component {d
  

  render() {
    return (
         <HashRouter>
      <div>
      
         <h1>গনিত-দশম শ্রেণী</h1>
         
          <ul className="header">
            <li><NavLink exact={true}  to="/">বিষয়</NavLink></li>
            <li><NavLink to ="/homework">সৃজনশীল</NavLink></li>
            <li><NavLink to="/exam">অনুশীলনী</NavLink></li>
            <li><NavLink to="/grade">ফলাফল</NavLink></li>
          </ul>
          <div className="content">
             

            <Route exact path="/" component={Subject}/>
            <Route path="/homework" component={Homework}/>
            <Route path="/exam" component={Exam}/>
            <Route path="/grade" component={Grade}/>

          </div>


      </div>
      </HashRouter>
      
    );
  }
}

render(<App />, document.getElementById('root'));
