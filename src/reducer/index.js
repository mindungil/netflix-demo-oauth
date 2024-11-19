import {combineReducers} from "redux";
import counter from "./coutner";

const rootReducer = combineReducers({
    counter
});

export default rootReducer;

//사용할 리듀서들을 묶어줌.