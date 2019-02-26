export default function(state, action){
    switch (action.type) {
        case 'CREATE_BACK_BUTTON': return {backButton: action.backButton, forwardButton: action.forwardButton}
            
        case 'CREATE_FORWARD_BUTTON': return {backButton: action.backButton, forwardButton: action.forwardButton};
    
        default:
            return null
    }
}