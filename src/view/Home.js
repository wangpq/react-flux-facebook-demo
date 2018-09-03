
import React, { Component } from 'react';
import MyHeader from "../components/MyHeader";
import ProductList from "../components/ProductList";
import MyFooter from "../components/MyFooter";

class Home extends Component {
  render() {
    return (
      <div className="Home">
        <MyHeader></MyHeader>
        <ProductList></ProductList>
        <MyFooter></MyFooter>
      </div>
    );
  }
}

export default Home;


