import axios from 'axios';

export const apiCorreios = axios.create({
  baseURL: 'http://ws.correios.com.br/calculador/CalcPrecoPrazo.aspx?',
});

export const apiPagSeguro = axios.create({
  baseURL: 'https://ws.sandbox.pagseguro.uol.com.br/v2',
});
