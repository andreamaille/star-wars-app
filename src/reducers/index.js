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

const currentPage = (page = 1, action) => {
    switch (action.type) {
        case 'CURRENT_PAGE':
            return page
        case 'NEXT_PAGE': 
            return page + 1
        case 'PREVIOUS_PAGE':
            if (page === 1) {
                return page 
            } else {
                return page - 1
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

// const pagination = (state = {}, action) => {
//     switch (action.type) {
//         case 'PAGINATION':
//             const indexOfLastItem = action.payload.currentPage * action.payload.itemsPerPage

//             const indexOfFirstItem = indexOfLastItem - action.payload.itemsPerPage

//             const currentItems = action.payload.array.slice(indexOfFirstItem, indexOfLastItem)

//             console.log(currentItems)

//             return {
//                 currentPage: action.payload.currentPage,
//                 itemsPerPage: action.payload.itemsPerPage,
//                 currentItems: currentItems
//             }


//         default:
//             return state
//     }
// }

export default combineReducers ({
    characters: getCharacters,
    spaceships: getSpaceships,
    selectedCharacter: selectedCharacter,
    currentPage: currentPage,
    itemsPerPage: itemsPerPage,
})
