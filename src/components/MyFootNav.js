

import React,{Component} from "react";

import {Link} from 'react-router-dom';

export default class MyFootNav extends Component{
  render() {
    let myFootTpl=
      <footer>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
        </ul>
      </footer>
    return myFootTpl;
  }
}


