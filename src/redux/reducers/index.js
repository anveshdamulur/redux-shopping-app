import {  combineReducers } from "redux";
import { productDetailsReducer, productReducer } from "./productReducer";

const reducers = combineReducers({
    allProducts :  productReducer,
    product : productDetailsReducer
})

export default reducers;