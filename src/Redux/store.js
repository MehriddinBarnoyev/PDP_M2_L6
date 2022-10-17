import { createStore } from "redux";
import reduser from "./reduser";

const store = createStore(reduser);

const dispatch = store.dispatch;
export { dispatch };

export default store;