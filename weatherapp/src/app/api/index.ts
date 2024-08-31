import axios from 'axios';
const API = axios.create({ baseURL: 'http://localhost:2020' });

export const getallLocalities=()=>API.get('/locality/get')