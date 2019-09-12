export default (state = null, action) => {
    switch (action.type) {
        case 'SELECTED_CHARACTER':
            return action.payload
        default:
            return state
    }
}
