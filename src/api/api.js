import axios from "axios";

const instance = axios.create({ baseURL: "http://localhost:5000"});

const getPosts = () => instance.get('/posts');

export const api = { getPosts };