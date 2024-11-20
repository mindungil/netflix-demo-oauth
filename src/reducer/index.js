import {combineReducers} from "redux";
import counter from "./coutner";
import booleanSlice from "./boolean"
const rootReducer = combineReducers({
    reducer: {
        counter,
        booleanSlice
    }
});

export default rootReducer;

//사용할 리듀서들을 묶어줌.