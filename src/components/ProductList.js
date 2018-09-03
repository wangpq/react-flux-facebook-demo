

import React,{Component} from "react";
import AppStore from "../flux-facebook/AppStore";
import { Table  } from 'element-react';

export default class ProductList extends Component{

  constructor(props) {
    super(props);
    this.state={
      columns: [
        {
          type: 'index'
        },
        {
          label: "货号",
          prop: "prdNo",
          width: 180
        },
        {
          label: "名称",
          prop: "prdName",
          width: 180
        },
        {
          label: "数量",
          prop: "prdCount"
        }
      ],
      data: AppStore.getAll()
    };
    this.onProductChange = this.onProductChange.bind(this);
  }

  componentDidMount() {
    AppStore.addChangeListener(this.onProductChange);
    AppStore.addChangeListener(this.autoGetPrdLength.bind(this));
  }

  componentWillUnmountn() {
    AppStore.removeChangeListener(this.onProductChange);
    AppStore.removeChangeListener(this.autoGetPrdLength.bind(this));
  }

  onProductChange() {
    this.setState({
      items: AppStore.getAll()
    });
  }

  autoGetPrdLength() {
    this.setState({
      prdLength: AppStore.getProductListLength()
    });
  }

  onCurrentChange (item) { 
    AppStore.productListSelected=[];
    AppStore.productListSelected.push(item);
    AppStore.emit('change');
  }

  render() {
    return <div style={{"height":"250px",overflow:"auto",margin:"60px 12px 18px"}}>
      <h2>总共{this.state.prdLength}条数据</h2>
      <Table
        style={{width: '100%'}}
        columns={this.state.columns}
        data={this.state.data}
        highlightCurrentRow={true}
        onCurrentChange={this.onCurrentChange}
        border={true}
      />
    </div>
  }
}


