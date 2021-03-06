import axios from 'axios';

const API = axios.create({baseURL: 'http://localhost:5000'});


//const url = 'https://video-game-project.herokuapp.com/posts';

export const fetchPosts = ()        => API.get('/posts');
export const createPost = (newPost) => API.post('/posts', newPost); //this is where we send the data
export const likePost   = (id)      => API.patch(`/posts/${id}/likePost`);
export const updatePost = (id, updatedPost) => API.patch(`/posts/${id}`, updatedPost);
export const deletePost = (id)      => API.delete(`/posts/${id}`);

export const signIn = (formData) => API.post('/user/signin', formData);
export const signUp = (formData) => API.post('/user/signup', formData);
