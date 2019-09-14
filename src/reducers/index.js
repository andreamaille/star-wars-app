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

const selectedCharacter = (state = [], action) => {
    switch (action.type) {
        case 'SELECTED_CHARACTER':
            return action.payload
        case 'DIRECT_ROUTE':
            return action.payload
        default:
            return state
    }
}

const updatePagination = (state = {}, action) => {
    switch (action.type) {
        case 'UPDATE_PAGINATION':
            return state

        case 'NEXT_PAGE': 
            const page = {...state}
            return {
                ...state,
                currentPage: page.currentPage + 1
            }
        case 'PREVIOUS_PAGE':
            const currentPage = {...state}

            if (currentPage.currentPage === 1) {
                return {
                    ...state,
                    currentPage: currentPage.currentPage
                }
            } else {
                return {
                    ...state,
                    currentPage: currentPage.currentPage - 1
                }
            }
        case 'TOTAL_PAGES': {
            const currentPages = {...state}

            const total = Math.floor(action.payload.length / currentPages.itemsPerPage)

            return {
                ...state,
                totalPages: total
            }
        }
        default:
            return {
                currentPage: 1,
                itemsPerPage: 10
            }
    }
}

export default combineReducers ({
    characters: getCharacters,
    spaceships: getSpaceships,
    selectedCharacter: selectedCharacter,
    currentPagination: updatePagination
})
