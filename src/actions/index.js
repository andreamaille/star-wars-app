import { getCharacters, getSpaceships } from "../apis/swapi";

export const fetchCharacters = () => async (dispatch) => {
    let characters = []

    await Promise.all(getCharacters.map(url =>
        fetch(url)
        .then(function (response) {
            return response.json()
        })
        .then(function (data){
            for (let item of data.results) {
                characters = [
                    ...characters,
                    item
                ]
            }
        })
        .catch(error => {
            console.error('Failing to fetch characters from API')
            console.error(`Yo Andy, remember your internet goes out all the time so why don't you check there first`)
        })
    )) 

    dispatch({
        type: 'FETCH_CHARACTERS',
        payload: characters
    })

}

export const fetchSpaceships = () => async (dispatch) => {
    await getSpaceships
        .then(response => response.json())
        .then((data) => {
            dispatch({
                type: 'FETCH_SPACESHIPS',
                payload: data.results
            })
        })
        .catch(error => {
            console.error('Failing to fetch spaceships from API')
        })
}

export const selectCharacter = (character) => {
    return {
        type: 'SELECTED_CHARACTER',
        payload: character
    }
}

export const currentPage = (page) => {
    return {
        type: 'CURRENT_PAGE',
        payload: page
    }
}

export const nextPage = () => {
    return {
        type: 'NEXT_PAGE'
    }
}

export const previousPage = () => {
    return {
        type: 'PREVIOUS_PAGE'
    }
}

export const getPagination = (array) => {
    return {
        type: 'UPDATE_PAGINATION',
        payload: array
    }
}


export const totalPages = (array) => {
    return {
        type: 'TOTAL_PAGES',
        payload: array
    }
}
