import { combineReducers } from "redux";
import userReducer from "./userReducer";
import favoriteReducer from "./favorite/favoriteReducer";

const rootReducer = combineReducers({
  user: userReducer,
  favorite: favoriteReducer,
});

export default rootReducer;
