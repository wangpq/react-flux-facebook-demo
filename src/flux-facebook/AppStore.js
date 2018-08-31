//var EventEmitter = require('events').EventEmitter;
//var assign = require('object-assign');


import {EventEmitter} from "events";
import assign from "object-assign";

const AppStore = assign({}, EventEmitter.prototype, {
  // 商品列表
  productList: [],
  // 被选中的商品列表
  productListSelected : [],

  getAll() {
    return this.productList;
  },
  getProductListLength() {
    return this.productList.length;
  },

  emitChange() {
    this.emit('change');
  },

  addChangeListener(callback) {
    this.on('change', callback);
  },

  removeChangeListener(callback) {
    this.removeListener('change', callback);
  }

});

export default AppStore;