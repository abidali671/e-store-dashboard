import axios from 'axios';

const API = axios.create({
	baseURL: 'https://e-store-dashboad-backend.vercel.app',
	// baseURL: 'http://localhost:8080',
});

export default API;
