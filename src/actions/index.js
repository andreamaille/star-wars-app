import { getCharacters, getSpaceships } from "../apis/swapi";
// Sweet Alerts
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
const swal = withReactContent(Swal)

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
            dispatch({
                type: 'FETCH_CHARACTERS',
                payload: characters
            })
        })
    )).catch(error => {
        if (!characters.length) {
            swal.fire({
                type: 'error',
                text: `Sorry! We can't get Star Wars characters at this time. Check back later!`
            })
        }
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
            swal.fire({
                type: 'error',
                text: `Thanks for visiting! We usually have spaceships 🚀 around here but they're on a mission. Check back later to see if they've come back! `
            })
        })
}

export const selectCharacter = (character) => {
    return {
        type: 'SELECTED_CHARACTER',
        payload: character
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

export const totalPages = (array) => {
    return {
        type: 'TOTAL_PAGES',
        payload: array
    }
}