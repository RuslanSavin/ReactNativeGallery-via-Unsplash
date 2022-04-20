import * as actions from "../actions/actionTypes/actionTypes";

const initialState = {
  pending: false,
  loadMorePending: false,
  posts: [],
  error: false,
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case actions.GET_POSTS_PENDING:
      return {
        ...state,
        pending: true,
      };
    case actions.GET_MORE_POSTS_PENDING:
      return {
        ...state,
        loadMorePending: true,
      };
    case actions.GET_POSTS_SUCCESS:
      return {
        ...state,
        pending: false,
        posts: action.payload,
      };
    case actions.GET_MORE_POSTS_SUCCESS:
      const newPostsList = action.payload;
      const { posts } = state;
      return {
        ...state,
        loadMorePending: false,
        posts: [...posts, ...newPostsList],
      };
    case actions.GET_POSTS_FAILURE:
      return {
        ...state,
        pending: false,
        error: action.payload,
      };
    case actions.GET_MORE_POSTS_FAILURE:
      return {
        ...state,
        loadMorePending: false,
        error: action.payload,
      };
    case actions.REFRESH:
      return initialState;
    default:
      return state;
  }
}
