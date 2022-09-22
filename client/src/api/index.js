import axios from 'axios';

// const API = axios.create({ baseURL: 'http://localhost:5000' });


const API = axios.create({ baseURL: 'https://employee-finder-system-v1.herokuapp.com/' });

API.interceptors.request.use((req) => {
    if (localStorage.getItem('profile')) {
        req.headers.Authorization = `Bearer ${JSON.parse(localStorage.getItem('profile')).token}`;

    }

    return req;
});


export const fetchPostsByCreator = (name) => API.get(`/posts/my-profile/${name}`);

export const fetchPostsByTags = (skill) => API.get(`/posts/filter/${skill}`);

export const fetchPost = (id) => API.get(`/posts/${id}`);
export const fetchPosts = (page) => API.get(`/posts?page=${page}`);
export const fetchPostsSearch = (searchQuery) => API.get(`/posts/search?searchQuery=${searchQuery.search || 'none'}`)
export const createPost = (newPosts) => API.post('/posts', newPosts);
export const updatePost = (id, updatedPost) => API.patch(`/posts/${id}`, updatedPost)
export const deletePost = (id) => API.delete(`/posts/${id}`);

export const sendMsg = (message) => API.post('/posts/message', message);


export const singIn = (formData) => API.post('/user/signin', formData);
export const singUp = (formData) => API.post('/user/signup', formData);
