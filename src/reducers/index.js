import { combineReducers } from 'redux'

const getCharacters = (state = [], action) => {
    switch (action.type) {
        case 'FETCH_CHARACTERS':
            return action.payload
        default:
            return state
    }
}

const getSpaceships = (state = [], action) => {
    switch (action.type) {
        case 'FETCH_SPACESHIPS':
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
            if (page = 0) {
                return page 
            } else {
                return page + 1
            }
        default: 
            return page
    }
}

const itemsPerPage = (page = 9, action) => {
    switch (action.type) {
        case 'ITEMS_PER_PAGE':
            return page
        default:
            return page
    }
}

export default combineReducers ({
    characters: getCharacters,
    spaceships: getSpaceships,
    selectedCharacter: selectedCharacter,
    currentPage: currentPage,
    itemsPerPage: itemsPerPage
})
