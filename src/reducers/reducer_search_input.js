export default (state = null, action) => {
    switch (action.type) {
        case 'INPUT_CHANGE': return action.input
            
            
    
        default: return state
            
    }
}