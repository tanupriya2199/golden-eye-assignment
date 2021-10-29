import { combineReducers } from "redux";
import users from "./UsersReducer";

const rootReducer = combineReducers({
  users: users,
});

export default rootReducer;
