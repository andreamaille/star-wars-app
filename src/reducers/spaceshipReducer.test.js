import spaceshipReducer from "./spaceshipReducer";

describe('Spaceship Reducer', () => {
    it('should return default state', () => {
        const newState = spaceshipReducer(undefined, {})
        expect(newState).toEqual([])
    })

    it('Should return new state array if receiving type', () => {
        const array = [{ item: 1 }, { item: 2 }, { item: 3 }]

        const newState = spaceshipReducer(undefined, {
            type: 'FETCH_SPACESHIPS',
            payload: array
        })
        
        expect(newState).toEqual(array)
    })
})