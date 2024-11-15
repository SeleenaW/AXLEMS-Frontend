import axios from "axios";

const API_BASE_URL = "http://localhost:3006/api";

/**
 * Create a new support query
 * @param {Object} queryData - Data related to the support query
 * @returns {Promise} - Axios response promise
 */
export const createSupportQuery = async (queryData) => {
  return await axios.post(`${API_BASE_URL}/support/queries`, queryData);
};

/**
 * Get a support query by ID
 * @param {string} id - The ID of the support query
 * @returns {Promise} - Axios response promise
 */
export const getSupportQueryById = async (id) => {
  return await axios.get(`${API_BASE_URL}/support/queries/${id}`);
};

/**
 * Update a support query
 * @param {string} id - The ID of the support query
 * @param {Object} queryData - Data to update the support query
 * @returns {Promise} - Axios response promise
 */
export const updateSupportQuery = async (id, queryData) => {
  return await axios.put(`${API_BASE_URL}/support/queries/${id}`, queryData);
};

/**
 * Delete a support query
 * @param {string} id - The ID of the support query
 * @returns {Promise} - Axios response promise
 */
export const deleteSupportQuery = async (id) => {
  return await axios.delete(`${API_BASE_URL}/support/queries/${id}`);
};

/**
 * Get all the user's support queries
 * @returns {Promise} - Axios response promise
 */
export const getMySupportQueries = async () => {
  return await axios.get(`${API_BASE_URL}/support/queries`);
};