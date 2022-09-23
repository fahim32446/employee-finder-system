
import * as api from '../api/index.js';

export const getPost = (id) => async (dispatch) => {
  try {
    dispatch({ type: "START_LOADING" });

    const { data } = await api.fetchPost(id);

    dispatch({ type: "FETCH_POST", payload: { post: data } });

    dispatch({ type: "END_LOADING" });

  } catch (error) {
    console.log(error);
  }
};


export const sendMessage = (message) => async (dispatch) => {
  try {

    const { data } = await api.sendMsg(message);

    dispatch({ type: 'AUTH', data });

  } catch (error) {
    console.log(error);
  }
};




export const getPostsByCreator = (name) => async (dispatch) => {
  try {
    dispatch({ type: "START_LOADING" });
    const { data: { data } } = await api.fetchPostsByCreator(name);
    // console.log(data);
    dispatch({ type: "FETCH_BY_CREATOR", payload: data });
    dispatch({ type: "END_LOADING" });
  } catch (error) {
    console.log(error);
  }
};

export const getPostsByTags = (skill) => async (dispatch) => {

  try {
    dispatch({ type: "START_LOADING" });
    const { data: { data } } = await api.fetchPostsByTags(skill);
   
    dispatch({ type: "FETCH_BY_CREATOR", payload: data });
    dispatch({ type: "END_LOADING" });
  } catch (error) {
    console.log(error);
  }
};




export const getPosts = (page) => async (dispatch) => {
  try {


    dispatch({ type: "START_LOADING" });

    const { data } = await api.fetchPosts(page);
    dispatch({ type: "FETCH_ALL", payload: data });

    dispatch({ type: "END_LOADING" });

  } catch (error) {
    console.log(error);
  }
};

export const getPostsSearch = (searchQuery) => async (dispatch) => {
  try {
    dispatch({ type: "START_LOADING" });
    const { data: { data } } = await api.fetchPostsSearch(searchQuery);
    dispatch({ type: "FETCH_SEARCH", payload: data });
    dispatch({ type: "END_LOADING" });
  } catch (error) {
    console.log(error);
  }
}



export const createPost = (post) => async (dispatch) => {
  try {
    const { data } = await api.createPost(post);
    dispatch({ type: "CREATE", payload: data });
  } catch (error) {
    console.log(error.message);
  }
};


export const updatePost = (id, post) => async (dispatch) => {
  try {
    dispatch({ type: "START_LOADING" });

    const { data } = await api.updatePost(id, post);
    dispatch({ type: "UPDATE", payload: data });

    dispatch({ type: "END_LOADING" });
  } catch (error) {
    console.log(error);
  }
};


export const deletePost = (id) => async (dispatch) => {
  try {

    await api.deletePost(id);
    dispatch({ type: "DELETE", payload: id });
  } catch (error) {
    console.log(error);
  }
};