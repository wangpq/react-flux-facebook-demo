

import React,{Component} from "react";
import AppStore from "../flux-facebook/AppStore";
import AppActions from "../flux-facebook/AppActions";

import {Button} from 'element-react';

export default class MyFooter extends Component{
  
  constructor(props) {
    super(props);
    this.state={
      items: AppStore.getAll()
    };
  }

  componentDidMount() {
    AppStore.addChangeListener(this.onProductChange.bind(this));
  }

  componentWillUnmountn() {
    AppStore.removeChangeListener(this.onProductChange.bind(this));
  }

  onProductChange() {
    this.setState({
      items: AppStore.getAll()
    });
  }

  createNewProduct() { 
    let prdNo=new Date().getTime()+'_'+parseInt(Math.random()*100)
    const params={
      "prdNo" :prdNo ,
      "prdName" : "物品"+prdNo,
      "prdCount" : 1
    }
    AppActions.addProductSingle(params);
  }

  removeSelectPrd() { 
    // 不建议直接在这里处理 AppStore，不然就失去了使用flux的意义
    /*
    AppStore.productList.forEach((item,index)=>{
      if(item.prdNo ===AppStore.productListSelected[0].prdNo){
        AppStore.productList.splice(index, 1);
        return false;
      }
    });
    AppStore.emit('change'); 
    */ 

    if(AppStore.productListSelected.length==0){
      alert("请先选中商品项");
      return false;
    }
    AppActions.removeProductSelectd();
  } 

  modifySelectPrdCount() { 
    /*
    if(AppStore.productListSelected.length==0){
      //alert("请先选中商品项");
      return false;
    }
    AppStore.productList.forEach((item,index)=>{
      if(item.prdNo ===AppStore.productListSelected[0].prdNo){
        AppStore.productList[index].prdCount=parseInt(Math.random()*100);
        AppStore.emit('change');
        return false;
      }
    });
    */

    if(AppStore.productListSelected.length==0){
      alert("请先选中商品项");
      return false;
    }

    let count=parseInt(Math.random()*100);
    AppActions.modifySelectProductCount(count);
  }  

  myModifyProductCount(event){  
    let index=event.target.getAttribute("index");
    let count=parseInt(Math.random()*100);
    AppStore.productList[index].prdCount=count;
    AppStore.emit('change');
  }

  myRemoveProduct(event) {  
    let index=event.target.getAttribute("index");
    AppActions.removeProductByIndex(index);
  }

  render() {

    const style={
      footer : {
        padding : "18px 12px",
        borderTop : "1px solid #ccc"
      }
    }

    let items = this.state.items;
    let itemHtml = 
        items.map( (listItem, i)=> {
          return <li key={i} data-index={i} data-item={listItem} style={{ "padding" : "4px"}}>
              <span>{i+1}</span>
              <button index={i} onClick={this.myModifyProductCount.bind(this)}>修改数量</button>
                名称： {listItem.prdName} --- 数量：{listItem.prdCount}
              <button index={i} onClick={this.myRemoveProduct.bind(this)}>删除</button>
            </li>;
        });

    let myFootTpl=
        <div style={style.footer}>
          <div className="opt">
            <Button type="info" size="small" onClick={this.createNewProduct}>添加</Button>
            <Button type="danger" size="small" onClick={this.removeSelectPrd}>删除</Button>
            <Button type="warning" size="small"  onClick={this.modifySelectPrdCount}>数量</Button>
          </div> 
          <ul>{itemHtml}</ul>
        </div>
        
    return myFootTpl;
  }
}


