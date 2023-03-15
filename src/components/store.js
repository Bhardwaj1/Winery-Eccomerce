import { createStore } from "redux";

import rootReducer from "./Redux/reducer/main";

const store = createStore(
    rootReducer
)
export  default store;