const INITIAL_STATE = {count : 0}

export default (state = INITIAL_STATE,action) => {
    switch(action.type){
        case 'COUNT_WORD':
            return {...state , count : action.payload}
        default:
            return state
    }
}

