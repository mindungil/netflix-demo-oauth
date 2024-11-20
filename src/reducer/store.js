import { configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";
import booleanReducer from "./boolean"
import counter from "./counter";

const store = configureStore({
    reducer: {
        counter: counter,
        boolean: booleanReducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
    devTools: true,
});

export default store;