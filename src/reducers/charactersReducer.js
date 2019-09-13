export default (state = [], action) => {
    switch (action.type) {
        case 'FETCH_CHARACTERS':

            // let characterResults = []

            // for (let item of action.payload) {
            //     const id = item.name.replace(/\s+/g, '')

            //     characterResults = [
            //             ...characterResults,
            //             {[id]: item}
            //     ]

            // }

            // return {
            //     ...state, 
            //     ...characterResults
            // }

            return action.payload
        default:
            return state
    }
}