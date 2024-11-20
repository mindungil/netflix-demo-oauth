import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./";
import booleanReducer from "./boolean"

const store = configureStore({
    reducer: {
        counter: counter,
        boolean: booleanReducer
    },
    middleware: [ReduxThunk, logger],
    devTools: true,
});

export default store;