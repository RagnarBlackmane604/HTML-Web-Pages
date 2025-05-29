import axios from "axios";

const API_URL = "http://localhost:5000/api"; 

export const login = async (email, password) => {
  const response = await axios.post(`${API_URL}/login`, { email, password });
  return response.data; // { token, user }
};

export const register = async (data) => {
  const response = await axios.post(`${API_URL}/register`, data);
  return response.data; // { token, user }
};
