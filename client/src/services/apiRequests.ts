import axios from "axios";

const api = axios.create({
  baseURL: 'http://localhost:3002'
});

export const requestData = async (endpoint: string) => {
  const { data } = await api.get(endpoint);
  return data;
};

export const requestCreate = async (endpoint: string, body:{name: string, pokemonId: number}) => {
  const { data } = await api.post(endpoint, body);
  return data;
};

export const requestDelete = async (endpoint: string, id: string) => {
  const endpointAndId = `${endpoint}${id}`
  const { data } = await api.delete(endpointAndId);
  return data;
};