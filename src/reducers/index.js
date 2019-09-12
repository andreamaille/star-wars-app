import { combineReducers } from 'redux'
import charactersReducer from './charactersReducer'
import selectedCharacterReducer from './selectedCharacterReducer'

export default combineReducers ({
    characters: charactersReducer,
    selectedCharacter: selectedCharacterReducer,
})