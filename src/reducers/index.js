import { combineReducers } from "redux";
import UserReducer from "./userReducer";
import LoanReducer from "./loanReducer";

export default combineReducers({
  users: UserReducer,
  loans: LoanReducer,
});
