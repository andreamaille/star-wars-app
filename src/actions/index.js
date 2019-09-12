import { getCharacters } from "../apis/swapi";

export const fetchCharacters = () => async (dispatch) => {
    await getCharacters
        .then(response => response.json())
        .then((data) => {
            console.log(data)
            dispatch({ type: 'FETCH_CHARACTERS', payload: data.results })
        })
        .catch(error => {
            console.error('Failing to fetch characters from API')
        })
}

export const selectCharacter = (character) => {
    return {
        type: 'SELECTED_CHARACTER',
        payload: character
    }


}
