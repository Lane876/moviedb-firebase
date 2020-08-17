import { combineReducers } from "redux";
import userReducer from "./userReducer";
import favoriteReducer from "./favorite/favoriteReducer";
import searchReducer from "./search/searchReducer";

const rootReducer = combineReducers({
  user: userReducer,
  favorite: favoriteReducer,
  results: searchReducer,
});

export default rootReducer;
