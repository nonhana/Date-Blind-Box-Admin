import { createStore, combineReducers } from "redux";
import MenuReducer from "./menu/reducer";
import UserReducer from "./user/reducer";
import LayoutReducer from "./layout/reducer";
import VisibleReducer from "./visible/reducer";
const reducer = combineReducers({
  menu: MenuReducer,
  user: UserReducer,
  layout: LayoutReducer,
  componentsVisible: VisibleReducer,
});

const store = createStore(
  reducer,
  process.env.NODE_ENV === "development" &&
  window.__REDUX_DEVTOOLS_EXTENSION__ &&
  window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
