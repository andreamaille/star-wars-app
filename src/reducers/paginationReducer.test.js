import paginationReducer from "./paginationReducer";

describe('Pagination Reducer', () => {
    it('should return default pagination settings', () => {
        const newState = paginationReducer(undefined, {})

        expect(newState).toEqual({
            currentPage: 1,
            itemsPerPage: 10
        })
    })

    it('should increment the page count by one', () => {
        const state = { 
            currentPage: 2, 
            itemsPerPage: 10, 
            totalPages: 9 
        }

        const newState = paginationReducer(state, {
            type: 'NEXT_PAGE'
        })

        expect(newState).toEqual({
            currentPage: 3,
            itemsPerPage: 10,
            totalPages: 9
        })
    })

    it('should decrement the page count by one', () => {
        const state = {
            currentPage: 5,
            itemsPerPage: 10,
            totalPages: 9
        }

        const newState = paginationReducer(state, {
            type: 'PREVIOUS_PAGE'
        })

        expect(newState).toEqual({
            currentPage: 4,
            itemsPerPage: 10,
            totalPages: 9
        })
    })

    it('should return the first page if page count is 1', () => {
        const state = {
            currentPage: 1,
            itemsPerPage: 10,
            totalPages: 9
        }

        const newState = paginationReducer(state, {
            type: 'PREVIOUS_PAGE'
        })

        expect(newState).toEqual({
            currentPage: 1,
            itemsPerPage: 10,
            totalPages: 9
        })
    })

    it('should divide the number of items in the array by items per page to get total number of pages to the nearest integer', () => {
        const state = {
            currentPage: 1,
            itemsPerPage: 10
        }

        const array = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]

        const newState = paginationReducer(state, {
            type: 'TOTAL_PAGES',
            payload: array
        })

        expect(newState).toEqual({
            currentPage: 1,
            itemsPerPage: 10,
            totalPages: 2,
            firstItem: 0,
            lastItem: 10
        })
    })
})