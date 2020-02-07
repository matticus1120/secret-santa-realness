import { combineReducers } from "redux";
import settings from "./settingsReducer";
import people from "./peopleReducer";

export default combineReducers({
  settings: settings,
  people: people
});