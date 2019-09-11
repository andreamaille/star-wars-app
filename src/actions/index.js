import { getCharacters } from "../apis/swapi";

export const fetchCharacters = () => async (dispatch) => {
    const response = await getCharacters
        .then(response => response.json())
        .then((data) => {
            return data
        })
        .catch(error => {
            console.error('Failing to fetch characters from API')
        })

    dispatch({type: 'FETCH_CHARACTERS', payload: response.results})
}