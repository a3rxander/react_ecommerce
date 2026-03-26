import axios from 'axios';

const backendUrl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:5000/api';

const backendApi = axios.create({   
    baseURL: backendUrl,
    headers: {
        'Content-Type': 'application/json',
    },
}); 


//Interceptors 
backendApi.interceptors.request.use((config) => {
    const token = localStorage.getItem('token');
    if (token) {
        config.headers['Authorization'] = `Bearer ${token}`;
    }
    return config;
}
);
 

export { backendApi };