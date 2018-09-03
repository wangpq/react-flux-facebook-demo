import React,{Component} from "react";

import logo from '../assets/images/logo.svg';

import {Link} from 'react-router-dom';

export default class MyHeader extends Component{
  pageBack(){
    window.history.go(-1);
  }
  render() {
    let htmlStr=
      <header>
        <div className="item">
          <i className="el-icon-arrow-left" onClick={this.pageBack.bind(this)}></i>
          <img src={logo} className="App-logo" alt="logo" />
        </div>  
        <div className="item">
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/topics">Topics</Link></li>
          </ul>
        </div> 
      </header>
    return htmlStr;
  }
}
