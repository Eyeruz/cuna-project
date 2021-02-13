import { combineReducers } from "redux";
import userReducer from "./userReducer";
import loanReducer from "./loanReducer";

export default combineReducers({
  users: userReducer,
  loans: loanReducer,
});
