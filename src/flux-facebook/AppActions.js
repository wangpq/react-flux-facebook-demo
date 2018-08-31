import AppDispatcher from "./AppDispatcher";
import ActionTypes from "./AppActionsTypes";

const AppActions = {

  addProductSingle(product) {
    AppDispatcher.dispatch({
      actionType: ActionTypes.ADD_PRODUCT_SINGLE,
      product: product
    });
  },

  removeProductByIndex(index) {
    AppDispatcher.dispatch({
      actionType: ActionTypes.REMOVE_PRODUCT_BY_INDEX,
      index : index
    });
  },

  removeProductSelectd(){
    AppDispatcher.dispatch({
      actionType: ActionTypes.REMOVE_PRODUCT_SELECTED
    });
  },

  modifySelectProductCount(prdCount){
    AppDispatcher.dispatch({
      actionType: ActionTypes.MODIFY_SELECTED_PRODUCT_COUNT,
      prdCount : prdCount
    });
  },

};


export default AppActions;