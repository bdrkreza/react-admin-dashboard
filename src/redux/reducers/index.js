import { combineReducers } from "redux";
import themeReducer from "./ThemeReducer";

const rootReducer = combineReducers({ themeReducer });

export default rootReducer;
