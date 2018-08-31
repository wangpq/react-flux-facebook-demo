/*
var React = require('react');
var AppStore = require('../flux-facebook/stores/AppStore');
var logo  = require('../assets/images/logo.svg');

var MyHeader = React.createClass({
  getInitialState: function () {
    return {
      prdLength: AppStore.getProductListLength()
    };
  },

  componentDidMount: function() {
    AppStore.addChangeListener(this.autoGetPrdLength);
  },

  componentWillUnmount: function() {
    AppStore.removeChangeListener(this.autoGetPrdLength);
  },

  autoGetPrdLength: function () {
    this.setState({
      prdLength: AppStore.getProductListLength()
    });
  },
  render: function() {
    let prdLength = this.state.prdLength;

    let htmlStr=
      <header>
        <div className="item">
          <img src={logo} className="App-logo" alt="logo" />
        </div>    
        <div className="item">
          欢饮大家来跟我学习react+flux
        </div> 
        <div className="item">
        共{prdLength}条
        </div> 
      </header>
    return htmlStr;
  }
});

module.exports = MyHeader;
*/


import React,{Component} from "react";
import AppStore from "../flux-facebook/AppStore";
import logo from '../assets/images/logo.svg';



export default class MyHeader extends Component{
  constructor(props) {
    
    super(props);

    this.state={
      prdLength: AppStore.getProductListLength()
    };

  }

  componentDidMount() {
    AppStore.addChangeListener(this.autoGetPrdLength.bind(this));
  }

  componentWillUnmount() {
    AppStore.removeChangeListener(this.autoGetPrdLength.bind(this));
  }

  autoGetPrdLength() {
    this.setState({
      prdLength: AppStore.getProductListLength()
    });
  }

  render() {
    let prdLength = this.state.prdLength;

    let htmlStr=
      <header>
        <div className="item">
          <img src={logo} className="App-logo" alt="logo" />
        </div>    
        <div className="item">
          欢饮大家来跟我学习react+flux
        </div> 
        <div className="item">
        共{prdLength}条
        </div> 
        
      </header>
    return htmlStr;
  }
}
