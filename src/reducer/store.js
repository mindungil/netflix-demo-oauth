import { configureStore } from "@reduxjs/toolkit";
import rootReducer from ".";

const store = configureStore({
    reducer: rootReducer,
    middleware: [ReduxThunk, logger],
    devTools: true,
    preloadedState : {
        counter: {
            count: 0
        }
    },

});