
import React, { Component } from 'react';

import MyHeader from "../components/MyHeader";
import MyFootNav from "../components/MyFootNav";

class About extends Component {
  render() {
    return (
      <div className="About">
        <MyHeader></MyHeader>
        <div className="about"> About 页面内容</div>
        <MyFootNav></MyFootNav>
      </div>
    );
  }
}

export default About;


