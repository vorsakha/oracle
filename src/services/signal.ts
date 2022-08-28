import { api } from './api';

export const getMainSignal = async () => api.get('api/signal');

export const getSignal = async (pair: string) => api.get(`api/single/${pair}`);
