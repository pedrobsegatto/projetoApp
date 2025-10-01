import axios from 'axios';

const api = axios.create({
  baseURL: 'https://fakestoreapi.com',
  timeout: 10000,
});


export function formatPriceBRL(value) {
  
  const v = Number(value) || 0;
  return v.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
}

export default api;
