import axios from "axios";

const API_BASE_URL = "http://localhost:3006/api";

/**
 * Log in a partner
 * @param {Object} credentials - The partner's login credentials (email and password)
 * @returns {Promise} - Axios response promise
 */
export const loginPartner = async (credentials) => {
  return await axios.post(`${API_BASE_URL}/partner/login`, credentials);
};

/**
 * Request a password reset
 * @param {Object} email - The partner's email
 * @returns {Promise} - Axios response promise
 */
export const requestPasswordReset = async (email) => {
  return await axios.post(`${API_BASE_URL}/partners/request-reset-password`, {
    email,
  });
};

/**
 * Reset password using OTP
 * @param {Object} data - Contains email, OTP, and the new password
 * @returns {Promise} - Axios response promise
 */
export const resetPassword = async (data) => {
  return await axios.post(`${API_BASE_URL}/partners/reset-password`, data);
};

/**
 * Register a new partner
 * @param {Object} formData - The data submitted during registration
 * @returns {Promise} - Axios response promise
 */
export const registerPartner = async (formData) => {
  return await axios.post(`${API_BASE_URL}/partners/register`, formData);
};
