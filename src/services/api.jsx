/* eslint-disable no-useless-catch */
// src/services/api.js
import axios from 'axios';

const api = axios.create({
    baseURL: 'http://localhost:8000/api'
});

// Interceptor para adicionar o token em todas as requisições
api.interceptors.request.use(config => {
    const token = localStorage.getItem('token');
    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
});

export const login = async (email, password) => {
    try {
        const response = await api.post('/token/', {
            username: email,
            password: password
        });
        localStorage.setItem('token', response.data.access);
        return response.data;
    } catch (error) {
        throw error;
    }
};

export const getProdutos = async () => {
    try {
        const response = await api.get('/produtos/');
        return response.data;
    } catch (error) {
        throw error;
    }
};

export default api;