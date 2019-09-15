import { combineReducers } from 'redux'
import getCharacters from './characterReducer'
import getSpaceships from './spaceshipReducer'
import selectedCharacter from './selectedCharacter'
import paginationReducer from './paginationReducer'


export default combineReducers ({
    characters: getCharacters,
    spaceships: getSpaceships,
    selectedCharacter: selectedCharacter,
    currentPagination: paginationReducer
})
