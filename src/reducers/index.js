import { combineReducers } from 'redux'
import characters from './characterReducer'
import spaceships from './spaceshipReducer'
import selectedCharacter from './selectedCharacter'
import pagination from './paginationReducer'

export default combineReducers ({
    characters,
    spaceships,
    selectedCharacter,
    pagination
})