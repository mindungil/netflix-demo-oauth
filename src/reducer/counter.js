export const INCREASE = "COUNT/INCREASE";

export const increaseCount = count => ({type: INCREASE, count});

const initalState = {
    count: 0
};

const counter = (state = initalState, action) => {
    switch (action.type) {
        case INCREASE:
            return {
                ...state,
                count: action.count
            };

        default:
            return state;
        }
};

export default counter;
// 액션 함수