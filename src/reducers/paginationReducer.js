export default (state = {}, action) => {
    switch (action.type) {
        case 'UPDATE_PAGINATION':
            return state

        case 'NEXT_PAGE':
            const page = { ...state }

            return {
                ...state,
                currentPage: page.currentPage + 1
            }
        case 'PREVIOUS_PAGE':
            const currentPage = { ...state }

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
            const currentPages = { ...state }

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
