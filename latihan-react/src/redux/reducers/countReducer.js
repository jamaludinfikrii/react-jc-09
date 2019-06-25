const INITIAL_STATE = { count : 0 }

var CountReducer = (state = INITIAL_STATE,action) => {
    if(action.type === 'PLUS'){
        return {...state , count : state.count + 1}
    }else if(action.type === 'MIN'){
        return {...state , count : state.count - 1}
    }else{
        return state
    }
}

export default CountReducer;



