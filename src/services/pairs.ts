import { api } from './api';

export const getPairs = async () => api.get('api/pairs');
