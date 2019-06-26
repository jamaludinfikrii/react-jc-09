import CountReducer from './countReducer'
import WordReducer from './wordsReducer'
import { combineReducers } from 'redux'

export default combineReducers({
    bebas : CountReducer,
    word : WordReducer
})