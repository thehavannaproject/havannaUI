/* eslint-disable no-undef */

import axios from "axios";
const { NEXT_PUBLIC_API_BASE_DEV_URL } = process.env;

// export const baseUrl = "https://havannadevapi.azurewebsites.net";
// export const baseUrl = "https://havannagroup-001-site1.itempurl.com";

export const api = axios.create({
  baseURL: NEXT_PUBLIC_API_BASE_DEV_URL,
  headers: {
    // 'Content-Type': 'application/json',
    "Content-Type": "application/json",
  },
});

const addAuthorizationHeader = (config) => {
  const token = "SJFDJSJ";
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
};

api.interceptors.request.use(addAuthorizationHeader);
