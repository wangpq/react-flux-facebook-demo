
import React, { Component } from 'react';

//import { Router, Route, Link } from 'react-router'
import Home from "./Home";
import About from "./About";

import {
  BrowserRouter,
  Route
} from 'react-router-dom';


class App extends Component {
  render() {
    return (
      <BrowserRouter> 
        <div>
          <Route exact  path="/" component={Home}/>
          <Route path="/about" component={About}/>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;


