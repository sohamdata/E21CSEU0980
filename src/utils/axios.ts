import axios from 'axios';

const axiosInstance = axios.create({
    baseURL: 'http://20.244.56.144',
});

axiosInstance.interceptors.request.use(
    (config) => {
        const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJNYXBDbGFpbXMiOnsiZXhwIjoxNzE0MDQyODU1LCJpYXQiOjE3MTQwNDI1NTUsImlzcyI6IkFmZm9yZG1lZCIsImp0aSI6IjNlNGNiNzA4LTEyMzgtNDNkZS05NTAxLTc5MTkyYmJmYzAyZCIsInN1YiI6ImUyMWNzZXUwOTgwQGJlbm5ldHQuZWR1LmluIn0sImNvbXBhbnlOYW1lIjoic29oYW1fZ29NYXJ0IiwiY2xpZW50SUQiOiIzZTRjYjcwOC0xMjM4LTQzZGUtOTUwMS03OTE5MmJiZmMwMmQiLCJjbGllbnRTZWNyZXQiOiJJWlBSbnV0Tk5DZE1LVFp0Iiwib3duZXJOYW1lIjoiU29oYW1EYXR0YSIsIm93bmVyRW1haWwiOiJlMjFjc2V1MDk4MEBiZW5uZXR0LmVkdS5pbiIsInJvbGxObyI6IkUyMUNTRVUwOTgwIn0.hhe6LpDkmjorX_R6e6SkyQRzQ6YFvF1LizcFD4Sl-84';
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

axiosInstance.interceptors.response.use(
    (response) => response,
    (error) => Promise.reject((error.response && error.response.data) || 'Something went wrong')
);

export default axiosInstance;
