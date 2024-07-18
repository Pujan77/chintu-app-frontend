import axios from 'axios';

const API_URL = process.env.REACT_APP_BASE_URL;

export const api = axios.create({
    baseURL: API_URL,
    headers: {
        'Content-Type': 'application/json'
    }
});

export const getAllRecords = () => api.get('/bowelRecords');
export const createRecord = (data: any) => api.post('/bowelRecords', data);
export const updateRecord = (id: string, data: any) => api.put(`/bowelRecords/${id}`, data);
export const deleteRecord = (id: string) => api.delete(`/bowelRecords/${id}`);
