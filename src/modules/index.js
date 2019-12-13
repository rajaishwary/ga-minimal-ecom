import { combineReducers } from "redux";
import productsReducer from "./products";
import configReducer from "./fe-config";

export default combineReducers({
    configReducer,
    productsReducer
});
