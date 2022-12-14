import { combineReducers } from "redux";
import carReducer from "./car/carReducer";

const rootReducer = combineReducers({
  car: carReducer,
});

export default rootReducer;
