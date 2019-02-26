export default (state = null, action) => {
    switch (action.type) {
        case 'FETCH_SEARCH_REQUEST': return action.search
            
        
    
        default: return state 
            
    }
}