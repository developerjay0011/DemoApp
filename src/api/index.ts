import axios from 'axios';

// Create an Axios instance
const api = axios.create({
  baseURL: 'url', // Replace with your API base URL
  timeout: 10000, // Timeout after 10 seconds
  headers: {
    'Content-Type': 'application/json',
  },
});

// Add a request interceptor if needed
api.interceptors.request.use(
  config => {
    // Modify request config here (e.g., add auth token)
    return config;
  },
  error => {
    return error
  }
);

// Add a response interceptor if needed
api.interceptors.response.use(
  response => response,
  error => {
    // Handle errors here (e.g., show notification)
    return error
  }
);

export default api;
