import { combineReducers } from "redux";
import { productReducer } from "./productReducers";
import { selectedProductReducer } from "./productReducers";

export const reducers = combineReducers({
  productReducer: productReducer,
  selectedProductReducer: selectedProductReducer,
});
