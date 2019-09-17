export default (state = {}, action) => {
    const pages = {...state}

    switch (action.type) {
        case 'NEXT_PAGE':
            if (pages.totalPages === pages.currentPage) {
                return {
                    ...state,
                    currentPage: pages.currentPage
                }
            } else {
                return {
                    ...state,
                    currentPage: pages.currentPage + 1
                }
            }
        case 'PREVIOUS_PAGE':
            if (pages.currentPage === 1) {
                return {
                    ...state,
                    currentPage: pages.currentPage
                }
            } else {
                return {
                    ...state,
                    currentPage: pages.currentPage - 1
                }
            }
        case 'TOTAL_PAGES': {
            const total = Math.floor(action.payload.length / pages.itemsPerPage)

            const indexOfLastItem = pages.currentPage * pages.itemsPerPage

            const indexOfFirstItem = indexOfLastItem - pages.itemsPerPage

            return {
                ...state,
                totalPages: total,
                firstItem: indexOfFirstItem,
                lastItem: indexOfLastItem
            }
        }
        default:
            return {
                currentPage: 1,
                itemsPerPage: 10
            }
    }
}
