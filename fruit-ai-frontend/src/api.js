import axios from 'axios';

const API = axios.create({
  baseURL: 'http://localhost:5000/api/faqs',
});

export const fetchFaqs = () => API.get('/');
export const fetchFaqById = (id) => API.get(`/${id}`);
export const createFaq = (faq) => API.post('/', faq);
export const updateFaq = (id, faq) => API.put(`/${id}`, faq);
export const deleteFaq = (id) => API.delete(`/${id}`);
