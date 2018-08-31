

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
  }

  componentWillUnmountn() {
    AppStore.removeChangeListener(this.onProductChange);
  }

  onProductChange() {
    this.setState({
      items: AppStore.getAll()
    });
  }

  onCurrentChange (item) { 
    AppStore.productListSelected=[];
    AppStore.productListSelected.push(item);
    AppStore.emit('change');
  }

  render() {
    return <div style={{"height":"250px",overflow:"auto",margin:"18px 12px"}}>
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


