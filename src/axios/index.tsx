import axios from 'axios';

const API = axios.create({
    baseURL: 'https://e-store-dashboad-backend.vercel.app',

});



export default API;
