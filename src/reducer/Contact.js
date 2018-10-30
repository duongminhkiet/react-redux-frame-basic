import * as CONSTANT from '../constant/Constant';

var initialState = {
    loading: false,
    contacts: [],
    error: null
}

var myReducer = (state = initialState, action) => {
    switch (action.type) {
        case CONSTANT.ERROR:
            return state;
        case CONSTANT.PENDING:
            return { ...state, loading: true };
        case CONSTANT.SUCCESS:
            return { ...state, contacts: action.contacts, loading: false, error: null };
        default: return { ...state, loading: false };
    }
}

export default myReducer;