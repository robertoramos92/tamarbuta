export default (state = {loading: true} , action) => {
    switch(action.type) {
      case 'FETCH_REQUEST': 
        return {isFetching: true, loading: true};
      case 'FETCH_SUCCESS':
        return {isFetching: false, postList: action.posts, postMeta: action.meta, loading: false};
      case 'FETCH_FAILURE':
        return {isFetching: false, error: action.error, loading: false };
      default:
        return state;
    }
  }
          
    