
import React, { Component } from 'react';

//import { Router, Route, Link } from 'react-router'
import Home from "./Home";
import Topics from "./Topics";
import Detail from './Detail';

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
          <Route path="/topics" component={Topics}/>
          <Route path="/detail/:id?" exact component={Detail} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;


