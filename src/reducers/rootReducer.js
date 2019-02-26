import { combineReducers } from 'redux'
import PostsReducer from './reducer_postList.js'
import ActivePostReducer from './reducer_activePost.js'
import PaginationReducer from './reducer_create_buttons.js'
import SearchInputReducer from './reducer_search_input.js'
import SearchResultsReducer from './reducer_search_results.js'

const rootReducer = combineReducers({
    postData: PostsReducer,
    activePost: ActivePostReducer,
    paginationButtons: PaginationReducer,
    searchInput: SearchInputReducer,
    searchResult: SearchResultsReducer
});

export default rootReducer

