import axios from "axios";

export const baseUrl = "http://havannagroup-001-site1.itempurl.com";

export const api = axios.create({
  baseURL: baseUrl,
  headers: {
    // 'Content-Type': 'application/json',
    // 'Content-Type': 'application/json',
  },
});

const addAuthorizationHeader = (config) => {
  const token = localStorage.getItem("accessToken");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
};

api.interceptors.request.use(addAuthorizationHeader);
