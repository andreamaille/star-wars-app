import { combineReducers } from 'redux'
import charactersReducer from './charactersReducer'
import selectedCharacterReducer from './selectedCharacterReducer'

const getCharacters = (state = [], action) => {
    switch (action.type) {
        case 'FETCH_CHARACTERS':

            // let characterResults = []

            // for (let item of action.payload) {
            //     const id = item.name.replace(/\s+/g, '')

            //     characterResults = [
            //             ...characterResults,
            //             {[id]: item}
            //     ]

            // }

            // return {
            //     ...state, 
            //     ...characterResults
            // }

            return action.payload
        default:
            return state
    }
}

const selectedCharacter = (state = null, action) => {
    switch (action.type) {
        case 'SELECTED_CHARACTER':
            return action.payload
        default:
            return state
    }
}

const currentPage = (page = 1, action) => {
    switch (action.type) {
        case 'CURRENT_PAGE':
            return page
        case 'NEXT_PAGE': 
            return page + 1
        case 'PREVIOUS_PAGE':
            return page - 1
        default: 
            return page
    }
}

const itemsPerPage = (page = 3, action) => {
    switch (action.type) {
        case 'ITEMS_PER_PAGE':
            return page
        default:
            return page
    }
}

export default combineReducers ({
    characters: getCharacters,
    selectedCharacter: selectedCharacter,
    currentPage: currentPage,
    itemsPerPage: itemsPerPage
})
