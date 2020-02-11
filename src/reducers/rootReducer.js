import { combineReducers } from "redux";
import settings from "./settingsReducer";
import people from "./peopleReducer";
import giphy from "./giphyReducer";

export default combineReducers({
  settings: settings,
  people: people,
  giphy: giphy
});