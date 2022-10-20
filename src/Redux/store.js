import { applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import rootReduser from "./redusers/rootReduser";


const store = createStore(rootReduser, composeWithDevTools(applyMiddleware(thunk)));

const dispatch = store.dispatch;
export { dispatch };

export default store;