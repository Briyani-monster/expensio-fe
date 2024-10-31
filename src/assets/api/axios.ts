// src/axiosInstance.ts

import axios from "axios";

// Constants
const BASE_URL = import.meta.env.VITE_API_URL; // Set your base URL here
const DEFAULT_TIMEOUT = 10000; // Default timeout for requests

// Create an Axios instance
const axiosInstance = axios.create({
  baseURL: BASE_URL,
  timeout: DEFAULT_TIMEOUT,
});

// Function to get the auth token
const getAuthToken = async () => {
  // Simulate an async operation to get an auth token
  return "your-auth-token"; // Replace with actual token fetching logic
};

// Function to refresh the auth token
const refreshAuthToken = async () => {
  // Simulate an async operation to refresh an auth token
  return "new-auth-token"; // Replace with actual token refreshing logic
};

// Add request interceptor
axiosInstance.interceptors.request.use(
  async (config) => {
    const token = await getAuthToken(); // Get token asynchronously
    if (token) {
      config.headers["Authorization"] = `Bearer ${token}`; // Set token in headers
    }

    // Remove timeout for POST and PUT requests
    if (config.method === "post" || config.method === "put") {
      config.timeout = 0; // No timeout
    }

    return config;
  },
  (error) => Promise.reject(error), // Handle request errors
);

// Add response interceptor
axiosInstance.interceptors.response.use(
  (response) => response, // Return the response directly
  async (error) => {
    const { config: originalRequest, response } = error;

    // Check for 401 error and retry logic
    if (response?.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true; // Mark the request as retried

      try {
        const newToken = await refreshAuthToken(); // Refresh the token
        // Set new token in headers for retry
        axiosInstance.defaults.headers["Authorization"] = `Bearer ${newToken}`;
        originalRequest.headers["Authorization"] = `Bearer ${newToken}`;
        return axiosInstance(originalRequest); // Retry the original request
      } catch (refreshError) {
        return Promise.reject(refreshError); // Handle token refresh failure
      }
    }

    return Promise.reject(error); // Return the error if not handled
  },
);

export default axiosInstance;
