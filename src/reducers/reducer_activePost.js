// State argument is not application state, only the par of the state this reducer is responsible for. 
let initialState = {loadingActivePost: true}
export default function(state = initialState, action) {
    switch (action.type) {
        case 'POST_SELECTED': return action.post;
        default: return state;
    
            
    }
}