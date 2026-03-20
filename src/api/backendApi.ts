import axios from 'axios';

const backendUrl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:5000/api';

const backendApi = axios.create({   
    baseURL: backendUrl,
    headers: {
        'Content-Type': 'application/json',
    },
}); 


//Interceptors
 

export { backendApi };