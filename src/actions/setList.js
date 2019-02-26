import Butter from 'buttercms';

export function handleInputChange(input) {
  return ({
    type: 'INPUT_CHANGE',
    input
  })
}
export function handleSearchRequest(search) {
  return {
    type:'FETCH_SEARCH_REQUEST',
    search
  }
}
export function selectPost(post) {
    
  return ({
      type: 'POST_SELECTED',
      post: post

  })
  
}
export function createBackButton(backButton){
  return ({
    type: 'CREATE_BACK_BUTTON',
    backButton,
    forwardButton: null
  })
}

export function createForwardButton(forwardButton){
  return ({
    type: 'CREATE_FORWARD_BUTTON',
    backButton: null,
    forwardButton
  })
}
export function requestFetchPostList() {
  return {
    type: 'FETCH_REQUEST'
  };
}

export function fetchPostListSuccess(posts) {
  return {
    type: 'FETCH_SUCCESS',
    posts: posts.data,
    meta: posts.meta
  };
}

export function fetchPostListError(error) {
  return {
    type: 'FETCH_FAILURE',
    error
  }
}



 export function fetchPostList(page) {
    
  return async dispatch => {
    
    const butter = Butter('0bd07fa7e1a9a1161750cb37535c418ab1593c19');
    try {
      let data = await butter.post.list({page:page, page_size:2})
      let posts = data.data
      dispatch(fetchPostListSuccess(posts))
      dispatch(selectPost(posts.data[0]))
      console.log(posts.data[0])
    return posts
      
    } catch (error) {
      dispatch(fetchPostListError(error))
      
    }
    

    }
} 

export function handleDelayedChange(input) {
  return async dispatch => {
    setTimeout(dispatch(handleInputChange(input)), 2700);

    try {
      const butter = Butter('0bd07fa7e1a9a1161750cb37535c418ab1593c19');
      let srch = await butter.post.search(input)
      let srchPosts = srch.data
      setTimeout(dispatch(handleSearchRequest(srchPosts)), 2000);
      
      console.log(srchPosts)
      
    } catch (error) {
      dispatch(fetchPostListError(error))
    }

    
  }
}