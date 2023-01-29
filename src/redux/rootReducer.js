import {combineReducers} from "redux";
import * as alertReducer from "./alert/alert.reducer";
import * as userReducer from './user/user.reducer'

const rootReducer = combineReducers({
    [alertReducer.alertFeatureKey] : alertReducer.reducer,
    [userReducer.userReducerFeatureKey]: userReducer.reducer,
    
});
export {rootReducer}