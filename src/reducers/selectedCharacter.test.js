import selectedCharacter from "./selectedCharacter";

describe('Selected Character', () => {
    it('should return default state', () => {
        const newState = selectedCharacter(undefined, {})
        expect(newState).toEqual([])
    })

    it('Should return new state object if receiving type', () => {
        const object = {item: 1, item: 2, item:3}

        const newState = selectedCharacter(undefined, {
            type: 'SELECTED_CHARACTER',
            payload: object
        })

        expect(newState).toEqual(object)
    })
})