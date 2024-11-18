import axios from 'axios';

const API_BASE_URL = 'http://localhost:3006/api';

export const createSupportQuery = async (queryData) => {
  console.log('queryData front', queryData);
  return await axios.post(`${API_BASE_URL}/partner_query/queries`, queryData);
};

export const getSupportQueryById = async (id) => {
  return await axios.get(`${API_BASE_URL}/partner_query/queries${id}`);
};

export const updateSupportQuery = async (id, queryData) => {
  return await axios.put(
    `${API_BASE_URL}/partner_query/queries/${id}`,
    queryData,
  );
};

export const deleteSupportQuery = async (id) => {
  return await axios.delete(`${API_BASE_URL}/partner_query/queries/${id}`);
};

export const getMySupportQueries = async () => {
  return await axios.get(`${API_BASE_URL}/partner_query/queries`);
};
