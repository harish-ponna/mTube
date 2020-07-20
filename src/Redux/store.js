// NPM packages
import { createStore, combineReducers, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";

// Modules
import { userReducer } from "./reducers/userReducer";
import { videoReducer } from "./reducers/videoReducer";

const rootReducer = combineReducers({
  userState: userReducer,
  videoState: videoReducer,
}); //all reducers combined

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
); //store created

export { store };
