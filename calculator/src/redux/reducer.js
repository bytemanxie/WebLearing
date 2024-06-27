import ACTIONS from "./action";

const reducer = (state={
    currentOperand: '123',
    lastOperand: '321',
    operation: '*',
}, action) => {
    switch(action.type){
        case ACTIONS.ADD_DIGIT:
            return {...state, currentOperand: state.currentOperand + action.digit};
        default:
            return state;
    }
}

export default reducer;