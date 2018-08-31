

import { Dispatcher } from "flux";
import AppStore from "./AppStore";
import ActionTypes from "./AppActionsTypes";
const AppDispatcher = new Dispatcher();


AppDispatcher.register( action=> {
  switch(action.actionType) {
    case ActionTypes.ADD_PRODUCT_SINGLE:
      AppStore.productList.push(action.product);
      AppStore.emitChange();
      break;

    case ActionTypes.REMOVE_PRODUCT_BY_INDEX:
      AppStore.productList.splice(action.index, 1)
      AppStore.emitChange();
      break;

    case ActionTypes.REMOVE_PRODUCT_SELECTED:
      AppStore.productList.forEach((item,index)=>{
        if(item.prdNo ===AppStore.productListSelected[0].prdNo){
          AppStore.productList.splice(index, 1);
          return false;
        }
      });
      AppStore.productListSelected=[];
      AppStore.emit('change'); 
      break;
      
      case ActionTypes.MODIFY_SELECTED_PRODUCT_COUNT:
        AppStore.productList.forEach((item,index)=>{
          if(item.prdNo ===AppStore.productListSelected[0].prdNo){
            AppStore.productList[index].prdCount=action.prdCount;
            AppStore.emit('change');
            return false;
          }
        });
        AppStore.emit('change'); 
        break;

    default:
      // no op
  }
})

export default AppDispatcher;