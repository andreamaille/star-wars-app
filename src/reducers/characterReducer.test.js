import characterReducer from "./characterReducer";

describe('Character Reducer', () => {
    it('should return default state', () => {
        const newState = characterReducer(undefined, {})
        expect(newState).toEqual([])
    })

    it ('Should return new state array if receiving type', () => {
        const array = [{ item: 1 }, { item: 2 }, { item: 3 }]

        const newState = characterReducer(undefined, {
            type: 'FETCH_CHARACTERS',
            payload: array
        })

        expect(newState).toEqual(array)
    })
})