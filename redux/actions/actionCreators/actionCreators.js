import ApiService from "../../../services/apiService";
import * as actions from "../actionTypes/actionTypes";

const apiService = new ApiService();
let pageNumber = 1;

export function fetchPosts() {
  return (dispatch) => {
    dispatch(fetchPostsPending());
    apiService
      .getAllPosts(pageNumber)
      .then((data) => {
        dispatch(fetchPostsSuccess(data));
      })
      .catch((error) => dispatch(fetchPostsFailure(error)));
    pageNumber++;
  };
}

export function fetchMorePosts() {
  return (dispatch) => {
    dispatch(fetchMorePostsPending());
    apiService
      .getAllPosts(pageNumber)
      .then((data) => {
        dispatch(fetchMorePostsSuccess(data));
      })
      .catch((error) => dispatch(fetchMorePostsFailure(error)));
    pageNumber++;
  };
}

export function refresh() {
  pageNumber = 1;
  return (dispatch) => {
    dispatch(fetchPostsPending());
    apiService
      .getAllPosts(pageNumber)
      .then((data) => {
        dispatch(fetchPostsSuccess(data));
      })
      .catch((error) => dispatch(fetchPostsFailure(error)));
  };
  pageNumber++;
}

export function fetchPostsPending() {
  return {
    type: actions.GET_POSTS_PENDING,
  };
}

export function fetchMorePostsPending() {
  return {
    type: actions.GET_MORE_POSTS_PENDING,
  };
}

export function fetchPostsSuccess(posts) {
  return {
    type: actions.GET_POSTS_SUCCESS,
    payload: posts,
  };
}

export function fetchMorePostsSuccess(posts) {
  return {
    type: actions.GET_MORE_POSTS_SUCCESS,
    payload: posts,
  };
}

export function fetchPostsFailure(error) {
  return {
    type: actions.GET_POSTS_FAILURE,
    payload: error,
  };
}

export function fetchMorePostsFailure(error) {
  return {
    type: actions.GET_MORE_POSTS_FAILURE,
    payload: error,
  };
}
