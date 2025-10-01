import axios from 'axios';

const api = axios.create({
  baseURL: 'https://fakestoreapi.com',
  timeout: 10000,
});

// Exporta helper para formatação de moeda BRL
export function formatPriceBRL(value) {
  // garante número
  const v = Number(value) || 0;
  return v.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
}

export default api;
