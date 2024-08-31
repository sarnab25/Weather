import axios from 'axios';
const API = axios.create({ baseURL: 'https://weather-hwvc.onrender.com' });

export const getallLocalities=()=>API.get('/locality/get')